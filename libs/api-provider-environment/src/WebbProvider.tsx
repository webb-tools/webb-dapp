import {
  Account,
  Currency,
  NotificationPayload,
  WebbApiProvider,
} from '@webb-tools/abstract-api-provider';
import { Bridge } from '@webb-tools/abstract-api-provider/state';
import { LoggerService } from '@webb-tools/browser-utils';
import {
  NetworkStorage,
  keypairStorageFactory,
  netStorageFactory,
  noteStorageFactory,
  resetNoteStorage,
} from '@webb-tools/browser-utils/storage';
import {
  ApiConfig,
  Chain,
  Wallet,
  chainsConfig,
  chainsPopulated,
  parseOnChainData,
  walletsConfig,
} from '@webb-tools/dapp-config';
import wagmiConfig from '@webb-tools/dapp-config/wagmi-config';
import {
  BareProps,
  CurrencyRole,
  InteractiveFeedback,
  WalletId,
  WebbError,
  WebbErrorCodes,
} from '@webb-tools/dapp-types';
import { Spinner } from '@webb-tools/icons';
import { NoteManager } from '@webb-tools/note-manager';
import { WebbPolkadot } from '@webb-tools/polkadot-api-provider';
import { getRelayerManagerFactory } from '@webb-tools/relayer-manager-factory';
import {
  ChainType,
  Keypair,
  calculateTypedChainId,
} from '@webb-tools/sdk-core';
import {
  Web3RelayerManager,
  WebbWeb3Provider,
  isViemError,
} from '@webb-tools/web3-api-provider';
import { Typography, notificationApi } from '@webb-tools/webb-ui-components';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { WagmiConfig } from 'wagmi';
import { TAppEvent } from './app-event';
import constants from './constants';
import { unsupportedChain } from './error';
import { insufficientApiInterface } from './error/interactive-errors/insufficient-api-interface';
import onChainDataJson from './generated/on-chain-config.json';
import { StoreProvider } from './store';
import { useTxApiQueue } from './transaction';
import { WebbContext } from './webb-context';

interface WebbProviderProps extends BareProps {
  appEvent: TAppEvent;
  applicationName: string;
  applicationVersion?: string;
}

const chains = chainsPopulated;
const logger = LoggerService.get('WebbProvider');

const registerInteractiveFeedback = (
  setter: (update: (p: InteractiveFeedback[]) => InteractiveFeedback[]) => any,
  interactiveFeedback: InteractiveFeedback
) => {
  let off: any;
  setter((p) => [...p, interactiveFeedback]);
  // eslint-disable-next-line prefer-const
  off = interactiveFeedback.on('canceled', () => {
    setter((p) => p.filter((entry) => entry !== interactiveFeedback));
    off && off?.();
  });
};

const { currencies, anchors, fungibleToWrappableMap } =
  parseOnChainData(onChainDataJson);

const apiConfig = ApiConfig.init({
  anchors,
  chains: chainsConfig,
  currencies,
  fungibleToWrappableMap,
  wallets: walletsConfig,
});

function notificationHandler(notification: NotificationPayload) {
  switch (notification.name) {
    case 'Transaction': {
      const isFailed = notification.level === 'error';
      const isFinalized = notification.level === 'success';
      const description = notification.data ? (
        <div>
          {Object.keys(notification.data).map((i, idx) => (
            <Typography variant="body1" key={`${i}${idx}`}>
              {notification.data?.[i]}
            </Typography>
          ))}
        </div>
      ) : (
        notification.description
      );
      if (isFinalized) {
        const key = notificationApi({
          extras: {
            persist: false,
          },
          message: notification.message ?? 'Submit Transaction Success',
          secondaryMessage: description,
          key: notification.key,
          variant: 'success',
        });
        setTimeout(() => notificationApi.remove(notification.key), 6000);
        return key;
      } else if (isFailed) {
        return notificationApi({
          extras: {
            persist: false,
          },
          key: notification.key,
          message: notification.message,
          secondaryMessage: description,
          variant: 'error',
        });
      } else {
        return notificationApi({
          extras: {
            persist: true,
          },
          key: notification.key,
          message: notification.message,
          secondaryMessage: description,
          variant: 'info',
          // eslint-disable-next-line sort-keys
          Icon: <Spinner />,
          transparent: true,
        });
      }
    }
    default:
      return '';
  }
}

