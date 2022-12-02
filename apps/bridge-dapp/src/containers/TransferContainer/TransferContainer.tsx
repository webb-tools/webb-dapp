import { Currency } from '@webb-tools/abstract-api-provider';
import { useWebContext } from '@webb-tools/api-provider-environment';
import {
  Chain,
  chainsPopulated,
  currenciesConfig,
} from '@webb-tools/dapp-config';
import {
  useBridge,
  useNoteAccount,
  useRelayers,
} from '@webb-tools/react-hooks';
import {
  calculateTypedChainId,
  ChainType as ChainTypeEnum,
} from '@webb-tools/sdk-core';
import {
  ChainListCard,
  getRoundedAmountString,
  RelayerListCard,
  TokenListCard,
  TransferCard,
  useWebbUI,
} from '@webb-tools/webb-ui-components';
import { ChainType } from '@webb-tools/webb-ui-components/components/BridgeInputs/types';
import {
  AssetType,
  RelayerType,
} from '@webb-tools/webb-ui-components/components/ListCard/types';
import { ethers } from 'ethers';
import { forwardRef, useCallback, useMemo, useState } from 'react';
import {
  ChainRecord,
  CurrencyBalanceRecordType,
  CurrencyRecordWithChainsType,
  TransferContainerProps,
} from './types';

export const TransferContainer = forwardRef<
  HTMLDivElement,
  TransferContainerProps
