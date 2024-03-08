import { BN } from '@polkadot/util';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Typography,
} from '@webb-tools/webb-ui-components';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';

import useSharedRestakeAmountState from '../../data/restaking/useSharedRestakeAmountState';
import useUpdateRestakingProfileTx from '../../data/restaking/useUpdateRestakingProfileTx';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { TxStatus } from '../../hooks/useSubstrateTx';
import ChooseMethodStep from './ChooseMethodStep';
import ConfirmAllocationsStep from './ConfirmAllocationsStep';
import IndependentAllocationStep from './IndependentAllocationStep';
import SharedAllocationStep from './SharedAllocationStep';
import { ManageProfileModalContainerProps } from './types';
import useAllocationsState from './useAllocationsState';

export enum RestakingProfileType {
  INDEPENDENT,
  SHARED,
}

/**
 * The steps in the manage profile modal.
 *
 * @remarks
 * The order of the steps is important, as it determines
 * the flow of the modal.
 */
enum Step {
  CHOOSE_METHOD,
  ALLOCATION,
  CONFIRM_ALLOCATIONS,
}

function getStepDiff(currentStep: Step, isNext: boolean): Step | null {
  const difference = isNext ? 1 : -1;

  if (Object.values(Step).includes(currentStep + difference)) {
    return currentStep + difference;
  }

  return null;
}

function getStepTitle(step: Step, profileType: RestakingProfileType): string {
  switch (step) {
    case Step.CHOOSE_METHOD:
      return 'Choose Your Restaking Method';
    case Step.ALLOCATION: {
      const profileKindString =
        profileType === RestakingProfileType.INDEPENDENT
          ? 'Independent'
          : 'Shared';

      return `Manage ${profileKindString} Profile`;
    }
    case Step.CONFIRM_ALLOCATIONS:
      return 'Review and Confirm Your Allocations:';
  }
}

function getStepNextButtonLabel(step: Step): string {
  switch (step) {
    case Step.CHOOSE_METHOD:
      return 'Next';
    case Step.ALLOCATION:
      return 'Review Changes';
    case Step.CONFIRM_ALLOCATIONS:
      return 'Confirm';
  }
}

function getStepPreviousButtonLabel(step: Step): string {
  switch (step) {
    case Step.CHOOSE_METHOD:
      return "What's the Difference?";
    case Step.ALLOCATION:
      return 'Back';
    case Step.CONFIRM_ALLOCATIONS:
      return 'Go Back and Edit';
  }
}

function getStepDescription(
  step: Step,
  profileType: RestakingProfileType
): string | null {
  switch (step) {
    case Step.CHOOSE_METHOD:
      return 'To participate in MPC services, allocate your staked TNT tokens using one of the available restaking methods. Your choice determines your risk allocation strategy. Would you like to restake as independent or shared?';
    case Step.ALLOCATION:
      return profileType === RestakingProfileType.INDEPENDENT
        ? 'Independent restaking allows you to allocate specific amounts of your stake to individual roles. Active roles may have their stake increased. Inactive roles are flexible for both stake adjustments and removal.'
        : 'Shared restaking allows your entire restake to be allocated across selected roles, amplifying your participation. You can increase the total stake but cannot reduce it until every active service ends. Role removal is possible only if they are inactive.';
    case Step.CONFIRM_ALLOCATIONS:
      return null;
  }
}

