import { TransactionState } from '@webb-tools/dapp-types';
import {
  BlockIcon,
  CoinIcon,
  HelpLineIcon,
  SosLineIcon,
} from '@webb-tools/icons';
import { useBridgeDeposit } from '@webb-tools/react-hooks';
import {
  Button,
  TabContent,
  TabsList,
  TabsRoot,
  TabTrigger,
  TransactionPayload,
  TransactionQueueCard,
  Typography,
  useWebbUI,
} from '@webb-tools/webb-ui-components';
import cx from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import { EmptyTable, ManageButton } from '../components/tables';
import { ShieldedAssetsTableContainer } from '../containers';

import { DepositContainer } from '../containers/DepositContainer';
import { TransferContainer } from '../containers/TransferContainer';
import { WithdrawContainer } from '../containers/WithdrawContainer';
import { getMessageFromTransactionState } from '../utils';

const defaultTx: Partial<TransactionPayload> = {
  id: '1',
  getExplorerURI(addOrTxHash, variant) {
    return '#';
  },
  onDetails: () => {
    console.log('On detail');
  },
  onDismiss: () => {
    console.log('On dismiss');
  },
};

const PageBridge = () => {
  const { customMainComponent } = useWebbUI();
  const { stage } = useBridgeDeposit();

  const [txPayload, setTxPayload] = useState(defaultTx);

  useEffect(() => {
    const message = getMessageFromTransactionState(stage);

    if (message.length) {
      setTxPayload((prev) => ({
        ...prev,
        txStatus: {
          ...prev.txStatus,
          message: `${message}...`,
        },
      }));
    }

    if (stage === TransactionState.Done) {
      setTxPayload((prev) => ({
        ...prev,
        txStatus: {
          ...prev.txStatus,
          status: 'completed',
        },
      }));
    }

    if (stage === TransactionState.Failed) {
      setTxPayload((prev) => ({
        ...prev,
        txStatus: {
          ...prev.txStatus,
          status: 'warning',
        },
      }));
    }

    if (stage === TransactionState.Ideal) {
      setTxPayload(defaultTx);
    }
  }, [stage]);

  const isDepositing = useMemo(() => stage !== TransactionState.Ideal, [stage]);

  return (
    <div className="w-full mt-6">
      <div className="flex items-start space-x-4">
        {customMainComponent}

        {/** Bridge tabs */}
        <TabsRoot
          defaultValue="deposit"
          // The customMainComponent alters the global mainComponent for display.
          // Therfore, if the customMainComponent exists (input selected) then hide the base component.
          className={cx(
            'max-w-[550px] bg-mono-0 dark:bg-mono-180 p-4 rounded-lg space-y-4 grow',
            customMainComponent ? 'hidden' : 'block'
          )}
        >
          <TabsList aria-label="bridge action" className="mb-4">
            <TabTrigger value="deposit">Deposit</TabTrigger>
            <TabTrigger value="transfer">Transfer</TabTrigger>
            <TabTrigger value="withdraw">Withdraw</TabTrigger>
          </TabsList>
          <TabContent value="deposit">
            <DepositContainer setTxPayload={setTxPayload} />
          </TabContent>
          <TabContent value="transfer">
            <TransferContainer />
          </TabContent>
          <TabContent value="withdraw">
            <WithdrawContainer />
          </TabContent>
        </TabsRoot>

        <div>
          {/** Transaction Queue Card */}
          {isDepositing && (
            <TransactionQueueCard
              className="w-full mb-4 max-w-none"
              transactions={[txPayload as TransactionPayload]}
            />
          )}

          {/** Education cards */}
          <div className="p-9 max-w-[386px] bg-blue-10 dark:bg-blue-120 rounded-lg">
            <Typography
              variant="body1"
              fw="semibold"
              className="text-blue-70 dark:text-blue-50"
            >
              Learn about what makes Webb private and how this makes using it
              different from other bridges.
            </Typography>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button
                leftIcon={<CoinIcon size="lg" className="!fill-current" />}
                href="https://docs.webb.tools" // TODO: Determine link here
                target="_blank"
                variant="link"
              >
                Usage Guide
              </Button>

              <Button
                leftIcon={<BlockIcon size="lg" className="!stroke-current" />}
                href="https://docs.webb.tools" // TODO: Determine link here
                target="_blank"
                variant="link"
              >
                FAQ
              </Button>

              <Button
                leftIcon={<HelpLineIcon size="lg" className="!fill-current" />}
                href="https://docs.webb.tools"
                target="_blank"
                variant="link"
              >
                Get Started
              </Button>

              <Button
                leftIcon={<SosLineIcon size="lg" className="!fill-current" />}
                href="https://t.me/webbprotocol"
                target="_blank"
                variant="link"
              >
                Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/** Account stats table */}
      <TabsRoot defaultValue="shielded-assets" className="mt-12 space-y-4">
        <div className="flex items-center justify-between mb-4">
          {/** Tabs buttons */}
          <TabsList
            aria-label="account-statistics-table"
            className="space-x-3.5 py-4"
          >
            <TabTrigger
              isDisableStyle
              value="shielded-assets"
              className="h5 radix-state-active:font-bold text-mono-100 radix-state-active:text-mono-200 dark:radix-state-active:text-mono-0"
            >
              Shielded Assets
            </TabTrigger>
            <TabTrigger
              isDisableStyle
              value="available-spend-notes"
              className="h5 radix-state-active:font-bold text-mono-100 radix-state-active:text-mono-200 dark:radix-state-active:text-mono-0"
            >
              Available Spend Notes
            </TabTrigger>
          </TabsList>

          {/** Right buttons (manage and filter) */}
          <div className="space-x-1">
            <ManageButton />
          </div>
        </div>

        <TabContent value="shielded-assets">
          <ShieldedAssetsTableContainer />
        </TabContent>
        <TabContent value="available-spend-notes">
          <EmptyTable
            title="No spend notes found"
            description="Don't see your spend note?"
            buttonText="Upload spend Notes"
          />
        </TabContent>
      </TabsRoot>

      {/** Last login */}
    </div>
  );
};

export default PageBridge;
