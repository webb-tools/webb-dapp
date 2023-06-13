import { ApiPromise } from '@polkadot/api';
import { ICurrency } from '@webb-tools/dapp-config/on-chain-config/on-chain-config-base';
import { anchorDeploymentBlock } from '@webb-tools/dapp-config/src/anchors/anchor-config';
import { chainsConfig } from '@webb-tools/dapp-config/src/chains/chain-config';
import { substrateProviderFactory } from '@webb-tools/polkadot-api-provider/src/utils';
import {
  ChainType,
  parseTypedChainId,
} from '@webb-tools/sdk-core/typed-chain-id';
import evmProviderFactory from '@webb-tools/web3-api-provider/src/utils/evmProviderFactory';
import chalk from 'chalk';
import fs from 'fs';
import { workspaceRoot } from 'nx/src/utils/workspace-root';
import path from 'path';
import { ON_CHAIN_CONFIG_PATH } from '../src/constants';
import fetchAnchorMetadata, {
  AnchorMetadata,
} from './utils/on-chain-utils/fetchAnchorMetadata';
import fetchNativeCurrency from './utils/on-chain-utils/fetchNative';

const configPath = path.join(workspaceRoot, ON_CHAIN_CONFIG_PATH);

// For the fetching currency on chain effect
const anchorConfig = Object.keys(anchorDeploymentBlock).reduce(
  (acc, typedChainId) => {
    const addresses = Object.keys(anchorDeploymentBlock[+typedChainId]);
    if (addresses && addresses.length > 0) {
      acc[+typedChainId] = addresses;
    }
    return acc;
  },
  {} as Record<number, string[]>
);

// Private methods

async function filterActiveEVMChains(
  typedChainIds: number[]
): Promise<number[]> {
  return (
    await Promise.all(
      typedChainIds
        .filter(
          (typedChainId) =>
            parseTypedChainId(typedChainId).chainType === ChainType.EVM
        )
        .map(async (typedChainId) => {
          try {
            const provider = await evmProviderFactory(typedChainId);
            await provider.getNetwork();
            return typedChainId;
          } catch (error) {
            return null;
          }
        })
    )
  ).filter((t): t is number => t !== null);
}

async function filterActiveSubstrateChains(
  typedChainIds: number[]
): Promise<Record<number, ApiPromise>> {
  const providers = await Promise.all(
    typedChainIds.map(async (typedChainId) => {
      const { chainType } = parseTypedChainId(typedChainId);
      if (chainType !== ChainType.Substrate) {
        return null;
      }

      try {
        return await substrateProviderFactory(+typedChainId);
      } catch (error) {
        return null;
      }
    })
  );

  return providers.reduce((acc, provider, index) => {
    if (provider) {
      acc[typedChainIds[index]] = provider;
    }
    return acc;
  }, {} as Record<number, ApiPromise>);
}

async function fetchNativeTask(
  typedChainIds: number[],
  substrateProviderRecord?: Record<number, ApiPromise>
) {
  console.log(chalk`{cyan Fetching native currencies...}`);

  const nativeCurrencies = await typedChainIds.reduce(
    async (acc, typedChainId) => {
      const native = await acc;
      const provider = substrateProviderRecord?.[typedChainId];
      const nativeCurrency = await fetchNativeCurrency(typedChainId, provider);
      native[typedChainId] = nativeCurrency;
      return native;
    },
    {} as Promise<Record<number, ICurrency>>
  );

  const symbolsSet = Object.values(nativeCurrencies).reduce((acc, cur) => {
    acc.add(cur.symbol);
    return acc;
  }, new Set<string>());

  console.log(
    chalk`{green Found ${
      Object.keys(nativeCurrencies).length
    } native currencies with ${symbolsSet.size} symbols: ${Array.from(
      symbolsSet
    ).join(', ')}}`
  );

  return nativeCurrencies;
}