>((props, ref) => {
  const { governedCurrency, setGovernedCurrency } = useBridge();

  const { activeChain, activeApi } = useWebContext();

  const { setMainComponent } = useWebbUI();

  const { allNotes } = useNoteAccount();

  // Get the current preset type chain id from the active chain
  const currentTypedChainId = useMemo(() => {
    if (!activeChain) {
      return undefined;
    }
    return calculateTypedChainId(activeChain.chainType, activeChain.chainId);
  }, [activeChain]);

  // Given the user inputs above, fetch relayers state
  const {
    relayersState: { activeRelayer, relayers },
    setRelayer,
  } = useRelayers({
    typedChainId: currentTypedChainId,
    target:
      activeApi?.state.activeBridge && currentTypedChainId
        ? activeApi.state.activeBridge.targets[currentTypedChainId]
        : undefined,
  });

  // The destination chains
  const [destChain, setDestChain] = useState<Chain | undefined>(undefined);

  // State for amount input value
  const [amount, setAmount] = useState<number>(0);

  // State for error message when user input amount is invalid
  const [amountError, setAmountError] = useState<string>('');

  // State for the recipient address
  const [recipient, setRecipient] = useState<string>('');

  // Get the available currencies from notes
  const currenciyRecordFromNotes = useMemo<CurrencyRecordWithChainsType>(() => {
    if (!allNotes) {
      return {};
    }

    return Array.from(allNotes.values()).reduce((acc, notes) => {
      notes.forEach(({ note: { tokenSymbol, targetChainId } }) => {
        const tkSymbol = tokenSymbol;
        const currency = Object.values(currenciesConfig).find(
          (currency) => currency.symbol === tkSymbol
        );

        if (!currency) {
          return;
        }

        // Calculate destination chain
        const destChainTypeId = Number(targetChainId);
        const detsChain = Object.values(chainsPopulated).find(
          (chain) =>
            calculateTypedChainId(chain.chainType, chain.chainId) ===
            destChainTypeId
        );

        if (!detsChain) {
          throw new Error('Detect unsupoorted chain parsed from note');
        }

        const existedCurrency = acc[currency.id];

        if (!existedCurrency) {
          const destChainRecord: ChainRecord = {};

          if (detsChain) {
            destChainRecord[destChainTypeId] = detsChain;
          }

          acc[currency.id] = {
            currency: new Currency(currency),
            destChainRecord,
          };

          return;
        }

        const existedDestChain =
          existedCurrency.destChainRecord[destChainTypeId];
        if (!existedDestChain) {
          acc[existedCurrency.currency.id].destChainRecord[destChainTypeId] =
            detsChain;
        }
      });

      return acc;
    }, {} as CurrencyRecordWithChainsType);
  }, [allNotes]);

  // Get balance record from notes
  const balanceRecordFromNotes = useMemo<CurrencyBalanceRecordType>(() => {
    if (!allNotes) {
      return {};
    }

    return Array.from(allNotes.values()).reduce((acc, notes) => {
      notes.forEach(
        ({ note: { tokenSymbol, targetChainId, amount, denomination } }) => {
          const tkSymbol = tokenSymbol;
          const currency = Object.values(currenciesConfig).find(
            (currency) => currency.symbol === tkSymbol
          );

          const destChainTypeId = Number(targetChainId);
          const chain = Object.values(chainsPopulated).find(
            (chain) =>
              calculateTypedChainId(chain.chainType, chain.chainId) ===
              destChainTypeId
          );

          if (!currency || !chain) {
            throw new Error(
              'Detect unsupoorted chain or currency parsed from note'
            );
          }

          if (!acc[currency.id]) {
            acc[currency.id] = {};

            acc[currency.id][destChainTypeId] = Number(
              ethers.utils.formatUnits(amount, denomination)
            );
          }

          const existedBalance = acc[currency.id][destChainTypeId];
          if (existedBalance) {
            acc[currency.id][destChainTypeId] =
              existedBalance +
              Number(ethers.utils.formatUnits(amount, denomination));
          } else {
            acc[currency.id][destChainTypeId] = Number(
              ethers.utils.formatUnits(amount, denomination)
            );
          }
        }
      );

      return acc;
    }, {} as CurrencyBalanceRecordType);
  }, [allNotes]);

  // Parse the available assets from currency record
  const bridgingAssets = useMemo((): AssetType[] => {
    return Object.values(currenciyRecordFromNotes).reduce(
      (acc, { currency }) => {
        if (!currency) {
          return acc;
        }

        let balance = undefined;

        if (destChain) {
          const destChainTypeId = calculateTypedChainId(
            destChain.chainType,
            destChain.chainId
          );
          balance = balanceRecordFromNotes[currency.id]?.[destChainTypeId];
        }

        acc.push({
          name: currency.view.name,
          symbol: currency.view.symbol,
          balance,
        });

        return acc;
      },
      [] as AssetType[]
    );
  }, [balanceRecordFromNotes, currenciyRecordFromNotes, destChain]);

  // Callback when a chain item is selected
  const handlebridgingAssetChange = useCallback(
    async (newToken: AssetType) => {
      const selecteCurrency = Object.values(currenciyRecordFromNotes).find(
        ({ currency }) => currency.view.symbol === newToken.symbol
      );
      if (selecteCurrency) {
        setGovernedCurrency(selecteCurrency.currency);
      }
    },
    [currenciyRecordFromNotes, setGovernedCurrency]
  );

  // The selected asset to display in the transfer card
  const selectedBridgingAsset = useMemo<AssetType | undefined>(() => {
    if (!governedCurrency) {
      return undefined;
    }

    let balance = undefined;
    if (destChain) {
      const destChainTypeId = calculateTypedChainId(
        destChain.chainType,
        destChain.chainId
      );
      balance = balanceRecordFromNotes[governedCurrency.id]?.[destChainTypeId];
    }

    return {
      symbol: governedCurrency.view.symbol,
      name: governedCurrency.view.name,
      balance,
    };
  }, [balanceRecordFromNotes, destChain, governedCurrency]);

  // Callback for bridging asset input click
  const handleBridgingAssetInputClick = useCallback(() => {
    setMainComponent(
      <TokenListCard
        className="w-[550px] h-[720px]"
        title="Select Asset to Transfer"
        popularTokens={[]}
        selectTokens={bridgingAssets}
        unavailableTokens={[]}
        onChange={(newAsset) => {
          handlebridgingAssetChange(newAsset);
          setMainComponent(undefined);
        }}
        onClose={() => setMainComponent(undefined)}
      />
    );
  }, [bridgingAssets, handlebridgingAssetChange, setMainComponent]);

  // Get all destination chains
  const allDestChains = useMemo<ChainRecord>(() => {
    return Object.values(currenciyRecordFromNotes).reduce((acc, currency) => {
      return {
        ...acc,
        ...currency.destChainRecord,
      };
    }, {} as ChainRecord);
  }, [currenciyRecordFromNotes]);

  // Get available destination chains from selected bridge asset
  const availableDestChains = useMemo<Chain[]>(() => {
    if (!selectedBridgingAsset) {
      return Object.values(allDestChains);
    }

    const currency = Object.values(currenciyRecordFromNotes).find(
      ({ currency }) =>
        currency.view.symbol === selectedBridgingAsset.symbol &&
        currency.view.name === selectedBridgingAsset.name
    );

    return currency
      ? Object.values(currency.destChainRecord)
      : Object.values(allDestChains);
  }, [selectedBridgingAsset, currenciyRecordFromNotes, allDestChains]);

  // Selected destination chain
  const selectedDestChain = useMemo<ChainType | undefined>(() => {
    if (!destChain) {
      return undefined;
    }

    return {
      name: destChain.name,
    } as ChainType;
  }, [destChain]);

  // Callback for destination chain input clicked
  const handleDestChainClick = useCallback(() => {
    setMainComponent(
      <ChainListCard
        className="w-[550px] h-[720px]"
        chainType={'dest'}
        chains={availableDestChains.map(
          (chain) =>
            ({
              name: chain.name,
            } as ChainType)
        )}
        value={selectedDestChain}
        onClose={() => setMainComponent(undefined)}
        onChange={(newChain) => {
          const chain = availableDestChains.find(
            (chain) => chain.name === newChain.name
          );

          if (chain) {
            setDestChain(chain);
          }
          setMainComponent(undefined);
        }}
      />
    );
  }, [availableDestChains, selectedDestChain, setMainComponent]);

  // Callback for amount input changed
  const onAmountChange = useCallback(
    (amount: string): void => {
      const parsedAmount = Number(amount);
      const availableAmount = selectedBridgingAsset?.balance ?? 0;

      if (isNaN(parsedAmount) || parsedAmount < 0) {
        setAmountError('Invalid amount');
        return;
      }

      if (parsedAmount > availableAmount) {
        setAmountError('Insufficient balance');
        return;
      }

      setAmount(parsedAmount);
      setAmountError('');
    },
    [selectedBridgingAsset?.balance]
  );

  // Callback for relayer input clicked
  const handleRelayerClick = useCallback(() => {
    if (!activeApi || !activeChain) {
      return;
    }

    const relayerList = relayers
      .map((relayer) => {
        const relayerData = relayer.capabilities.supportedChains[
          activeChain.chainType === ChainTypeEnum.EVM ? 'evm' : 'substrate'
        ].get(
          calculateTypedChainId(activeChain.chainType, activeChain.chainId)
        );

        const theme =
          activeChain.chainType === ChainTypeEnum.EVM
            ? ('ethereum' as const)
            : ('substrate' as const);

        return {
          address: relayerData?.beneficiary ?? '',
          externalUrl: relayer.endpoint,
          theme,
        };
      })
      .filter((x) => !!x);

    const relayerValue = activeRelayer
      ? ({
          address: activeRelayer.beneficiary ?? '',
          externalUrl: activeRelayer.endpoint,
          theme:
            activeChain.chainType === ChainTypeEnum.EVM
              ? 'ethereum'
              : 'substrate',
        } as RelayerType)
      : undefined;

    setMainComponent(
      <RelayerListCard
        relayers={relayerList}
        value={relayerValue}
        className="w-[550px] h-[720px]"
        onClose={() => setMainComponent(undefined)}
        onChange={(nextRelayer) => {
          setRelayer(
            relayers.find((relayer) => {
              return relayer.endpoint === nextRelayer.externalUrl;
            }) ?? null
          );
          setMainComponent(undefined);
        }}
      />
    );
  }, [
    activeApi,
    activeChain,
    activeRelayer,
    relayers,
    setMainComponent,
    setRelayer,
  ]);

  // Boolean indicating whether the amount value is valid or not
  const isValidAmount = useMemo(() => {
    return amount > 0 && amount <= (selectedBridgingAsset?.balance ?? 0);
  }, [amount, selectedBridgingAsset?.balance]);

  // Boolean state for whether the transfer button is disabled
  const isTransferButtonDisabled = useMemo<boolean>(() => {
    const availableAmount = selectedBridgingAsset?.balance ?? 0;

    return [
      Boolean(governedCurrency), // No governed currency selected
      Boolean(destChain),
      isValidAmount, // Is valid amount
      Boolean(recipient), // No recipient address
    ].some((value) => value === false);
  }, [
    destChain,
    governedCurrency,
    isValidAmount,
    recipient,
    selectedBridgingAsset?.balance,
  ]);

  // Callback for transfer button clicked
  const handleTransferClick = useCallback(async () => {
    console.log('Transfer clicked');
  }, []);

  // Calculate the info for UI display
  const infoCalculated = useMemo(() => {
    const availableAmount = selectedBridgingAsset?.balance ?? 0;

    const transferAmount = isValidAmount
      ? getRoundedAmountString(amount)
      : undefined;

    const changeAmount = isValidAmount
      ? getRoundedAmountString(availableAmount - amount)
      : undefined;

    return {
      transferAmount,
      changeAmount,
      transferTokenSymbol: selectedBridgingAsset?.symbol,
    };
  }, [
    amount,
    isValidAmount,
    selectedBridgingAsset?.balance,
    selectedBridgingAsset?.symbol,
  ]);

  return (
    <div>
      <TransferCard
        bridgeAssetInputProps={{
          token: selectedBridgingAsset,
          onClick: handleBridgingAssetInputClick,
        }}
        destChainInputProps={{
          chain: selectedDestChain,
          chainType: 'dest',
          onClick: handleDestChainClick,
        }}
        amountInputProps={{
          amount: amount.toString(),
          onAmountChange,
          errorMessage: amountError,
          onMaxBtnClick: () => setAmount(selectedBridgingAsset?.balance ?? 0),
        }}
        relayerInputProps={{
          relayerAddress: activeRelayer?.beneficiary,
          iconTheme: activeChain
            ? activeChain.chainType === ChainTypeEnum.EVM
              ? 'ethereum'
              : 'substrate'
            : undefined,
          onClick: handleRelayerClick,
        }}
        recipientInputProps={{
          onChange: (recipient) => {
            setRecipient(recipient);
          },
        }}
        transferBtnProps={{
          isDisabled: isTransferButtonDisabled,
          onClick: handleTransferClick,
        }}
        transferAmount={infoCalculated.transferAmount}
        transferToken={infoCalculated.transferTokenSymbol}
        changeAmount={infoCalculated.changeAmount}
      />
    </div>
  );
});