const ManageProfileModalContainer: FC<ManageProfileModalContainerProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [profileType, setProfileType] = useState(
    RestakingProfileType.INDEPENDENT
  );

  const {
    sharedRestakeAmount,
    setSharedRestakeAmount,
    isLoading: isLoadingSharedRestakeAmount,
    reset: resetSharedRestakeAmount,
  } = useSharedRestakeAmountState();

  const [step, setStep] = useState(Step.CHOOSE_METHOD);
  const isMountedRef = useIsMountedRef();
  let stepContents: ReactNode;

  const {
    allocations,
    setAllocations,
    setAllocationsDispatch,
    isLoading: isLoadingAllocations,
    reset: resetAllocations,
  } = useAllocationsState(profileType);

  const {
    executeForIndependentProfile: executeUpdateIndependentProfileTx,
    executeForSharedProfile: executeUpdateSharedProfileTx,
    status: updateProfileTxStatus,
  } = useUpdateRestakingProfileTx(profileType, true, true);

  switch (step) {
    case Step.CHOOSE_METHOD:
      stepContents = (
        <ChooseMethodStep
          profileType={profileType}
          setProfileType={setProfileType}
        />
      );

      break;
    case Step.ALLOCATION:
      stepContents =
        profileType === RestakingProfileType.INDEPENDENT ? (
          <IndependentAllocationStep
            allocations={allocations}
            setAllocations={setAllocationsDispatch}
          />
        ) : (
          <SharedAllocationStep
            restakeAmount={sharedRestakeAmount}
            setRestakeAmount={setSharedRestakeAmount}
            allocations={allocations}
            setAllocations={setAllocations}
          />
        );

      break;
    case Step.CONFIRM_ALLOCATIONS:
      stepContents = (
        <ConfirmAllocationsStep
          profileType={profileType}
          allocations={allocations}
          sharedRestakeAmount={sharedRestakeAmount ?? undefined}
        />
      );
  }

  const handlePreviousStep = useCallback(() => {
    const diff = getStepDiff(step, false);
    const previousStep = diff ?? Step.CHOOSE_METHOD;

    if (previousStep === Step.CHOOSE_METHOD) {
      resetAllocations();
    }

    setStep(previousStep);
  }, [resetAllocations, step]);

  const handleNextStep = useCallback(() => {
    const nextStep = getStepDiff(step, true);

    if (nextStep !== null) {
      setStep(nextStep);

      return;
    }

    // Have reached the end; submit the transaction.
    profileType === RestakingProfileType.INDEPENDENT
      ? executeUpdateIndependentProfileTx(allocations)
      : executeUpdateSharedProfileTx(
          allocations,
          sharedRestakeAmount ?? new BN(0)
        );
  }, [
    allocations,
    executeUpdateIndependentProfileTx,
    executeUpdateSharedProfileTx,
    profileType,
    sharedRestakeAmount,
    step,
  ]);

  const resetAllocationState = useCallback(() => {
    resetAllocations();
    resetSharedRestakeAmount();
  }, [resetAllocations, resetSharedRestakeAmount]);

  // Close modal when the transaction is complete.
  useEffect(() => {
    if (updateProfileTxStatus === TxStatus.COMPLETE) {
      setIsModalOpen(false);
    }
  }, [updateProfileTxStatus, setIsModalOpen]);

  // Reset state when modal is closed.
  useEffect(() => {
    if (isModalOpen) {
      return;
    }

    // Use a timeout to prevent the state reset from being visible
    // to the user as the modal is closing (the closing animation takes
    // a few hundred milliseconds to complete).
    const timeoutHandle = setTimeout(() => {
      if (isMountedRef.current) {
        setProfileType(RestakingProfileType.INDEPENDENT);
        setStep(Step.CHOOSE_METHOD);
        resetAllocationState();
      }
    }, 500);

    return () => clearTimeout(timeoutHandle);
  }, [isModalOpen, isMountedRef, resetAllocations, resetAllocationState]);

  const stepDescription = getStepDescription(step, profileType);

  const isLoading =
    isLoadingSharedRestakeAmount ||
    isLoadingAllocations ||
    updateProfileTxStatus === TxStatus.PROCESSING;

  return (
    <Modal open>
      <ModalContent
        isCenter
        isOpen={isModalOpen}
        className="w-full max-w-[800px] rounded-2xl bg-mono-0 dark:bg-mono-180"
      >
        <ModalHeader
          titleVariant="h4"
          onClose={() => setIsModalOpen(false)}
          className="p-9 pb-4"
        >
          {getStepTitle(step, profileType)}
        </ModalHeader>

        <div className="flex flex-col gap-4 px-9 py-3">
          {stepDescription !== null && (
            <Typography variant="body2" fw="normal">
              {stepDescription}
            </Typography>
          )}

          {stepContents}
        </div>

        <ModalFooter className="flex flex-col-reverse sm:flex-row gap-2">
          <Button
            isFullWidth
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePreviousStep}
          >
            {getStepPreviousButtonLabel(step)}
          </Button>

          <Button
            onClick={handleNextStep}
            isFullWidth
            target="_blank"
            rel="noopener noreferrer"
            className="!mt-0"
            // Prevent the user from continuing or making changes while
            // the existing allocations are being fetched.
            isDisabled={isLoading}
            isLoading={isLoading}
          >
            {getStepNextButtonLabel(step)}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ManageProfileModalContainer;