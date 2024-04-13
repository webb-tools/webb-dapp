import { ethers } from 'ethers';
import { useCallback } from 'react';

import {
  Precompile,
  PrecompileAddress,
  STAKING_PRECOMPILE_ABI,
} from '../../constants/evmPrecompiles';
import useAgnosticTx from '../../hooks/useAgnosticTx';
import { EvmTxFactory } from '../../hooks/useEvmPrecompileAbiCall';
import { SubstrateTxFactory } from '../../hooks/useSubstrateTx';
import { evmToSubstrateAddress } from '../../utils';

export type UsePayoutAllTxContext = {
  validatorEraPairs: { validatorAddress: string; era: string }[];
};

const STAKING_INTERFACE = new ethers.utils.Interface(STAKING_PRECOMPILE_ABI);

const usePayoutAllTx = () => {
  const evmTxFactory: EvmTxFactory<Precompile.BATCH, UsePayoutAllTxContext> =
    useCallback((context) => {
      const batchCalls = context.validatorEraPairs.map(
        ({ validatorAddress, era }) => {
          const validatorEvmAddress = evmToSubstrateAddress(validatorAddress);

          return {
            to: PrecompileAddress.STAKING,
            value: 0,
            gasLimit: 0,
            callData: STAKING_INTERFACE.encodeFunctionData('payoutStakers', [
              validatorEvmAddress,
              Number(era),
            ]),
          };
        }
      );

      return {
        functionName: 'batchAll',
        arguments: [
          batchCalls.map((call) => call.to),
          batchCalls.map((call) => call.value),
          batchCalls.map((call) => call.callData),
          batchCalls.map((call) => call.gasLimit),
        ],
      };
    }, []);

  const substrateTxFactory: SubstrateTxFactory<UsePayoutAllTxContext> =
    useCallback((api, _activeSubstrateAddress, context) => {
      const txs = context.validatorEraPairs.map(({ validatorAddress, era }) => {
        const validatorSubstrateAddress =
          evmToSubstrateAddress(validatorAddress);

        return api.tx.staking.payoutStakers(validatorSubstrateAddress, era);
      });

      return api.tx.utility.batchAll(txs);
    }, []);

  return useAgnosticTx<Precompile.BATCH, UsePayoutAllTxContext>({
    precompile: Precompile.BATCH,
    evmTxFactory,
    substrateTxFactory,
  });
};

export default usePayoutAllTx;
