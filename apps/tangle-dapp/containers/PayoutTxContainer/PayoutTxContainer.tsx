'use client';

import { useWebContext } from '@webb-tools/api-provider-environment';
import { isViemError } from '@webb-tools/web3-api-provider';
import {
  Button,
  CopyWithTooltip,
  InputField,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Typography,
  useWebbUI,
} from '@webb-tools/webb-ui-components';
import { WEBB_TANGLE_DOCS_STAKING_URL } from '@webb-tools/webb-ui-components/constants';
import Link from 'next/link';
import { type FC, useCallback, useMemo, useState } from 'react';

import { evmPublicClient, payoutStakers } from '../../constants';
import { PayoutTxContainerProps } from './types';

const BondMoreTxContainer: FC<PayoutTxContainerProps> = ({
  isModalOpen,
  setIsModalOpen,
  payoutTxProps,
}) => {
  const { notificationApi } = useWebbUI();
  const { activeAccount } = useWebContext();
  const { validatorAddress, era } = payoutTxProps;

  const [isPayoutTxLoading, setIsPayoutTxLoading] = useState<boolean>(false);

  const walletAddress = useMemo(() => {
    if (!activeAccount?.address) return '0x0';

    return activeAccount.address;
  }, [activeAccount?.address]);

  const continueToSignAndSubmitTx = useMemo(() => {
    return walletAddress && validatorAddress && era;
  }, [era, validatorAddress, walletAddress]);

  const closeModal = useCallback(() => {
    setIsPayoutTxLoading(false);
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const submitAndSignTx = useCallback(async () => {
    setIsPayoutTxLoading(true);

    try {
      const payoutTxHash = await payoutStakers(
        walletAddress,
        validatorAddress,
        Number(era)
      );

      if (!payoutTxHash) {
        throw new Error('Failed to payout stakers!');
      }

      const payoutTx = await evmPublicClient.waitForTransactionReceipt({
        hash: payoutTxHash,
      });

      if (payoutTx.status !== 'success') {
        throw new Error('Failed to payout stakers!');
      }

      notificationApi({
        variant: 'success',
        message: `Successfully claimed rewards for era ${era}!`,
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
  }, [closeModal, era, notificationApi, validatorAddress, walletAddress]);

  return (
    <Modal open>
      <ModalContent
        isCenter
        isOpen={isModalOpen}
        className="w-full max-w-[838px] rounded-2xl bg-mono-0 dark:bg-mono-180"
      >
        <ModalHeader titleVariant="h4" onClose={closeModal}>
          Payout Stakers
        </ModalHeader>

        <div className="grid grid-cols-2 gap-9 p-9">
          <div className="flex flex-col gap-9">
            {/* Initiator */}
            <InputField.Root>
              <InputField.Input
                title="Request Payout From"
                isAddressType={true}
                value={walletAddress}
                type="text"
                readOnly
              />
            </InputField.Root>

            {/* Validator */}
            <InputField.Root>
              <InputField.Input
                title="Payout Stakers For"
                isAddressType={true}
                addressTheme="substrate"
                value={validatorAddress}
                type="text"
                readOnly
              />
            </InputField.Root>

            {/* Era */}
            <InputField.Root>
              <InputField.Input
                title="Request Payout for Era"
                isAddressType={false}
                value={era}
                type="number"
                readOnly
              />
            </InputField.Root>
          </div>

          <div className="flex flex-col gap-9">
            <Typography variant="body1" fw="normal">
              Any account can request payout for stakers, this is not limited to
              accounts that will be rewarded.
            </Typography>

            <Typography variant="body1" fw="normal">
              All the listed validators and all their nominators will receive
              their rewards.
            </Typography>

            <Typography variant="body1" fw="normal">
              The UI puts a limit of 40 payouts at a time, where each payout is
              a single validator for a single era.
            </Typography>
          </div>
        </div>

        <ModalFooter className="flex flex-col gap-1 px-8 py-6">
          <Button
            isFullWidth
            isDisabled={!continueToSignAndSubmitTx}
            isLoading={isPayoutTxLoading}
            onClick={submitAndSignTx}
          >
            Confirm
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

export default BondMoreTxContainer;