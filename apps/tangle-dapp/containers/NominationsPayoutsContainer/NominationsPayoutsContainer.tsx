'use client';

import {
  useConnectWallet,
  useWebContext,
} from '@webb-tools/api-provider-environment';
import {
  ActionsDropdown,
  Button,
  TabContent,
  TableAndChartTabs,
  useCheckMobile,
} from '@webb-tools/webb-ui-components';
import { type FC, useEffect, useMemo, useRef, useState } from 'react';

import { DelegatorTable, TableStatus } from '../../components';
import useNominations from '../../data/NominationsPayouts/useNominations';
import usePayouts from '../../data/NominationsPayouts/usePayouts';
import useIsFirstTimeNominator from '../../hooks/useIsFirstTimeNominator';
import useNetworkState from '../../hooks/useNetworkState';
import useQueryParamKey from '../../hooks/useQueryParamKey';
import useSubstrateAddress from '../../hooks/useSubstrateAddress';
import { DelegationsAndPayoutsTab, QueryParamKey } from '../../types';
import { DelegateTxContainer } from '../DelegateTxContainer';
import { PayoutAllTxContainer } from '../PayoutAllTxContainer';
import { StopNominationTxContainer } from '../StopNominationTxContainer';
import { UpdateNominationsTxContainer } from '../UpdateNominationsTxContainer';
import { UpdatePayeeTxContainer } from '../UpdatePayeeTxContainer';

const PAGE_SIZE = 10;

function assertTab(tab: string): DelegationsAndPayoutsTab {
  if (
    !Object.values(DelegationsAndPayoutsTab).includes(
      tab as DelegationsAndPayoutsTab
    )
  ) {
    throw new Error(`Invalid tab: ${tab}`);
  }

  return tab as DelegationsAndPayoutsTab;
}

