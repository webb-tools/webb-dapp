import Icon from '@material-ui/core/Icon';
import WalletConnectProvider from '@walletconnect/web3-provider';
import {
  anchorsConfig,
  bridgeConfigByAsset,
  chainsConfig,
  chainsPopulated,
  currenciesConfig,
  EVMChainId,
  evmIdIntoInternalChainId,
  getEVMChainName,
  InternalChainId,
  mixersConfig,
  walletsConfig,
} from '@webb-dapp/apps/configs';
import { getWebbRelayer } from '@webb-dapp/apps/configs/relayer-config';
import { WalletId } from '@webb-dapp/apps/configs/wallets/wallet-id.enum';
import { WebbPolkadot, WebbWeb3Provider } from '@webb-dapp/react-environment/api-providers';
import { appEvent } from '@webb-dapp/react-environment/app-event';
import { insufficientApiInterface } from '@webb-dapp/react-environment/error/interactive-errors/insufficient-api-interface';
import { DimensionsProvider } from '@webb-dapp/react-environment/layout';
import { StoreProvier } from '@webb-dapp/react-environment/store';
import { notificationApi } from '@webb-dapp/ui-components/notification';
import { AccountSwitchNotification } from '@webb-dapp/ui-components/notification/AccountSwitchNotification';
import { BareProps } from '@webb-dapp/ui-components/types';
import { InteractiveFeedback, WebbError, WebbErrorCodes } from '@webb-dapp/utils/webb-error';
import { Account } from '@webb-dapp/wallet/account/Accounts.adapter';
import { transactionNotificationConfig } from '@webb-dapp/wallet/providers/polkadot/transaction-notification-config';
import { Web3Provider } from '@webb-dapp/wallet/providers/web3/web3-provider';
import { LoggerService } from '@webb-tools/app-util';
import { logger } from 'ethers';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { extensionNotInstalled, unsupportedChain } from './error';
import { SettingProvider } from './SettingProvider';
import {
  AppConfig,
  Chain,
  netStorageFactory,
  NetworkStorage,
  NotificationData,
  NotificationKey,
  ProviderNotification,
  TXNotificationPayload,
  Wallet,
  WebbApiProvider,
  WebbContext,
} from './webb-context';

interface WebbProviderProps extends BareProps {
  applicationName: string;
  applicationVersion?: string;
}

const chains = chainsPopulated;

