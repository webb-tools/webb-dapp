import { Environment, EVMAssetTransfer } from '@buildwithsygma/sygma-sdk-core';
import { ChainConfig } from '@webb-tools/dapp-config/chains/chain-config.interface';
import { type Chain, type FallbackTransport, type PublicClient } from 'viem';

import { BridgeTokenType } from '../../../../types/bridge';
import viemNetworkClientToEthersProvider from '../../../../utils/viemNetworkClientToEthersProvider';

export default async function sygmaEvm(params?: {
  senderAddress: string;
  recipientAddress: string;
  viemClient: PublicClient<FallbackTransport, Chain>;
  sourceChain: ChainConfig;
  destinationChain: ChainConfig;
  token: BridgeTokenType;
  amount: string;
}) {
  if (!params) return null;

  const {
    senderAddress,
    recipientAddress,
    viemClient,
    sourceChain,
    destinationChain,
    token,
    amount,
  } = params;

  const ethersProvider = viemNetworkClientToEthersProvider(viemClient);

  const assetTransfer = new EVMAssetTransfer();
  await assetTransfer.init(
    ethersProvider,
    sourceChain.tag === 'live'
      ? Environment.MAINNET
      : sourceChain.tag === 'test'
        ? Environment.TESTNET
        : Environment.DEVNET,
  );

  if (!token.sygmaResourceId) {
    throw new Error('Token does not have a Sygma resource ID');
  }

  const transfer = await assetTransfer.createFungibleTransfer(
    senderAddress,
    // TODO: make sure id is match with Sygma SDK doc
    destinationChain.id,
    recipientAddress,
    token.sygmaResourceId,
    amount,
  );

  const fee = await assetTransfer.getFee(transfer);
  const tx = await assetTransfer.buildTransferTransaction(transfer, fee);

  return { fee, tx };
}
