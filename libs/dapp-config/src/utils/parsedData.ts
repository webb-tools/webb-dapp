import { CurrencyRole, CurrencyType } from '@webb-tools/dapp-types';
import {
  ChainType,
  parseTypedChainId,
} from '@webb-tools/sdk-core/typed-chain-id';
import { AnchorConfigEntry, anchorDeploymentBlock } from '../anchors';
import { CurrencyConfig } from '../currencies/currency-config.interface';
import onChainConfigData from '../generated/on-chain-config.json';
import addCurrencyToConfig from './addCurrencyToConfig';

// Construct the currency config from the on-chain config by their symbol and name
const { currencies, anchors, fungibleToWrappableMap } = Object.entries(
  onChainConfigData
).reduce(
  (acc, [typedChainIdStr, config]) => {
    const { currencies, anchors, fungibleToWrappableMap } = acc;

    const typedChainId = +typedChainIdStr;
    const { chainType } = parseTypedChainId(typedChainId);
    const native = config.nativeCurrency;
    const anchorMetadata = config.anchorMetadatas;

    const nativeCurerncyConfig = addCurrencyToConfig(
      currencies,
      native,
      typedChainId,
      CurrencyRole.Wrappable,
      CurrencyType.NATIVE
    );

    // Iterate through the anchor metadata and add them to the config
    anchorMetadata.forEach((metaddata) => {
      const {
        address: anchorAddress,
        fungibleCurrency,
        isNativeAllowed,
        linkableAnchor,
        wrappableCurrencies,
      } = metaddata;

      // Add fungible currency to config
      const fungibleCurrencyConfig = addCurrencyToConfig(
        currencies,
        fungibleCurrency,
        typedChainId,
        CurrencyRole.Governable,
        chainType === ChainType.EVM ? CurrencyType.ERC20 : CurrencyType.ORML
      );

      const wrappableIdSet = new Set<number>();

      // Iterate through the wrappable currencies and add them to the config
      wrappableCurrencies.forEach((wrappableCurrency) => {
        const wrappableConfig = addCurrencyToConfig(
          currencies,
          wrappableCurrency,
          typedChainId,
          CurrencyRole.Wrappable,
          chainType === ChainType.EVM ? CurrencyType.ERC20 : CurrencyType.ORML
        );

        wrappableIdSet.add(wrappableConfig.id);
      });

      if (isNativeAllowed) {
        wrappableIdSet.add(nativeCurerncyConfig.id);
      }

      const wrappableMap = fungibleToWrappableMap.get(
        fungibleCurrencyConfig.id
      );
      if (!wrappableMap) {
        fungibleToWrappableMap.set(
          fungibleCurrencyConfig.id,
          new Map([[typedChainId, wrappableIdSet]])
        );
      } else {
        wrappableMap.set(typedChainId, wrappableIdSet);
      }

      // Add anchor to config
      const existedAnchor = anchors[fungibleCurrencyConfig.id];
      if (!existedAnchor) {
        anchors[fungibleCurrencyConfig.id] = {
          ...linkableAnchor,
          [typedChainId]: anchorAddress,
        };
      } else {
        if (
          existedAnchor[typedChainId] &&
          existedAnchor[typedChainId].toLowerCase() !==
            anchorAddress.toLowerCase()
        ) {
          throw new Error(
            `Anchor for currency ${fungibleCurrency.name} already exists on chain ${typedChainId} Current: ${existedAnchor[typedChainId]}, new one: ${anchorAddress}`
          );
        }

        existedAnchor[typedChainId] = anchorAddress;
      }
    });

    return { currencies, anchors, fungibleToWrappableMap };
  },
  { currencies: {}, anchors: {}, fungibleToWrappableMap: new Map() } as {
    currencies: Record<number, CurrencyConfig>;
    anchors: Record<number, AnchorConfigEntry>;
    fungibleToWrappableMap: Map<number, Map<number, Set<number>>>;
  }
);

// For the fetching currency on chain effect
const parsedAnchorConfig = Object.keys(anchorDeploymentBlock).reduce(
  (acc, typedChainId) => {
    const addresses = Object.keys(anchorDeploymentBlock[+typedChainId]);
    if (addresses && addresses.length > 0) {
      acc[+typedChainId] = addresses;
    }
    return acc;
  },
  {} as Record<number, string[]>
);

export { anchors, currencies, fungibleToWrappableMap, parsedAnchorConfig };
