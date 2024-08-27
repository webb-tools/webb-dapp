'use client';

// This will override global types and provide type definitions for
// the `lstMinting` pallet for this file only.
import '@webb-tools/tangle-restaking-types';

import { BN } from '@polkadot/util';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import { Search } from '@webb-tools/icons';
import {
  Button,
  Chip,
  Input,
  Typography,
} from '@webb-tools/webb-ui-components';
import React, { FC, useCallback, useMemo } from 'react';
import { z } from 'zod';

import { LST_PREFIX } from '../../../constants/liquidStaking/constants';
import {
  LsProtocolId,
  LsProtocolType,
  LsSearchParamKey,
} from '../../../constants/liquidStaking/types';
import { useLiquidStakingStore } from '../../../data/liquidStaking/useLiquidStakingStore';
import useLsExchangeRate, {
  ExchangeRateType,
} from '../../../data/liquidStaking/useLsExchangeRate';
import useMintTx from '../../../data/liquidStaking/useMintTx';
import useLiquifierDeposit from '../../../data/liquifier/useLiquifierDeposit';
import useActiveAccountAddress from '../../../hooks/useActiveAccountAddress';
import useSearchParamState from '../../../hooks/useSearchParamState';
import useSearchParamSync from '../../../hooks/useSearchParamSync';
import { TxStatus } from '../../../hooks/useSubstrateTx';
import getLsProtocolDef from '../../../utils/liquidStaking/getLsProtocolDef';
import AgnosticLsBalance from './AgnosticLsBalance';
import ExchangeRateDetailItem from './ExchangeRateDetailItem';
import FeesDetailItem from './FeesDetailItem';
import LiquidStakingInput from './LiquidStakingInput';
import SelectValidatorsButton from './SelectValidatorsButton';
import TotalDetailItem from './TotalDetailItem';
import UnstakePeriodDetailItem from './UnstakePeriodDetailItem';
import useLsSpendingLimits from './useLsSpendingLimits';