const registerInteractiveFeedback = (
  setter: (update: (p: InteractiveFeedback[]) => InteractiveFeedback[]) => any,
  interactiveFeedback: InteractiveFeedback
) => {
  let off: any;
  setter((p) => [...p, interactiveFeedback]);
  off = interactiveFeedback.on('canceled', () => {
    setter((p) => p.filter((entry) => entry !== interactiveFeedback));
    off && off?.();
  });
};
const appConfig: AppConfig = {
  anchors: anchorsConfig,
  bridgeByAsset: bridgeConfigByAsset,
  chains: chainsConfig,
  currencies: currenciesConfig,
  mixers: mixersConfig,
  wallet: walletsConfig,
};
const notification: ProviderNotification = {
  addToQueue(data: NotificationData): NotificationKey {
    return notificationApi.addToQueue({
      extras: {
        persist: data.persist,
      },
      variant: data.variant,
      secondaryMessage: data.description,
      message: data.message,
    });
  },
  remove(key: NotificationKey) {
    notificationApi.remove(key);
  },
  failed(payload: TXNotificationPayload<any>): NotificationKey {
    return transactionNotificationConfig.failed({
      data: payload.data,
      key: String(payload.key),
      address: payload.address,
      path: payload.path,
    });
  },
  loading(payload: TXNotificationPayload<any>): NotificationKey {
    return transactionNotificationConfig.failed({
      data: payload.data,
      key: String(payload.key),
      address: payload.address,
      path: payload.path,
    });
  },
  finalize(payload: TXNotificationPayload<any>): NotificationKey {
    return transactionNotificationConfig.failed({
      data: payload.data,
      key: String(payload.key),
      address: payload.address,
      path: payload.path,
    });
  },
};
export const WebbProvider: FC<WebbProviderProps> = ({ applicationName = 'Webb Dapp', children }) => {
  const [activeWallet, setActiveWallet] = useState<Wallet | undefined>(undefined);
  const [activeChain, setActiveChain] = useState<Chain | undefined>(undefined);
  const [activeApi, setActiveApi] = useState<WebbApiProvider<any> | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [networkStorage, setNetworkStorage] = useState<NetworkStorage | null>(null);
  const [accounts, setAccounts] = useState<Array<Account>>([]);
  const [activeAccount, _setActiveAccount] = useState<Account | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  /// storing all interactive feedbacks to show the modals
  const [interactiveFeedbacks, setInteractiveFeedbacks] = useState<InteractiveFeedback[]>([]);
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
  }, [activeApi]);

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
    async (account: Account<any>) => {
      if (networkStorage && activeChain) {
        const networksConfig = await networkStorage.get('networksConfig');
        networkStorage?.set('networksConfig', {
          ...networksConfig,
          [activeChain.id]: {
            ...networksConfig[activeChain.id],
            defaultAccount: account.address,
          },
        });
      }

      if (!activeApi) return;
      _setActiveAccount(account);
      await activeApi.accounts.setActiveAccount(account);
    },
    [activeApi, networkStorage, activeChain]
  );

  /// Forcefully tell react to rerender the application with api change
  const forceActiveApiUpdate = (activeApi: WebbApiProvider<any>) => {
    setActiveApi(activeApi);
    interactiveFeedbacks.forEach((interactiveFeedback) => {
      if (interactiveFeedback.reason === WebbErrorCodes.UnsupportedChain) {
        interactiveFeedback.cancel();
      }
    });
  };

  /// this will set the active api and the accounts
  const setActiveApiWithAccounts = async (
    nextActiveApi: WebbApiProvider<any> | undefined,
    chainId: number
  ): Promise<void> => {
    if (nextActiveApi) {
      const accounts = await nextActiveApi.accounts.accounts();
      setAccounts(accounts);

      if (networkStorage) {
        const networkDefaultConfig = await networkStorage.get('networksConfig');
        let defaultAccount = networkDefaultConfig?.[chainId]?.defaultAccount;
        defaultAccount = defaultAccount ?? accounts[0]?.address;
        const defaultFromSettings = accounts.find((account) => account.address === defaultAccount);
        if (defaultFromSettings) {
          _setActiveAccount(defaultFromSettings);
          await nextActiveApi?.accounts.setActiveAccount(defaultFromSettings);
        }
      } else {
        // await setActiveAccount(accounts[0]);
      }
      setActiveApi(nextActiveApi);
      nextActiveApi?.on('newAccounts', async (accounts) => {
        const acs = await accounts.accounts();
        const active = acs[0] || null;
        notificationApi({
          variant: 'info',
          Icon: (
            <div>
              <Icon>people-alt</Icon>
            </div>
          ),
          key: 'account-change',
          message: 'Account changed from provider',
          secondaryMessage: React.createElement(AccountSwitchNotification, {
            account: active?.address ?? 'UNKNOWN',
          }),
        });
        setAccounts(acs);
        _setActiveAccount(acs[0] || null);
      });
    } else {
      setActiveApi(nextActiveApi);
      setAccounts([]);
      _setActiveAccount(null);
    }
  };
  /// Error handler for the `WebbError`
  const catchWebbError = (e: WebbError) => {
    const errorMessage = e.errorMessage;
    const code = errorMessage.code;
    switch (code) {
      case WebbErrorCodes.UnsupportedChain:
        {
          setActiveChain(undefined);
          const interactiveFeedback = unsupportedChain();
          if (interactiveFeedback) {
            registerInteractiveFeedback(setInteractiveFeedbacks, interactiveFeedback);
          }
        }
        break;
      case WebbErrorCodes.UnselectedChain:
        break;
      case WebbErrorCodes.MixerSizeNotFound:
        break;
      case WebbErrorCodes.MetaMaskExtensionNotInstalled:
      case WebbErrorCodes.PolkaDotExtensionNotInstalled:
        {
          const interactiveFeedback = extensionNotInstalled(
            code === WebbErrorCodes.PolkaDotExtensionNotInstalled ? 'polkadot' : 'metamask'
          );
          setActiveChain(undefined);
          registerInteractiveFeedback(setInteractiveFeedbacks, interactiveFeedback);
        }
        break;
      case WebbErrorCodes.InsufficientProviderInterface:
        {
          setActiveChain(undefined);
          const interactiveFeedback = insufficientApiInterface(appEvent);
          registerInteractiveFeedback(setInteractiveFeedbacks, interactiveFeedback);
        }
        break;
      case WebbErrorCodes.RelayerMisbehaving:
        break;
      default:
        alert(code);
    }
  };
  /// Network switcher
  const switchChain = async (chain: Chain, _wallet: Wallet) => {
    const relayer = await getWebbRelayer();

    const wallet = _wallet || activeWallet;
    // wallet cleanup
    /// if new wallet id isn't the same of the current then the dApp is dealing with api change
    if (activeApi) {
      await activeApi.destroy();
    }
    try {
      setLoading(true);
      /// init the active api value
      let localActiveApi: WebbApiProvider<any> | null = null;
      switch (wallet.id) {
        case WalletId.Polkadot:
          {
            const url = chain.url;
            const webbPolkadot = await WebbPolkadot.init(
              'Webb DApp',
              [url],
              {
                onError: (feedback) => {
                  registerInteractiveFeedback(setInteractiveFeedbacks, feedback);
                },
              },
              relayer,
              appConfig,
              notification
            );
            await setActiveApiWithAccounts(webbPolkadot, chain.id);
            localActiveApi = webbPolkadot;
            setLoading(false);
          }
          break;
        case WalletId.MetaMask:
        case WalletId.WalletConnectV1:
          {
            let web3Provider: Web3Provider;
            if (wallet?.id === WalletId.WalletConnectV1) {
              const provider = new WalletConnectProvider({
                rpc: {
                  //default on metamask
                  [EVMChainId.EthereumMainNet]: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                  [EVMChainId.Ropsten]: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                  [EVMChainId.Goerli]: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                  [EVMChainId.Kovan]: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                  [EVMChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4',
                  //default on metamask
                  [EVMChainId.Beresheet]: 'http://beresheet1.edgewa.re:9933',
                  [EVMChainId.HarmonyTestnet1]: 'https://api.s1.b.hmny.io',
                },
                chainId: chain.chainId,
              });

              web3Provider = await Web3Provider.fromWalletConnectProvider(provider);
            } else {
              /// init provider from the extension
              web3Provider = await Web3Provider.fromExtension();
            }

            const clientInfo = web3Provider.clientMeta;
            if (clientInfo) {
              notificationApi({
                message: 'Connected to EVM wallet',
                secondaryMessage: `Connected to ${clientInfo.name}`,
                variant: 'success',
                key: 'network-connect',
                Icon: React.createElement(
                  'div',
                  {
                    style: {
                      background: 'white',
                      minWidth: 30,
                      minHeight: 30,
                      padding: 4,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  },
                  [React.createElement(wallet.logo, { key: `${wallet.id}logo` })]
                ),
              });
            }
            /// get the current active chain from metamask
            const chainId = await web3Provider.network; // storage based on network id

            const webbWeb3Provider = await WebbWeb3Provider.init(
              web3Provider,
              chainId,
              relayer,
              appConfig,
              notification
            );

            const providerUpdateHandler = async ([chainId]: number[]) => {
              const nextChain = Object.values(chains).find((chain) => chain.chainId === chainId);
              try {
                /// this will throw if the user switched to unsupported chain
                const name = getEVMChainName(chainId);
                /// Alerting that the provider has changed via the extension
                notificationApi({
                  message: 'Web3: changed the connected network',
                  variant: 'info',
                  Icon: React.createElement(Icon, null, ['leak_add']),
                  secondaryMessage: `Connection is switched to ${name} chain`,
                });
                webbWeb3Provider.setStorage(chainId);
                setActiveWallet(wallet);
                forceActiveApiUpdate(webbWeb3Provider);
                setActiveChain(nextChain ? nextChain : chain);
              } catch (e) {
                /// set the chain to be undefined as this won't be usable
                // TODO mark the api as not ready
                setActiveChain(undefined);
                setActiveWallet(wallet);
                if (e instanceof WebbError) {
                  /// Catching the errors for the switcher from the event
                  catchWebbError(e);
                }
              }
            };

            webbWeb3Provider.on('providerUpdate', providerUpdateHandler);

            webbWeb3Provider.setChainListener();
            const cantAddChain = !chain.chainId && !chain.evmRpcUrls;
            const addEvmChain = async () => {
              if (cantAddChain) {
                return;
              }

              // If we support the evmId but don't have an evmRpcUrl, then it is default on metamask
              await web3Provider
                .switchChain({
                  chainId: `0x${chain.chainId?.toString(16)}`,
                })
                ?.then(async () => {
                  if (web3Provider instanceof WalletConnectProvider) {
                    appEvent.send('networkSwitched', [
                      evmIdIntoInternalChainId(await chainId),
                      WalletId.WalletConnectV1,
                    ]);
                  } else {
                    appEvent.send('networkSwitched', [evmIdIntoInternalChainId(await chainId), WalletId.MetaMask]);
                  }
                })
                ?.catch(async (switchError) => {
                  console.log('inside catch for switchChain', switchError);

                  // cannot switch because network not recognized, so prompt to add it
                  if (switchError.code === 4902 && chain.chainId) {
                    const currency = currenciesConfig[chain.nativeCurrencyId];
                    await web3Provider.addChain({
                      chainId: `0x${chain.chainId.toString(16)}`,
                      chainName: chain.name,
                      rpcUrls: chain.evmRpcUrls ?? [],
                      nativeCurrency: {
                        decimals: 18,
                        name: currency.name,
                        symbol: currency.symbol,
                      },
                    });
                    // add network will prompt the switch, check evmId again and throw if user rejected
                    const newChainId = await web3Provider.network;

                    if (newChainId != chain.chainId) {
                      throw switchError;
                    }
                  } else {
                    throw switchError;
                  }
                });
            };
            if (chainId !== chain.chainId) {
              await addEvmChain();
            }

            await setActiveApiWithAccounts(webbWeb3Provider, chain.id);
            /// listen to `providerUpdate` by MetaMask
            localActiveApi = webbWeb3Provider;
          }
          break;
      }
      /// settings the user selection
      setActiveChain(chain);
      setActiveWallet(wallet);
      console.log('setActiveChain and setActiveWallet');
      setLoading(false);
      return localActiveApi;
    } catch (e) {
      if (e instanceof WebbError) {
        /// Catch the errors for the switcher while switching
        catchWebbError(e);
      }
      LoggerService.get('App').error(e);
      return null;
    }
  };
  /// a util will store the network/wallet config before switching
  const switchChainAndStore = async (chain: Chain, wallet: Wallet) => {
    const provider = await switchChain(chain, wallet);
    if (provider && networkStorage) {
      await Promise.all([
        networkStorage.set('defaultNetwork', chain.id),
        networkStorage.set('defaultWallet', wallet.id),
      ]);
    }
    return provider;
  };

  useEffect(() => {
    /// init the dApp
    const init = async () => {
      setIsConnecting(true);
      const networkStorage = await netStorageFactory();
      setNetworkStorage(networkStorage);
      /// get the default wallet and network from storage
      const [net, wallet] = await Promise.all([
        networkStorage.get('defaultNetwork'),
        networkStorage.get('defaultWallet'),
      ]);
      /// if there's no chain, set the default to Rinkeby and return
      if (!net || !wallet) {
        setActiveChain(chains[InternalChainId.Rinkeby]);
        return;
      }
      /// chain config by net id
      const chainConfig = chains[net];
      // wallet config by chain
      const walletConfig = chainConfig.wallets[wallet] || Object.values(chainConfig)[0];
      const activeApi = await switchChain(chainConfig, walletConfig);
      const networkDefaultConfig = await networkStorage.get('networksConfig');

      if (activeApi) {
        const accounts = await activeApi.accounts.accounts();
        let defaultAccount = networkDefaultConfig[chainConfig.id]?.defaultAccount;
        defaultAccount = defaultAccount ?? accounts[0]?.address;
        const defaultFromSettings = accounts.find((account) => account.address === defaultAccount);
        logger.info(`Default account from settings`, defaultFromSettings);
        if (defaultFromSettings) {
          _setActiveAccount(defaultFromSettings);
          await activeApi.accounts.setActiveAccount(defaultFromSettings);
          networkStorage?.set('networksConfig', {
            ...networkDefaultConfig,
            [chainConfig.id]: {
              ...chainConfig,
              defaultAccount: defaultFromSettings.address,
            },
          });
        }
      } else {
        // If the user did not want to switch to the previously stored chain,
        // set the previosuly stored chain in the app for display only.
        setActiveChain(chains[chainConfig.id]);
      }
    };
    init().finally(() => {
      setIsConnecting(false);
    });
    appEvent.on('networkSwitched', async ([chain, wallet]) => {
      const networkStorage = await netStorageFactory();
      await Promise.all([networkStorage.set('defaultNetwork', chain), networkStorage.set('defaultWallet', wallet)]);
    });
    appEvent.on('switchNetwork', ([chain, wallet]) => {
      switchChainAndStore(chain, wallet);
    });
    appEvent.on('setActiveAccount', (nextAccount) => {
      setActiveAccount(nextAccount);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <WebbContext.Provider
      value={{
        loading,
        wallets: walletsConfig,
        chains: chains,
        activeWallet,
        activeChain,
        activeApi,
        accounts,
        activeAccount,
        setActiveAccount,
        switchChain: switchChainAndStore,
        isConnecting,
        async inactivateApi(): Promise<void> {
          setActiveApi(undefined);
          if (activeApi) {
            await activeApi.destroy();
          }
        },
        activeFeedback,
        registerInteractiveFeedback: (interactiveFeedback: InteractiveFeedback) => {
          registerInteractiveFeedback(setInteractiveFeedbacks, interactiveFeedback);
        },
      }}
    >
      <StoreProvier>
        <SettingProvider>
          <DimensionsProvider>{children}</DimensionsProvider>
        </SettingProvider>
      </StoreProvier>
    </WebbContext.Provider>
  );
};
