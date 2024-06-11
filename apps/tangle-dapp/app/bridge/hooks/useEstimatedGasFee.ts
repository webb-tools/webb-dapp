'use client';

import { isAddress, isEthereumAddress } from '@polkadot/util-crypto';
import Decimal from 'decimal.js';
import useSWR from 'swr';

import { useBridge } from '../../../context/BridgeContext';
import useActiveAccountAddress from '../../../hooks/useActiveAccountAddress';
import { BridgeType } from '../../../types/bridge';
import { getEthersGasPrice } from '../lib/fee';
import sygmaEvm from '../lib/transfer/sygmaEvm';
import sygmaSubstrate from '../lib/transfer/sygmaSubstrate';
import useAmountToTransfer from './useAmountToTransfer';
import useDecimals from './useDecimals';
import useEthersProvider from './useEthersProvider';
import useEthersSigner from './useEthersSigner';
import useSelectedToken from './useSelectedToken';
import useSubstrateApi from './useSubstrateApi';

export default function useEstimatedGasFee() {
  const activeAccountAddress = useActiveAccountAddress();
  const {
    destinationAddress,
    bridgeType,
    selectedSourceChain,
    selectedDestinationChain,
  } = useBridge();
  const selectedToken = useSelectedToken();
  const ethersProvider = useEthersProvider();
  const ethersSigner = useEthersSigner();
  const api = useSubstrateApi();
  const amountToTransfer = useAmountToTransfer();
  const decimals = useDecimals();

  const { data: ethersGasPrice } = useSWR(
    [ethersProvider !== null ? { provider: ethersProvider } : undefined],
    async ([...args]) => {
      return await getEthersGasPrice(...args);
    },
  );

  const { data: evmEstimatedGasPrice } = useSWR(
    [
      activeAccountAddress !== null &&
      isEthereumAddress(activeAccountAddress) &&
      bridgeType !== null &&
      ethersProvider !== null &&
      ethersSigner !== null
        ? {
            senderAddress: activeAccountAddress,
            recipientAddress: destinationAddress,
            provider: ethersProvider,
            sourceChain: selectedSourceChain,
            destinationChain: selectedDestinationChain,
            token: selectedToken,
            amount: amountToTransfer,
          }
        : undefined,
    ],
    async ([...args]) => {
      const sygmaEvmTransfer = await sygmaEvm(...args);
      if (sygmaEvmTransfer === null || ethersSigner === null) return null;
      const { tx } = sygmaEvmTransfer;
      return new Decimal((await ethersSigner.estimateGas(tx)).toString());
    },
  );

  const { data: substrateSygmaFee } = useSWR(
    [
      activeAccountAddress !== null &&
      isAddress(activeAccountAddress) &&
      bridgeType !== null &&
      api !== null
        ? {
            senderAddress: activeAccountAddress,
            recipientAddress: destinationAddress,
            api,
            sourceChain: selectedSourceChain,
            destinationChain: selectedDestinationChain,
            token: selectedToken,
            amount: amountToTransfer,
          }
        : undefined,
    ],
    async ([...args]) => {
      const sygmaSubstrateTransfer = await sygmaSubstrate(...args);
      if (sygmaSubstrateTransfer === null || activeAccountAddress === null)
        return null;
      const { tx } = sygmaSubstrateTransfer;
      const { partialFee } = await tx.paymentInfo(activeAccountAddress);
      return new Decimal(partialFee.toString()).div(Decimal.pow(10, decimals));
    },
  );

  switch (bridgeType) {
    case BridgeType.SYGMA_EVM_TO_EVM:
    case BridgeType.SYGMA_SUBSTRATE_TO_SUBSTRATE: {
      if (ethersGasPrice == null || evmEstimatedGasPrice == null) return null;
      return ethersGasPrice.times(evmEstimatedGasPrice);
    }
    case BridgeType.SYGMA_EVM_TO_SUBSTRATE:
    case BridgeType.SYGMA_SUBSTRATE_TO_EVM: {
      return substrateSygmaFee ?? null;
    }
    default:
      return null;
  }
}
