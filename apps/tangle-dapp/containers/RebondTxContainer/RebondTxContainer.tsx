'use client';

import { useWebContext } from '@webb-tools/api-provider-environment';
import { isViemError } from '@webb-tools/web3-api-provider';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useWebbUI,
} from '@webb-tools/webb-ui-components';
import { WEBB_TANGLE_DOCS_STAKING_URL } from '@webb-tools/webb-ui-components/constants';
import Link from 'next/link';
import { type FC, useCallback, useMemo, useState } from 'react';

import { evmPublicClient, rebondTokens } from '../../constants';
import useUnbondingAmountSubscription from '../../data/NominatorStats/useUnbondingAmountSubscription';
import {
  convertEthereumToSubstrateAddress,
  splitTokenValueAndSymbol,
} from '../../utils';
import RebondTokens from './RebondTokens';
import { RebondTxContainerProps } from './types';

const UnbondTxContainer: FC<RebondTxContainerProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const { notificationApi } = useWebbUI();
  const { activeAccount } = useWebContext();

  const [amountToRebond, setAmountToRebond] = useState<number>(0);
  const [isRebondTxLoading, setIsRebondTxLoading] = useState<boolean>(false);

  const walletAddress = useMemo(() => {
    if (!activeAccount?.address) return '0x0';

    return activeAccount.address;
  }, [activeAccount?.address]);

  const substrateAddress = useMemo(() => {
    if (!activeAccount?.address) return '';

    return convertEthereumToSubstrateAddress(activeAccount.address);
  }, [activeAccount?.address]);

  const { data: unbondingAmountData, error: unbondingAmountError } =
    useUnbondingAmountSubscription(substrateAddress);

  const remainingUnbondedTokensToRebond = useMemo(() => {
    if (unbondingAmountError) {
      notificationApi({
        variant: 'error',
        message: unbondingAmountError.message,
      });
    }

    if (!unbondingAmountData?.value1) return 0;

    const { value: value_ } = splitTokenValueAndSymbol(
      String(unbondingAmountData?.value1)
    );

    return value_;
  }, [notificationApi, unbondingAmountData?.value1, unbondingAmountError]);

  const amountToRebondError = useMemo(() => {
    if (remainingUnbondedTokensToRebond === 0) {
      return 'You have no unbonded tokens to rebond!';
    } else if (amountToRebond > remainingUnbondedTokensToRebond) {
      return `You can only rebond ${remainingUnbondedTokensToRebond} tTNT!`;
    }
  }, [remainingUnbondedTokensToRebond, amountToRebond]);

  const continueToSignAndSubmitTx = useMemo(() => {
    return amountToRebond > 0 && !amountToRebondError && walletAddress !== '0x0'
      ? true
      : false;
  }, [amountToRebond, amountToRebondError, walletAddress]);

  const closeModal = useCallback(() => {
    setIsRebondTxLoading(false);
    setIsModalOpen(false);
    setAmountToRebond(0);
  }, [setIsModalOpen]);

  const submitAndSignTx = useCallback(async () => {
    setIsRebondTxLoading(true);

    try {
      const bondExtraTokensTxHash = await rebondTokens(
        walletAddress,
        amountToRebond
      );

      if (!bondExtraTokensTxHash) {
        throw new Error('Failed to unbond tokens!');
      }

      const bondExtraTokensTx = await evmPublicClient.waitForTransactionReceipt(
        {
          hash: bondExtraTokensTxHash,
        }
      );

      if (bondExtraTokensTx.status !== 'success') {
        throw new Error('Failed to unbond tokens!');
      }

      notificationApi({
        variant: 'success',
        message: `Successfully unbonded ${amountToRebond} tTNT.`,
      });
    } catch (error: any) {
      notificationApi({
        variant: 'error',
        message: isViemError(error)
          ? error.shortMessage
          : error.message || 'Something went wrong!',
      });
    } finally {
      closeModal();
    }
  }, [amountToRebond, closeModal, notificationApi, walletAddress]);

  return (
    <Modal open>
      <ModalContent
        isCenter
        isOpen={isModalOpen}
        className="w-full max-w-[500px] rounded-2xl bg-mono-0 dark:bg-mono-180"
      >
        <ModalHeader titleVariant="h4" onClose={closeModal}>
          Unbond Stake
        </ModalHeader>

        <div className="px-8 py-6">
          <RebondTokens
            nominatorAddress={walletAddress}
            amountToRebond={amountToRebond}
            setAmountToRebond={setAmountToRebond}
            amountToRebondError={amountToRebondError}
            remainingUnbondedTokensToRebond={remainingUnbondedTokensToRebond}
          />
        </div>

        <ModalFooter className="px-8 py-6 flex flex-col gap-1">
          <Button
            isFullWidth
            isDisabled={!continueToSignAndSubmitTx}
            isLoading={isRebondTxLoading}
            onClick={submitAndSignTx}
          >
            Sign & Submit
          </Button>

          <Link href={WEBB_TANGLE_DOCS_STAKING_URL} target="_blank">
            <Button isFullWidth variant="secondary">
              Learn More
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UnbondTxContainer;