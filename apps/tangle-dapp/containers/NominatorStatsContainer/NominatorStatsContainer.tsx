'use client';

import { useWebContext } from '@webb-tools/api-provider-environment';
import { Button, Divider } from '@webb-tools/webb-ui-components';
import {
  SOCIAL_URLS_RECORD,
  WEBB_DISCORD_CHANNEL_URL,
  WEBB_TANGLE_DOCS_STAKING_URL,
} from '@webb-tools/webb-ui-components/constants';
import cx from 'classnames';
import Link from 'next/link';
import { type FC, useState } from 'react';
import React from 'react';

import { NominatorStatsItem, UnbondingStatsItem } from '../../components';
import useNetworkStore from '../../context/useNetworkStore';
import useBalances from '../../data/balances/useBalances';
import useIsBondedOrNominating from '../../data/staking/useIsBondedOrNominating';
import useNetworkFeatures from '../../hooks/useNetworkFeatures';
import { NetworkFeature, PagePath } from '../../types';
import { formatTokenBalance } from '../../utils/polkadot';
import { BondMoreTxContainer } from '../BondMoreTxContainer';
import { DelegateTxContainer } from '../DelegateTxContainer';
import { RebondTxContainer } from '../RebondTxContainer';
import { UnbondTxContainer } from '../UnbondTxContainer';
import { WithdrawUnbondedTxContainer } from '../WithdrawUnbondedTxContainer';

const NominatorStatsContainer: FC = () => {
  const [isDelegateModalOpen, setIsDelegateModalOpen] = useState(false);
  const [isBondMoreModalOpen, setIsBondMoreModalOpen] = useState(false);
  const [isUnbondModalOpen, setIsUnbondModalOpen] = useState(false);
  const [isRebondModalOpen, setIsRebondModalOpen] = useState(false);

  const { activeAccount, loading: isActiveAccountLoading } = useWebContext();
  const { nativeTokenSymbol } = useNetworkStore();
  const networkFeatures = useNetworkFeatures();
  const { free: freeBalance, error: balancesError } = useBalances();
  const isBondedOrNominating = useIsBondedOrNominating();

  const [isWithdrawUnbondedModalOpen, setIsWithdrawUnbondedModalOpen] =
    useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div
          className={cx(
            'w-full rounded-2xl overflow-hidden h-min-[204px] p-4',
            'bg-glass dark:bg-glass_dark',
            'border-2 border-mono-0 dark:border-mono-160'
          )}
        >
          <NominatorStatsItem
            title="Free Balance"
            isError={balancesError !== null}
          >
            {freeBalance === null ? null : formatTokenBalance(freeBalance)}
          </NominatorStatsItem>

          <Divider className="my-6 bg-mono-0 dark:bg-mono-160" />

          <div className="flex items-center gap-2 flex-wrap">
            {networkFeatures.includes(NetworkFeature.Faucet) &&
              !isActiveAccountLoading && (
                <Link href={WEBB_DISCORD_CHANNEL_URL} target="_blank">
                  <Button variant="utility" className="!min-w-[100px]">
                    {`Get ${nativeTokenSymbol}`}
                  </Button>
                </Link>
              )}

            <Link href={PagePath.ACCOUNT}>
              <Button
                variant="utility"
                className="!min-w-[100px]"
                isDisabled={isActiveAccountLoading}
              >
                View Account
              </Button>
            </Link>

            {/* Only allow nominator setup if not already nominating or bonded */}
            {isBondedOrNominating === false && (
              <Button
                variant="utility"
                className="!min-w-[100px]"
                isDisabled={!activeAccount}
                onClick={() => setIsDelegateModalOpen(true)}
              >
                Nominate
              </Button>
            )}
          </div>
        </div>

        <div
          className={cx(
            'w-full rounded-2xl overflow-hidden h-min-[204px] p-4',
            'bg-glass dark:bg-glass_dark',
            'border-2 border-mono-0 dark:border-mono-160'
          )}
        >
          <div className="grid grid-cols-2 gap-2">
            {/* TODO: Implement this. */}
            <NominatorStatsItem
              title={`Total Staked ${nativeTokenSymbol}`}
              tooltip="The total amount of tokens you have bonded for nominating."
              isError={false}
            >
              todo
            </NominatorStatsItem>
            <UnbondingStatsItem />
          </div>

          <Divider className="my-6 bg-mono-0 dark:bg-mono-160" />

          <div className="grid grid-cols-2 gap-2">
            {isBondedOrNominating === true ? (
              <>
                <div className="flex items-center gap-2 flex-wrap">
                  <Button
                    variant="utility"
                    className="!min-w-[100px]"
                    isDisabled={!activeAccount}
                    onClick={() => setIsBondMoreModalOpen(true)}
                  >
                    Add Stake
                  </Button>

                  <Button
                    variant="utility"
                    className="!min-w-[100px]"
                    isDisabled={!activeAccount}
                    onClick={() => setIsUnbondModalOpen(true)}
                  >
                    Unbond
                  </Button>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Button
                    variant="utility"
                    className="!min-w-[100px]"
                    isDisabled={!activeAccount || isBondedOrNominating === null}
                    onClick={() => setIsRebondModalOpen(true)}
                  >
                    Rebond
                  </Button>

                  <Button
                    variant="utility"
                    className="!min-w-[100px]"
                    isDisabled={!activeAccount || isBondedOrNominating === null}
                    onClick={() => setIsWithdrawUnbondedModalOpen(true)}
                  >
                    Withdraw
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link href={WEBB_TANGLE_DOCS_STAKING_URL} target="_blank">
                  <Button variant="utility">Learn More</Button>
                </Link>

                <Link href={SOCIAL_URLS_RECORD.discord} target="_blank">
                  <Button variant="utility">Join Community</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {isDelegateModalOpen && (
        <DelegateTxContainer
          isModalOpen={isDelegateModalOpen}
          setIsModalOpen={setIsDelegateModalOpen}
        />
      )}

      <BondMoreTxContainer
        isModalOpen={isBondMoreModalOpen}
        setIsModalOpen={setIsBondMoreModalOpen}
      />

      <UnbondTxContainer
        isModalOpen={isUnbondModalOpen}
        setIsModalOpen={setIsUnbondModalOpen}
      />

      <RebondTxContainer
        isModalOpen={isRebondModalOpen}
        setIsModalOpen={setIsRebondModalOpen}
      />

      <WithdrawUnbondedTxContainer
        isModalOpen={isWithdrawUnbondedModalOpen}
        setIsModalOpen={setIsWithdrawUnbondedModalOpen}
      />
    </>
  );
};

export default NominatorStatsContainer;