const LiquidStakeCard: FC = () => {
  const [fromAmount, setFromAmount] = useSearchParamState<BN | null>({
    defaultValue: null,
    key: LsSearchParamKey.AMOUNT,
    parser: (value) => new BN(value),
    stringify: (value) => value?.toString(),
  });

  const { selectedProtocolId, setSelectedProtocolId } = useLiquidStakingStore();
  const { execute: executeMintTx, status: mintTxStatus } = useMintTx();
  const performLiquifierDeposit = useLiquifierDeposit();
  const activeAccountAddress = useActiveAccountAddress();

  const { maxSpendable, minSpendable } = useLsSpendingLimits(
    true,
    selectedProtocolId,
  );

  const selectedProtocol = getLsProtocolDef(selectedProtocolId);

  useSearchParamSync({
    key: LsSearchParamKey.PROTOCOL_ID,
    value: selectedProtocolId,
    parse: (value) => z.nativeEnum(LsProtocolId).parse(parseInt(value)),
    stringify: (value) => value.toString(),
    setValue: setSelectedProtocolId,
  });

  const {
    exchangeRate: exchangeRateOrError,
    isRefreshing: isRefreshingExchangeRate,
  } = useLsExchangeRate(
    ExchangeRateType.NativeToDerivative,
    selectedProtocolId,
  );

  // TODO: Properly handle the error state.
  const exchangeRate =
    exchangeRateOrError instanceof Error ? null : exchangeRateOrError;

  const handleStakeClick = useCallback(async () => {
    // Not ready yet; no amount given.
    if (fromAmount === null) {
      return;
    }

    if (
      selectedProtocol.type === LsProtocolType.TANGLE_RESTAKING_PARACHAIN &&
      executeMintTx !== null
    ) {
      executeMintTx({
        amount: fromAmount,
        currency: selectedProtocol.currency,
      });
    } else if (
      selectedProtocol.type === LsProtocolType.ETHEREUM_MAINNET_LIQUIFIER &&
      performLiquifierDeposit !== null
    ) {
      await performLiquifierDeposit(selectedProtocol.id, fromAmount);
    }
  }, [executeMintTx, fromAmount, performLiquifierDeposit, selectedProtocol]);

  const toAmount = useMemo(() => {
    if (fromAmount === null || exchangeRate === null) {
      return null;
    }

    return fromAmount.muln(exchangeRate);
  }, [fromAmount, exchangeRate]);

  const canCallStake =
    (fromAmount !== null &&
      selectedProtocol.type === LsProtocolType.TANGLE_RESTAKING_PARACHAIN &&
      executeMintTx !== null) ||
    (selectedProtocol.type === LsProtocolType.ETHEREUM_MAINNET_LIQUIFIER &&
      performLiquifierDeposit !== null);

  const walletBalance = (
    <AgnosticLsBalance
      protocolId={selectedProtocolId}
      tooltip="Click to use all available balance"
      onClick={() => setFromAmount(maxSpendable)}
    />
  );

  return (
    <>
      <LiquidStakingInput
        id="liquid-staking-stake-from"
        protocolId={selectedProtocolId}
        token={selectedProtocol.token}
        amount={fromAmount}
        decimals={selectedProtocol.decimals}
        onAmountChange={setFromAmount}
        placeholder={`0 ${selectedProtocol.token}`}
        rightElement={walletBalance}
        setChainId={setSelectedProtocolId}
        minAmount={minSpendable ?? undefined}
        maxAmount={maxSpendable ?? undefined}
      />

      <ArrowDownIcon className="dark:fill-mono-0 self-center w-7 h-7" />

      <LiquidStakingInput
        id="liquid-staking-stake-to"
        protocolId={LsProtocolId.TANGLE_RESTAKING_PARACHAIN}
        placeholder={`0 ${LST_PREFIX}${selectedProtocol.token}`}
        decimals={selectedProtocol.decimals}
        amount={toAmount}
        isReadOnly
        isTokenLiquidVariant
        token={selectedProtocol.token}
        rightElement={<SelectValidatorsButton />}
        className={isRefreshingExchangeRate ? 'animate-pulse' : undefined}
      />

      {/* Details */}
      <div className="flex flex-col gap-2 p-3">
        <UnstakePeriodDetailItem protocolId={selectedProtocolId} />

        <ExchangeRateDetailItem
          protocolId={selectedProtocolId}
          token={selectedProtocol.token}
          type={ExchangeRateType.NativeToDerivative}
        />

        <FeesDetailItem
          inputAmount={fromAmount}
          isMinting
          protocolId={selectedProtocolId}
        />

        <TotalDetailItem
          isMinting
          protocolId={selectedProtocolId}
          inputAmount={fromAmount}
        />
      </div>

      <Button
        isDisabled={
          // No active account.
          activeAccountAddress === null ||
          !canCallStake ||
          // No amount entered or amount is zero.
          fromAmount === null ||
          fromAmount.isZero()
        }
        isLoading={mintTxStatus === TxStatus.PROCESSING}
        loadingText="Processing"
        onClick={handleStakeClick}
        isFullWidth
      >
        Stake
      </Button>
    </>
  );
};

type ParachainItem = {
  id: number;
  name: string;
  icon: string;
  isConnected: boolean;
};

type SelectParachainContentProps = {
  parachains: ParachainItem[];
};

// TODO: Not yet used. Exported on purpose to avoid getting warnings. However, this is a local component.
/** @internal */
export const SelectParachainContent: FC<SelectParachainContentProps> = ({
  parachains,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <Typography variant="h5" fw="bold">
        Select Parachain
      </Typography>

      <Input
        id="select-parachain-content-search"
        placeholder="Search parachains..."
        rightIcon={<Search />}
      />

      <div className="flex flex-col gap-2 p-2">
        {parachains.map((parachain) => (
          <div
            key={parachain.id}
            className="flex items-center justify-between gap-1 px-4 py-3"
          >
            <div className="flex gap-2 items-center">
              <Typography variant="h5" fw="bold" className="dark:text-mono-0">
                {parachain.name}
              </Typography>
            </div>

            {parachain.isConnected && <Chip color="green">Connected</Chip>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiquidStakeCard;