async function fetchAnchorMetadataTask(
  typedChainIds: number[],
  substrateProviderRecord?: Record<number, ApiPromise>
): Promise<Record<number, AnchorMetadata[]>> {
  console.log(chalk`{cyan Fetching anchor metadata...}`);

  // Fetch anchor metadata in parallel
  const metadataWithTypedChainId = await Promise.all(
    typedChainIds.map(async (typedChainId) => {
      const addresses = anchorConfig[typedChainId];
      const provider = substrateProviderRecord?.[typedChainId];

      // Fetch metadata in parallel and ignore the rejected ones
      const metadataSettled = await Promise.allSettled(
        addresses.map((address) =>
          fetchAnchorMetadata(address, typedChainId, provider)
        )
      );

      const metadata = metadataSettled
        .filter(
          (result): result is PromiseFulfilledResult<AnchorMetadata> =>
            result.status === 'fulfilled'
        )
        .map((result) => result.value);

      return {
        typedChainId,
        metadata,
      };
    })
  );

  const metadataRecord = metadataWithTypedChainId.reduce(
    (acc, { typedChainId, metadata }) => {
      acc[typedChainId] = metadata;
      return acc;
    },
    {} as Record<number, AnchorMetadata[]>
  );

  // For logging
  const anchorsCount = Object.values(metadataRecord).reduce(
    (acc, cur) => acc + cur.length,
    0
  );

  console.log(
    chalk`{green Found ${anchorsCount} anchors on ${typedChainIds.length} chains}`
  );

  return metadataRecord;
}

async function writeFileTask(
  typedChainIds: number[],
  nativeRecord: Record<number, ICurrency>,
  metadataRecord: Record<number, AnchorMetadata[]>
): Promise<void> {
  const writeFileSpinner = console.log(
    chalk`{cyan Writing config to ${configPath}...}`
  );

  const writableConfig = typedChainIds.reduce((acc, typedChainId) => {
    const native = nativeRecord[typedChainId];
    const anchorMetadatas = metadataRecord[typedChainId];

    if (!native || !anchorMetadatas) {
      console.log(
        chalk`{yellow Skipping chain ${
          chainsConfig[typedChainId]?.name ?? 'Unknown'
        } because native or anchor metadata is missing}`
      );
      return acc;
    }

    acc[typedChainId] = {
      nativeCurrency: native,
      anchorMetadatas,
    };

    return acc;
  }, {} as Record<number, { nativeCurrency: ICurrency; anchorMetadatas: AnchorMetadata[] }>);

  // Ensure directories are created
  const dir = path.dirname(configPath);
  try {
    await fs.promises.access(dir);
  } catch (error) {
    await fs.promises.mkdir(dir, { recursive: true });
  }

  // Write data to the JSON file
  try {
    await fs.promises.writeFile(
      configPath,
      JSON.stringify(writableConfig, null, 2)
    );
    console.log(
      chalk`{green Config successfully written to ${chalk.bold.underline(
        configPath
      )}}`
    );
  } catch (error) {
    console.log(chalk`{red Failed to write config to ${configPath}: ${error}}`);
  }
}

// Main function

async function main() {
  const onChainConfigSpinner = console.log(
    chalk.cyan.bold('Fetching on chain config on evm...')
  );

  const typedChainIds = Object.keys(anchorDeploymentBlock).map((id) => +id);

  // Filter out the active chains
  const evmTypedChainIds = await filterActiveEVMChains(typedChainIds);

  const substrateProviderRecord = await filterActiveSubstrateChains(
    typedChainIds
  );
  const substrateTypedChainIds = Object.keys(substrateProviderRecord).map(
    (id) => +id
  );
  const activeTypedChainIds = evmTypedChainIds.concat(substrateTypedChainIds);

  const activeChainNames = activeTypedChainIds.map(
    (typedChainId) => chainsConfig[typedChainId].name
  );

  console.log(
    chalk`{green Found ${
      activeTypedChainIds.length
    } active chains: ${activeChainNames.join(', ')}}`
  );

  const [nativeRecord, anchorMetadataRecord] = await Promise.all([
    fetchNativeTask(activeTypedChainIds, substrateProviderRecord),
    fetchAnchorMetadataTask(activeTypedChainIds, substrateProviderRecord),
  ]);

  await writeFileTask(activeTypedChainIds, nativeRecord, anchorMetadataRecord);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => process.exit(0));
