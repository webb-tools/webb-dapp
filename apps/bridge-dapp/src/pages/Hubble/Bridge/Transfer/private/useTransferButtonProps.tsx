import { Currency } from '@webb-tools/abstract-api-provider/currency';
import { OptionalActiveRelayer } from '@webb-tools/abstract-api-provider/relayer/types';
import utxoFromVAnchorNote from '@webb-tools/abstract-api-provider/utils/utxoFromVAnchorNote';
import { useWebContext } from '@webb-tools/api-provider-environment/webb-context';
import chainsPopulated from '@webb-tools/dapp-config/chains/chainsPopulated';
import { ZERO_BIG_INT } from '@webb-tools/dapp-config/constants';
import { WebbError, WebbErrorCodes } from '@webb-tools/dapp-types/WebbError';
import type { Nullable } from '@webb-tools/dapp-types/utils/types';
import { NoteManager } from '@webb-tools/note-manager/';
import { useBalancesFromNotes } from '@webb-tools/react-hooks/currency/useBalancesFromNotes';
import { Keypair, calculateTypedChainId } from '@webb-tools/sdk-core';
import { ComponentProps, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { BooleanParam, StringParam, useQueryParams } from 'use-query-params';
import { formatEther } from 'viem';
import {
  AMOUNT_KEY,
  BRIDGE_PATH,
  HAS_REFUND_KEY,
  RECIPIENT_KEY,
  REFUND_RECIPIENT_KEY,
  TRANSFER_PATH,
} from '../../../../../constants';
import TransferConfirmContainer from '../../../../../containers/TransferConfirmContainer/TransferConfirmContainer';
import useChainsFromRoute from '../../../../../hooks/useChainsFromRoute';
import useConnectButtonProps from '../../../../../hooks/useConnectButtonProps';
import useCurrenciesFromRoute from '../../../../../hooks/useCurrenciesFromRoute';
import handleTxError from '../../../../../utils/handleTxError';

export type UseTransferButtonPropsArgs = {
  balances: ReturnType<typeof useBalancesFromNotes>['balances'];
  receivingAmount?: number;
  isFeeLoading?: boolean;
  totalFeeWei?: bigint;
  feeToken?: string;
  resetFeeInfo?: () => void;
  activeRelayer: OptionalActiveRelayer;
  refundAmount?: bigint;
  refundToken?: string;
  refundRecipientError?: string;
};

function useTransferButtonProps({
  balances,
  receivingAmount,
  isFeeLoading,
  totalFeeWei,
  feeToken,
  refundAmount,
  refundToken,
  resetFeeInfo,
  activeRelayer,
  refundRecipientError,
}: UseTransferButtonPropsArgs) {
  const navigate = useNavigate();

  const { activeApi, activeChain, isConnecting, loading, noteManager } =
    useWebContext();

  const [query] = useQueryParams({
    [AMOUNT_KEY]: StringParam,
    [RECIPIENT_KEY]: StringParam,
    [HAS_REFUND_KEY]: BooleanParam,
    [REFUND_RECIPIENT_KEY]: StringParam,
  });

  const {
    [AMOUNT_KEY]: amount,
    [RECIPIENT_KEY]: recipient,
    [HAS_REFUND_KEY]: hasRefund,
    [REFUND_RECIPIENT_KEY]: refundRecipient,
  } = query;

  const {
    srcChainCfg: srcChain,
    srcTypedChainId,
    destChainCfg: destChain,
    destTypedChainId,
  } = useChainsFromRoute();

  const { fungibleCfg } = useCurrenciesFromRoute();

  const { content: connectBtnCnt, handleConnect } =
    useConnectButtonProps(srcTypedChainId);

  const isValidAmount = useMemo(() => {
    if (!fungibleCfg) {
      return false;
    }

    if (typeof srcTypedChainId !== 'number') {
      return false;
    }

    if (typeof amount !== 'string' || amount.length === 0) {
      return false;
    }

    const balance = balances[fungibleCfg.id]?.[srcTypedChainId];

    if (!balance || typeof receivingAmount !== 'number') {
      return false;
    }

    try {
      const amountBI = BigInt(amount);
      return (
        amountBI > ZERO_BIG_INT && amountBI <= balance && receivingAmount >= 0
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }, [amount, balances, srcTypedChainId, fungibleCfg, receivingAmount]);

  const inputCnt = useMemo(
    () => {
      if (typeof srcTypedChainId !== 'number') {
        return 'Select source chain';
      }

      if (typeof destTypedChainId !== 'number') {
        return 'Select destination chain';
      }

      if (!fungibleCfg) {
        return 'Select pool';
      }

      const amountFilled = typeof amount === 'string' && amount.length > 0;
      if (amountFilled && BigInt(amount) <= ZERO_BIG_INT) {
        return 'Enter amount';
      }

      if (!recipient) {
        return 'Enter recipient';
      }

      if (hasRefund && !refundRecipient) {
        return 'Enter refund recipient';
      }

      if (!isValidAmount) {
        return 'Insufficient balance';
      }
    },
    // prettier-ignore
    [srcTypedChainId, destTypedChainId, fungibleCfg, amount, recipient, hasRefund, refundRecipient, isValidAmount],
  );

  const btnText = useMemo(() => {
    if (connectBtnCnt) {
      return connectBtnCnt;
    }

    if (inputCnt) {
      return inputCnt;
    }

    return 'Transfer';
  }, [connectBtnCnt, inputCnt]);

  const isDisabled = useMemo(
    () => {
      if (connectBtnCnt) {
        return false;
      }

      const allInputsFilled =
        typeof amount === 'string' &&
        amount.length > 0 &&
        !!fungibleCfg &&
        !!recipient &&
        typeof destTypedChainId === 'number';

      const refundFilled = hasRefund ? !!refundRecipient : true;

      const userInputValid =
        allInputsFilled &&
        refundFilled &&
        isValidAmount &&
        !refundRecipientError;

      if (!userInputValid || isFeeLoading) {
        return true;
      }

      const isSrcChainActive =
        srcChain &&
        srcChain.id === activeChain?.id &&
        srcChain.chainType === activeChain?.chainType;

      if (!activeChain || !isSrcChainActive) {
        return false;
      }

      return false;
    },
    // prettier-ignore
    [activeChain, amount, connectBtnCnt, destTypedChainId, fungibleCfg, hasRefund, isFeeLoading, isValidAmount, recipient, refundRecipient, refundRecipientError, srcChain],
  );

  const isLoading = useMemo(() => {
    return loading || isConnecting;
  }, [isConnecting, loading]);

  const [transferConfirmComponent, setTransferConfirmComponent] =
    useState<React.ReactElement<
      ComponentProps<typeof TransferConfirmContainer>,
      typeof TransferConfirmContainer
    > | null>(null);

  const handleTransferBtnClick = useCallback(
    async () => {
      let actualApi: Nullable<typeof activeApi> = activeApi;

      // For type assertion
      const _validAmount =
        isValidAmount && !!amount && typeof receivingAmount === 'number';

      const allInputsFilled =
        !!srcChain &&
        !!fungibleCfg &&
        !!srcTypedChainId &&
        !!destTypedChainId &&
        !!recipient &&
        (hasRefund ? !!refundRecipient : true) &&
        _validAmount;

      try {
        if (connectBtnCnt && typeof srcTypedChainId === 'number') {
          const nextApi = await handleConnect(srcTypedChainId);

          const nextApiReady = [
            nextApi?.noteManager,
            nextApi?.state.activeBridge,
            nextApi?.methods.variableAnchor.actions,
            allInputsFilled,
          ].every((v) => Boolean(v));

          if (!nextApiReady) {
            return;
          }

          actualApi = nextApi;
        }

        const vAnchorApi = actualApi?.methods.variableAnchor.actions.inner;

        const doesApiReady =
          !!actualApi?.state.activeBridge && !!vAnchorApi && !!noteManager;

        if (!allInputsFilled || !doesApiReady || !destChain || !actualApi) {
          throw WebbError.from(WebbErrorCodes.ApiNotReady);
        }

        if (actualApi.state.activeBridge?.currency.id !== fungibleCfg.id) {
          throw WebbError.from(WebbErrorCodes.InvalidArguments);
        }

        const anchorId = actualApi.state.activeBridge.targets[srcTypedChainId];
        if (!anchorId) {
          throw WebbError.from(WebbErrorCodes.AnchorIdNotFound);
        }

        const resourceId = await vAnchorApi.getResourceId(
          anchorId,
          srcChain.id,
          srcChain.chainType,
        );

        const avaiNotes = (
          noteManager.getNotesOfChain(resourceId.toString()) ?? []
        ).filter(
          (note) =>
            note.note.tokenSymbol === fungibleCfg.symbol &&
            !!fungibleCfg.addresses.get(parseInt(note.note.targetChainId)),
        );

        const amountBig = BigInt(amount);

        // Get the notes that will be spent for this withdraw
        const inputNotes = NoteManager.getNotesFifo(avaiNotes, amountBig);
        if (!inputNotes) {
          throw WebbError.from(WebbErrorCodes.NoteParsingFailure);
        }

        // Validate the input notes
        const valid = await vAnchorApi.validateInputNotes(
          inputNotes,
          srcTypedChainId,
          fungibleCfg.id,
        );

        if (!valid) {
          throw WebbError.from(WebbErrorCodes.NotesNotReady);
        }

        // Sum up the amount of the input notes to calculate the change amount
        const totalAmountInput = inputNotes.reduce(
          (acc, note) => acc + BigInt(note.note.amount),
          ZERO_BIG_INT,
        );

        const changeAmount = totalAmountInput - amountBig;
        if (changeAmount < 0) {
          throw WebbError.from(WebbErrorCodes.InvalidArguments);
        }

        const keypair = noteManager.getKeypair();
        if (!keypair.privkey) {
          throw WebbError.from(WebbErrorCodes.KeyPairNotFound);
        }

        // Setup the recipient's keypair.
        const recipientKeypair = Keypair.fromString(recipient);

        const utxoAmount =
          activeRelayer && typeof totalFeeWei == 'bigint'
            ? amountBig - totalFeeWei
            : amountBig;

        const transferUtxo = await actualApi.generateUtxo({
          curve: noteManager.defaultNoteGenInput.curve,
          backend: actualApi.backend,
          amount: utxoAmount.toString(),
          chainId: destTypedChainId.toString(),
          keypair: recipientKeypair,
          originChainId: srcTypedChainId.toString(),
          index: actualApi.state.defaultUtxoIndex.toString(),
        });

        const changeNote =
          changeAmount > 0
            ? await noteManager.generateNote(
                actualApi.backend,
                srcTypedChainId,
                anchorId,
                srcTypedChainId,
                anchorId,
                fungibleCfg.symbol,
                changeAmount,
              )
            : undefined;

        // Generate change utxo (or dummy utxo if the changeAmount is `0`)
        const changeUtxo = changeNote
          ? await utxoFromVAnchorNote(
              changeNote.note,
              changeNote.note.index ? parseInt(changeNote.note.index) : 0,
            )
          : await actualApi.generateUtxo({
              curve: noteManager.defaultNoteGenInput.curve,
              backend: actualApi.backend,
              amount: changeAmount.toString(),
              chainId: `${srcTypedChainId}`,
              keypair,
              originChainId: `${srcTypedChainId}`,
              index: actualApi.state.defaultUtxoIndex.toString(),
            });

        if (!activeChain) {
          throw new Error('Active chain not found');
        }

        setTransferConfirmComponent(
          <TransferConfirmContainer
            inputNotes={inputNotes}
            amount={receivingAmount}
            feeInWei={
              typeof totalFeeWei === 'bigint' ? totalFeeWei : ZERO_BIG_INT
            }
            feeToken={feeToken}
            changeAmount={Number(formatEther(changeAmount))}
            currency={new Currency(fungibleCfg)}
            srcChain={
              chainsPopulated[
                calculateTypedChainId(srcChain.chainType, srcChain.id)
              ]
            }
            destChain={
              chainsPopulated[
                calculateTypedChainId(destChain.chainType, destChain.id)
              ]
            }
            recipient={recipient}
            relayer={activeRelayer}
            note={changeNote}
            changeUtxo={changeUtxo}
            transferUtxo={transferUtxo}
            onResetState={() => {
              resetFeeInfo?.();
              setTransferConfirmComponent(null);
              navigate(`/${BRIDGE_PATH}/${TRANSFER_PATH}`);
            }}
            onClose={() => {
              setTransferConfirmComponent(null);
            }}
            refundAmount={refundAmount}
            refundToken={refundToken}
            refundRecipient={refundRecipient ?? ''} // Already checked in `allInputsFilled`
            activeChain={activeChain}
          />,
        );
      } catch (error) {
        handleTxError(error, 'Transfer');
      }
    },
    // prettier-ignore
    [activeApi, activeRelayer, amount, connectBtnCnt, destChain, destTypedChainId, feeToken, fungibleCfg, handleConnect, hasRefund, isValidAmount, navigate, noteManager, receivingAmount, recipient, refundAmount, refundRecipient, refundToken, resetFeeInfo, srcChain, srcTypedChainId, totalFeeWei, activeChain],
  );

  return {
    isLoading,
    isDisabled,
    children: btnText,
    transferConfirmComponent,
    onClick: handleTransferBtnClick,
  };
}

export default useTransferButtonProps;