notificationHandler.remove = (key: string | number) => {
  notificationApi.remove(key);
};

const WebbProviderInner: FC<WebbProviderProps> = ({ children, appEvent }) => {
  const [activeWallet, setActiveWallet] = useState<Wallet | undefined>(
    undefined
  );

  const [activeChain, setActiveChain] = useState<Chain | undefined>(undefined);

  const [activeApi, setActiveApi] = useState<WebbApiProvider<any> | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  const [networkStorage, setNetworkStorage] = useState<NetworkStorage | null>(
    null
  );
  const [noteManager, setNoteManager] = useState<NoteManager | null>(null);

  // TODO resolve the account inner type issue
  const [accounts, setAccounts] = useState<Array<Account | any>>([]);

  // TODO resolve the account inner type issue
  const [activeAccount, _setActiveAccount] = useState<Account | any | null>(
    null
  );

  const [isConnecting, setIsConnecting] = useState(false);

  /// storing all interactive feedbacks to show the modals
  const [interactiveFeedbacks, setInteractiveFeedbacks] = useState<
    InteractiveFeedback[]
  >([]);

  /// An effect/hook will be called every time the active api is switched, it will cancel all the interactive feedbacks
  useEffect(() => {
    setInteractiveFeedbacks([]);
    const off = activeApi?.on('interactiveFeedback', (feedback) => {
      registerInteractiveFeedback(setInteractiveFeedbacks, feedback);
    });
    return () => {
      off && off();
      setInteractiveFeedbacks((p) => {
        p.forEach((p) => p.cancel());
        return [];
      });

      appEvent.send('changeNetworkSwitcherVisibility', false);
    };
  }, [activeApi, appEvent]);

  /// the active feedback is the last one
  const activeFeedback = useMemo(() => {
    if (interactiveFeedbacks.length === 0) {
      return null;
    }
    return interactiveFeedbacks[interactiveFeedbacks.length - 1];
  }, [interactiveFeedbacks]);

  /// callback for setting active account
  /// it will store on the provider and the storage of the network
  const setActiveAccount = useCallback(
    async (
      account: Account,
      options: {
        networkStorage?: NetworkStorage | undefined | null;
        chain?: Chain | undefined;
        activeApi?: WebbApiProvider<any> | undefined;
      } = {}
    ) => {
      const innerNetworkStorage = options.networkStorage ?? networkStorage;
      const innerChain = options.chain ?? activeChain;
      const innerActiveApi = options.activeApi ?? activeApi;

      if (innerNetworkStorage && innerChain) {
        const typedChainId = calculateTypedChainId(
          innerChain.chainType,
          innerChain.id
        );

        const networksConfig = await innerNetworkStorage.get('networksConfig');
        innerNetworkStorage?.set('networksConfig', {
          ...networksConfig,
          [typedChainId]: {
            ...networksConfig[typedChainId],
            defaultAccount: account.address,
          },
        });
      }

      if (!innerActiveApi) {
        return;
      }

      _setActiveAccount(account);
      // TODO resolve the account inner type issue
      await innerActiveApi.accounts.setActiveAccount(account);
    },
    [activeApi, activeChain, networkStorage]
  );

  /// this will set the active api and the accounts
  const setActiveApiWithAccounts = useCallback(
    async (
      nextActiveApi: WebbApiProvider<any> | undefined,
      chain: Chain,
      _networkStorage?: NetworkStorage | null
    ): Promise<void> => {
      if (nextActiveApi) {
        let hasSetFromStorage = false;
        const accounts = await nextActiveApi.accounts.accounts();

        const typedChainId = calculateTypedChainId(chain.chainType, chain.id);

        // TODO resolve the account inner type issue
        setAccounts(accounts as any);

        if (_networkStorage) {
          const networkDefaultConfig = await _networkStorage.get(
            'networksConfig'
          );
          let defaultAccount =
            networkDefaultConfig?.[typedChainId]?.defaultAccount;
          defaultAccount = defaultAccount ?? accounts[0]?.address;
          const defaultFromSettings = accounts.find(
            (account) => account.address === defaultAccount
          );
          if (defaultFromSettings) {
            // TODO resolve the account inner type issue
            _setActiveAccount(defaultFromSettings as any);
            await nextActiveApi.accounts.setActiveAccount(defaultFromSettings);
            hasSetFromStorage = true;
          }
        }

        if (!hasSetFromStorage) {
          await setActiveAccount(accounts[0], {
            networkStorage: _networkStorage,
            chain,
            activeApi: nextActiveApi,
          });
        }

        setActiveApi(nextActiveApi);
        nextActiveApi?.on('newAccounts', async (accounts) => {
          const acs = await accounts.accounts();
          const active = acs[0] || null;
          setAccounts(acs);
          _setActiveAccount(active);
        });
      } else {
        setActiveApi(nextActiveApi);
        setAccounts([]);
        _setActiveAccount(null);
      }
    },
    [setActiveAccount]
  );

  /// Error handler for the `WebbError`
  const catchWebbError = useCallback(
    (e: WebbError) => {
      const errorMessage = e.errorMessage;
      const code = errorMessage.code;
      switch (code) {
        case WebbErrorCodes.UnsupportedChain:
          {
            setActiveChain(undefined);
            const interactiveFeedback = unsupportedChain(apiConfig);
            if (interactiveFeedback) {
              registerInteractiveFeedback(
                setInteractiveFeedbacks,
                interactiveFeedback
              );
            }
          }
          break;
        case WebbErrorCodes.UnselectedChain:
          break;
        case WebbErrorCodes.MetaMaskExtensionNotInstalled:
        case WebbErrorCodes.PolkaDotExtensionNotInstalled:
        case WebbErrorCodes.TalismanExtensionNotInstalled:
        case WebbErrorCodes.SubWalletExtensionNotInstalled:
          {
            // TODO: Implement interactive feedback with new components from webb-ui-components:
          }
          break;
        case WebbErrorCodes.InsufficientProviderInterface:
          {
            setActiveChain(undefined);
            const interactiveFeedback = insufficientApiInterface(appEvent);
            registerInteractiveFeedback(
              setInteractiveFeedbacks,
              interactiveFeedback
            );
          }
          break;
        case WebbErrorCodes.RelayerMisbehaving:
          break;
        default:
          alert(code);
      }
    },
    [appEvent]
  );

  const loginNoteAccount = useCallback(
    async (key: string): Promise<NoteManager> => {
      // Set the keypair
      const keypairStorage = await keypairStorageFactory();
      const accountKeypair = new Keypair(key);
      await keypairStorage.set('keypair', {
        keypair: key,
      });

      // create a NoteManager instance
      const noteStorage = await noteStorageFactory();
      const noteManager = await NoteManager.initAndDecryptNotes(
        noteStorage,
        accountKeypair
      );

      // set the noteManager instance on the activeApi if it exists
      if (activeApi) {
        activeApi.noteManager = noteManager;
      }

      setNoteManager(noteManager);
      return noteManager;
    },
    [activeApi]
  );

  const logoutNoteAccount = useCallback(async () => {
    const keypairStorage = await keypairStorageFactory();
    keypairStorage.set('keypair', {
      keypair: null,
    });
    // clear the noteManager instance on the activeApi if it exists
    if (activeApi) {
      activeApi.noteManager = null;
    }
    setNoteManager(null);
  }, [activeApi]);

  const purgeNoteAccount = useCallback(async () => {
    const keypairStorage = await keypairStorageFactory();
    const currentKeypairPrivateKey = await keypairStorage.get('keypair');

    if (!currentKeypairPrivateKey?.keypair) {
      return;
    }

    resetNoteStorage();

    keypairStorage.set('keypair', {
      keypair: null,
    });

    // clear the noteManager instance on the activeApi if it exists
    if (activeApi) {
      activeApi.noteManager = null;
    }
    setNoteManager(null);
  }, [activeApi]);

  /// Network switcher
  const switchChain = useCallback(
    async (
      chain: Chain,
      _wallet: Wallet,
      _networkStorage?: NetworkStorage | undefined,
      _bridge?: Bridge | undefined
    ) => {
      const wallet = _wallet || activeWallet;

      const nextTypedChainId = calculateTypedChainId(chain.chainType, chain.id);

      const sharedWalletConnectionPayload = {
        walletId: wallet.id,
        typedChainId: { chainId: chain.id, chainType: chain.chainType },
      };

      // wallet cleanup
      /// if new wallet id isn't the same of the current then the dApp is dealing with api change
      if (activeApi) {
        await activeApi.destroy();
      }

      try {
        setLoading(true);
        appEvent.send('walletConnectionState', {
          ...sharedWalletConnectionPayload,
          status: 'loading',
        });

        const relayerManagerFactory = await getRelayerManagerFactory();

        /// init the active api value
        let localActiveApi: WebbApiProvider<any> | null = null;

        switch (wallet.id) {
          case WalletId.Polkadot:
          case WalletId.Talisman:
          case WalletId.SubWallet:
            {
              const relayerManager =
                await relayerManagerFactory.getRelayerManager('substrate');
              const webSocketUrls = chain.rpcUrls.default.webSocket;
              if (!webSocketUrls || webSocketUrls.length === 0) {
                throw new Error(
                  `No websocket urls found for chain ${chain.name}`
                );
              }

              const webbPolkadot = await WebbPolkadot.init(
                constants.APP_NAME,
                Array.from(webSocketUrls),
                {
                  onError: (feedback: InteractiveFeedback) => {
                    registerInteractiveFeedback(
                      setInteractiveFeedbacks,
                      feedback
                    );
                    appEvent.send('walletConnectionState', {
                      ...sharedWalletConnectionPayload,
                      status: 'failed',
                    });
                  },
                },
                relayerManager,
                apiConfig,
                notificationHandler,
                nextTypedChainId,
                wallet
              );

              await setActiveApiWithAccounts(
                webbPolkadot,
                chain,
                _networkStorage ?? networkStorage
              );

              localActiveApi = webbPolkadot;

              if (noteManager) {
                localActiveApi.noteManager = noteManager;
              }

              appEvent.send('walletConnectionState', {
                ...sharedWalletConnectionPayload,
                status: 'sucess',
              });
              setLoading(false);
            }
            break;

          case WalletId.MetaMask:
          case WalletId.WalletConnectV2:
            {
              const connector = walletsConfig[wallet.id].connector;
              if (!connector) {
                throw WebbError.from(WebbErrorCodes.NoConnectorConfigured);
              }

              const chainId = chain.id;

              const relayerManager =
                (await relayerManagerFactory.getRelayerManager(
                  'evm'
                )) as Web3RelayerManager;

              const webbWeb3Provider = await WebbWeb3Provider.init(
                connector,
                chainId,
                relayerManager,
                noteManager,
                apiConfig,
                notificationHandler
              );

              const providerUpdateHandler = async ([
                updatedChainId,
              ]: number[]) => {
                const nextChain = Object.values(chains).find(
                  (chain) => chain.id === updatedChainId
                );

                try {
                  /// this will throw if the user switched to unsupported chain
                  const name = apiConfig.getEVMChainName(updatedChainId);
                  const newTypedChainId = calculateTypedChainId(
                    ChainType.EVM,
                    updatedChainId
                  );

                  /// update the current typed chain id
                  webbWeb3Provider.typedChainidSubject.next(newTypedChainId);

                  /// Alerting that the provider has changed via the extension
                  notificationApi({
                    message: 'Web3: Connected',
                    variant: 'info',
                    secondaryMessage: `Connection is switched to ${name} chain`,
                  });
                  setActiveWallet(wallet);
                  setActiveChain(nextChain ? nextChain : chain);

                  const bridgeOptions: Record<number, Bridge> = {};

                  // Set a reasonable default bridge and change available bridges based on the new chain
                  let defaultBridge: Bridge | null = null;
                  for (const bridgeConfig of Object.values(
                    webbWeb3Provider.config.bridgeByAsset
                  )) {
                    if (
                      Object.keys(bridgeConfig.anchors).includes(
                        newTypedChainId.toString()
                      )
                    ) {
                      // List the bridge as supported by the new chain
                      const bridgeCurrencyConfig =
                        webbWeb3Provider.config.currencies[bridgeConfig.asset];
                      const bridgeCurrency = new Currency(bridgeCurrencyConfig);
                      if (
                        bridgeCurrency.getRole() !== CurrencyRole.Governable
                      ) {
                        continue;
                      }
                      const bridgeTargets = bridgeConfig.anchors;
                      const supportedBridge = new Bridge(
                        bridgeCurrency,
                        bridgeTargets
                      );
                      bridgeOptions[bridgeCurrency.id] = supportedBridge;

                      // Set the first compatible bridge encountered.
                      if (!defaultBridge) {
                        defaultBridge = supportedBridge;
                      }
                    }
                  }

                  // set the available bridges of the new chain
                  webbWeb3Provider.state.setBridgeOptions(bridgeOptions);
                  webbWeb3Provider.state.activeBridge = defaultBridge;
                } catch (e) {
                  /// set the chain to be undefined as this won't be usable
                  // TODO mark the api as not ready
                  setActiveChain(undefined);
                  setActiveWallet(wallet);
                  webbWeb3Provider.state.activeBridge = null;
                  if (e instanceof WebbError) {
                    /// Catching the errors for the switcher from the event
                    catchWebbError(e);
                  }
                }
              };

              // Listen for chain updates when user switches chains in the extension
              webbWeb3Provider.on('providerUpdate', providerUpdateHandler);

              webbWeb3Provider.setChainListener();
              webbWeb3Provider.setAccountListener();

              // Get the new chain id after the initialization of webb provider
              const currentChainId = await webbWeb3Provider.getChainId();

              if (currentChainId !== chain.id) {
                await webbWeb3Provider.switchOrAddChain(chain.id);
              }

              // Emit events
              appEvent.send('networkSwitched', [
                {
                  chainType: chain.chainType,
                  chainId: chain.id,
                },
                wallet.id,
              ]);

              await setActiveApiWithAccounts(
                webbWeb3Provider,
                chain,
                _networkStorage ?? networkStorage
              );
              /// listen to `providerUpdate` by MetaMask
              localActiveApi = webbWeb3Provider;
              setLoading(false);
            }
            break;
        }
        /// settings the user selection
        setActiveChain(chain);
        setActiveWallet(wallet);
        setLoading(false);
        appEvent.send('walletConnectionState', {
          ...sharedWalletConnectionPayload,
          status: 'sucess',
        });

        // If the _bridge is passed in, set it as the active bridge
        if (localActiveApi?.state && _bridge) {
          localActiveApi.state.activeBridge = _bridge;
        }

        return localActiveApi;
      } catch (e) {
        setLoading(false);
        logger.error(e);

        let err: WebbError | undefined = undefined;

        if (e instanceof WebbError) {
          /// Catch the errors for the switcher while switching
          catchWebbError(e);
          err = e;
        } else {
          // Parse and display error
          let errorMessage = WebbError.getErrorMessage(
            WebbErrorCodes.SwitchChainFailed
          ).message;

          if (isViemError(e)) {
            errorMessage = e.shortMessage;
          }

          notificationApi({
            variant: 'error',
            message: 'Web3: Switch Chain Error',
            secondaryMessage: errorMessage,
          });
        }

        appEvent.send('walletConnectionState', {
          ...sharedWalletConnectionPayload,
          status: 'failed',
          error: err,
        });

        return null;
      }
    },
    [
      activeApi,
      activeWallet,
      appEvent,
      catchWebbError,
      networkStorage,
      noteManager,
      setActiveApiWithAccounts,
    ]
  );

  /// a util will store the network/wallet config before switching
  const switchChainAndStore = useCallback(
    async (chain: Chain, wallet: Wallet, bridge?: Bridge) => {
      setIsConnecting(true);

      try {
        const provider = await switchChain(chain, wallet, undefined, bridge);
        /** TODO: `networkStorage` can be `null` here.
         * Suggestion: use `useRef` instead of `useState`
         * for the `networkStorage` because state update asynchronous
         * */
        const _networkStorage = networkStorage ?? (await netStorageFactory());
        if (provider && _networkStorage) {
          await Promise.all([
            _networkStorage.set(
              'defaultNetwork',
              calculateTypedChainId(chain.chainType, chain.id)
            ),
            _networkStorage.set('defaultWallet', wallet.id),
          ]);
        }
        return provider;
      } finally {
        setIsConnecting(false);
      }
    },
    [networkStorage, switchChain]
  );

  useEffect(() => {
    /// init the dApp
    const init = async () => {
      setIsConnecting(true);
      const _networkStorage = await netStorageFactory();
      setNetworkStorage(_networkStorage);
      /// get the default wallet and network from storage
      const [net, wallet] = await Promise.all([
        _networkStorage.get('defaultNetwork'),
        _networkStorage.get('defaultWallet'),
      ]);

      // NoteManager configuration
      const keypairStorage = await keypairStorageFactory();
      const storedKeypair = await keypairStorage.get('keypair');
      let createdNoteManager: NoteManager | null = null;

      // Create the NoteManager if the stored keypair exists.
      if (storedKeypair?.keypair) {
        createdNoteManager = await loginNoteAccount(storedKeypair.keypair);
        setNoteManager(createdNoteManager);
      }

      /// if there's no chain, return
      if (!net || !wallet) {
        return;
      }

      /// chain config by net id
      const chainConfig = chains[net];
      if (!chainConfig) {
        return;
      }

      let walletCfg: Wallet;

      // wallet config by chain
      if (Array.isArray(chainConfig.wallets)) {
        if (!chainConfig.wallets.length) {
          return;
        }

        // The new API with array of wallet ids
        if (chainConfig.wallets.includes(wallet)) {
          walletCfg = apiConfig.wallets[wallet];
        } else {
          walletCfg = apiConfig.wallets[chainConfig.wallets[0]];
        }
      } else {
        // The old API with Record of wallet ids and wallet configs
        walletCfg =
          chainConfig.wallets[wallet] || Object.values(chainConfig)[0];
      }

      const activeApi = await switchChain(
        chainConfig,
        walletCfg,
        _networkStorage
      );

      const networkDefaultConfig = await _networkStorage.get('networksConfig');

      if (activeApi) {
        if (!activeApi.noteManager) {
          activeApi.noteManager = createdNoteManager;
        }
        const accounts = await activeApi.accounts.accounts();
        let defaultAccount = networkDefaultConfig[net]?.defaultAccount;
        defaultAccount = defaultAccount ?? accounts[0]?.address;
        const defaultFromSettings = accounts.find(
          (account) => account.address === defaultAccount
        );
        logger.info(`Default account from settings`, defaultFromSettings);
        if (defaultFromSettings) {
          _setActiveAccount(defaultFromSettings);
          await activeApi.accounts.setActiveAccount(defaultFromSettings);
          _networkStorage?.set('networksConfig', {
            ...networkDefaultConfig,
            [net]: {
              ...chainConfig,
              defaultAccount: defaultFromSettings.address,
            },
          });
        }
      } else {
        // If the user did not want to switch to the previously stored chain,
        // set the previosuly stored chain in the app for display only.
        setActiveChain(chains[net]);
      }
    };
    init().finally(() => {
      setIsConnecting(false);
      setLoading(false);
    });
    appEvent.on('networkSwitched', async ([chain, wallet]) => {
      // Set the default network to the last selected network
      const networkStorage = await netStorageFactory();
      await Promise.all([
        networkStorage.set('defaultNetwork', chain.chainId),
        networkStorage.set('defaultWallet', wallet),
      ]);
    });
    appEvent.on('switchNetwork', ([chain, wallet]) => {
      switchChainAndStore(chain, wallet);
    });
    appEvent.on('setActiveAccount', (nextAccount) => {
      setActiveAccount(nextAccount);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const txQueue = useTxApiQueue(apiConfig);

  return (
    <WebbContext.Provider
      value={{
        loading,
        wallets: walletsConfig,
        chains: chains,
        noteManager,
        loginNoteAccount,
        logoutNoteAccount,
        purgeNoteAccount,
        activeWallet,
        activeChain,
        activeApi,
        accounts,
        activeAccount,
        setActiveAccount,
        apiConfig,
        switchChain: switchChainAndStore,
        isConnecting,
        async inactivateApi(): Promise<void> {
          if (activeApi) {
            setAccounts([]);
            _setActiveAccount(null);
            setActiveWallet(undefined);
            setActiveChain(activeChain);
            await activeApi.destroy();
            setActiveApi(undefined);
            // remove app config from local storage
            const _networkStorage =
              networkStorage ?? (await netStorageFactory());
            if (_networkStorage) {
              await Promise.all([
                _networkStorage.set('defaultNetwork', undefined),
                _networkStorage.set('defaultWallet', undefined),
                _networkStorage.set('networksConfig', {}),
              ]);
            }
          }
        },
        activeFeedback,
        registerInteractiveFeedback: (
          interactiveFeedback: InteractiveFeedback
        ) => {
          registerInteractiveFeedback(
            setInteractiveFeedbacks,
            interactiveFeedback
          );
        },
        appEvent,
        txQueue,
      }}
    >
      <StoreProvider>{children}</StoreProvider>
    </WebbContext.Provider>
  );
};

export const WebbProvider: FC<WebbProviderProps> = (props) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <WebbProviderInner {...props} />
    </WagmiConfig>
  );
};