const DelegationsPayoutsContainer: FC = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const { activeAccount, loading } = useWebContext();
  const [isDelegateModalOpen, setIsDelegateModalOpen] = useState(false);
  const [isPayoutAllModalOpen, setIsPayoutAllModalOpen] = useState(false);
  const [isUpdatePayeeModalOpen, setIsUpdatePayeeModalOpen] = useState(false);

  const { network } = useNetworkState();

  const { value: queryParamsTab } = useQueryParamKey(
    QueryParamKey.DELEGATIONS_AND_PAYOUTS_TAB
  );

  // Allow other pages to link directly to the payouts tab.
  // Default to the nominations tab if no matching browser URL
  // hash is present.
  const [activeTab, setActiveTab] = useState(
    queryParamsTab ?? DelegationsAndPayoutsTab.NOMINATIONS
  );

  const [isUpdateNominationsModalOpen, setIsUpdateNominationsModalOpen] =
    useState(false);

  const [isStopNominationModalOpen, setIsStopNominationModalOpen] =
    useState(false);

  // TODO: Stop defaulting to an empty string. MUST address the type system properly.
  const substrateAddress = useSubstrateAddress() ?? '';

  const { data: nominationsData } = useNominations(substrateAddress);
  const { isFirstTimeNominator } = useIsFirstTimeNominator();
  const payouts = usePayouts();

  const nominationAddresses = useMemo(() => {
    if (!nominationsData?.delegators) {
      return [];
    }

    return nominationsData.delegators.map((delegator) => delegator.address);
  }, [nominationsData?.delegators]);

  // Scroll to the table when the tab changes, or when the page
  // is first loaded with a tab query parameter present.
  useEffect(() => {
    if (queryParamsTab === null) {
      return;
    }

    tableRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [queryParamsTab]);

  const validatorAndEras = useMemo(() => {
    // TODO: This should really return `null` instead, it just isn't handled by the `PayoutAllTxContainer`'s props
    if (payouts === null) {
      return [];
    }

    return payouts.map((payout) => ({
      validatorAddress: payout.validator.address,
      era: payout.era.toString(),
    }));
  }, [payouts]);

  const { isMobile } = useCheckMobile();
  const { toggleModal } = useConnectWallet();

  return (
    <div ref={tableRef}>
      <TableAndChartTabs
        value={activeTab}
        onValueChange={(tabString) => setActiveTab(assertTab(tabString))}
        tabs={[...Object.values(DelegationsAndPayoutsTab)]}
        headerClassName="w-full overflow-x-auto"
        filterComponent={
          activeAccount?.address && !isFirstTimeNominator ? (
            activeTab === DelegationsAndPayoutsTab.NOMINATIONS ? (
              <ManageButtonContainer
                onUpdateNominations={() =>
                  setIsUpdateNominationsModalOpen(true)
                }
                onChangeRewardDestination={() =>
                  setIsUpdatePayeeModalOpen(true)
                }
                onStopNomination={() => setIsStopNominationModalOpen(true)}
              />
            ) : (
              <div>
                <Button
                  variant="utility"
                  isDisabled={payouts === null || payouts.length === 0}
                  onClick={() => setIsPayoutAllModalOpen(true)}
                >
                  Payout All
                </Button>
              </div>
            )
          ) : null
        }
      >
        {/* Delegations Table */}
        <TabContent value={DelegationsAndPayoutsTab.NOMINATIONS}>
          {!activeAccount ? (
            <TableStatus
              title="Wallet Not Connected"
              description="Connect your wallet to view and manage your staking details."
              buttonText="Connect"
              buttonProps={{
                isLoading: loading,
                isDisabled: isMobile,
                loadingText: 'Connecting...',
                onClick: () => toggleModal(true),
              }}
              icon="🔗"
            />
          ) : nominationsData?.delegators !== undefined &&
            nominationsData.delegators.length === 0 ? (
            <TableStatus
              title="Ready to Explore Nominations?"
              description="It looks like you haven't nominated any validators yet. Start by choosing a validator to support and earn rewards!"
              buttonText="Nominate"
              buttonProps={{
                onClick: () => setIsDelegateModalOpen(true),
              }}
              icon="🔍"
            />
          ) : (
            <DelegatorTable
              data={
                nominationsData?.delegators !== undefined &&
                nominationsData.delegators.length > 0
                  ? nominationsData.delegators
                  : []
              }
              pageSize={PAGE_SIZE}
            />
          )}
        </TabContent>

        {/* Payouts Table */}
        <TabContent value={DelegationsAndPayoutsTab.PAYOUTS} aria-disabled>
          {/* {!activeAccount ? (
            <TableStatus
              title="Wallet Not Connected"
              description="Connect your wallet to view and manage your staking details."
              buttonText="Connect"
              buttonProps={{
                isLoading: loading,
                isDisabled: isMobile,
                loadingText: 'Connecting...',
                onClick: () => toggleModal(true),
              }}
              icon="🔗"
            />
          ) : payouts !== null && payouts.length === 0 ? (
            <TableStatus
              title="Ready to Get Rewarded?"
              description="It looks like you haven't nominated any tokens yet. Start by choosing a validator to support and earn rewards!"
              buttonText="Nominate"
              buttonProps={{
                onClick: () => setIsDelegateModalOpen(true),
              }}
              icon="🔍"
            />
          ) : (
            <PayoutTable
              data={fetchedPayouts ?? []}
              pageSize={PAGE_SIZE}
              updateData={setUpdatedPayouts}
            />
          )} */}

          <TableStatus
            title="Payouts Coming Soon"
            description="The payouts feature for EVM and Substrate users is in development for direct access here. Meanwhile, Substrate users can view and manage payouts via Polkadot Apps.
            "
            buttonText="Polkadot Apps"
            buttonProps={{
              href: `https://polkadot.js.org/apps/?rpc=${network.wsRpcEndpoint}#/staking/payout`,
              target: '_blank',
            }}
            icon="🚧"
          />
        </TabContent>
      </TableAndChartTabs>

      {isDelegateModalOpen && (
        <DelegateTxContainer
          isModalOpen={isDelegateModalOpen}
          setIsModalOpen={setIsDelegateModalOpen}
        />
      )}

      {isUpdateNominationsModalOpen && (
        <UpdateNominationsTxContainer
          isModalOpen={isUpdateNominationsModalOpen}
          setIsModalOpen={setIsUpdateNominationsModalOpen}
          currentNominations={nominationAddresses}
        />
      )}

      <UpdatePayeeTxContainer
        isModalOpen={isUpdatePayeeModalOpen}
        setIsModalOpen={setIsUpdatePayeeModalOpen}
      />

      <StopNominationTxContainer
        isModalOpen={isStopNominationModalOpen}
        setIsModalOpen={setIsStopNominationModalOpen}
      />

      <PayoutAllTxContainer
        isModalOpen={isPayoutAllModalOpen}
        setIsModalOpen={setIsPayoutAllModalOpen}
        validatorsAndEras={validatorAndEras}
      />
    </div>
  );
};

export default DelegationsPayoutsContainer;

/** @internal */
const ManageButtonContainer: FC<{
  onUpdateNominations: () => void;
  onChangeRewardDestination: () => void;
  onStopNomination: () => void;
}> = ({ onUpdateNominations, onChangeRewardDestination, onStopNomination }) => {
  return (
    <div className="items-center hidden space-x-2 md:flex">
      <ActionsDropdown
        buttonText="Manage"
        actionItems={[
          {
            label: 'Update Nominations',
            onClick: onUpdateNominations,
          },
          {
            label: 'Stop Nominations',
            onClick: onStopNomination,
          },
          {
            label: 'Change Reward Destination',
            onClick: onChangeRewardDestination,
          },
        ]}
      />
    </div>
  );
};
