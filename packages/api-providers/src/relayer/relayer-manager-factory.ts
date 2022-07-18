// Copyright 2022 @webb-tools/
// SPDX-License-Identifier: Apache-2.0

import { Observable, Subject } from 'rxjs';

import {
  Capabilities,
  ChainNameIntoChainId,
  RelayerConfig,
  RelayerInfo,
  RelayerManagerType,
} from '../abstracts/relayer/types';
import { WebbRelayerManager } from '../abstracts/relayer/webb-relayer-manager';
import { PolkadotRelayerManager } from '../polkadot/relayer-manager';
import { Web3RelayerManager } from '../web3/relayer-manager';
import { AppConfig, WebbRelayer } from '..';

/**
 * The WebbRelayerManagerFactory will initiate communication with relayers,
 * Then vend instances of RelayerManagers for use by webb-providers
 *
 * @param capabilities - storage for relayers capabilities
 * @param relayerConfigs - The whole relayers configuration of the project
 * @param chainNameAdapter - An adapter for getting the typedChainId from the chain name and the base
 * @param appConfig - App config is used for looking up configuration values for issuing queries on the relayers
 **/
export class WebbRelayerManagerFactory {
  private capabilities: Record<RelayerConfig['endpoint'], Capabilities> = {};
  private _listUpdated = new Subject<void>();
  public readonly listUpdated: Observable<void>;

  private constructor(
    protected relayerConfigs: RelayerConfig[],
    private readonly chainNameAdapter: ChainNameIntoChainId,
    private appConfig: AppConfig
  ) {
    this.listUpdated = this._listUpdated.asObservable();
  }

  /**
   * Mapping the fetched relayers info to the Capabilities store
   **/
  private static infoIntoCapabilities(info: RelayerInfo, nameAdapter: ChainNameIntoChainId): Capabilities {
    console.log('received info: ', info);

    return {
      hasIpService: true,
      supportedChains: {
        evm: info.evm
          ? Object.keys(info.evm)
              .filter((key) => info.evm[key]?.beneficiary && nameAdapter(key, 'evm') != null)
              .reduce((m, key) => {
                m.set(nameAdapter(key, 'evm'), info.evm[key]);

                return m;
              }, new Map())
          : new Map(),
        substrate: info.substrate
          ? Object.keys(info.substrate)
              .filter((key) => info.substrate[key]?.beneficiary && nameAdapter(key, 'substrate') != null)
              .reduce((m, key) => {
                m.set(nameAdapter(key, 'substrate'), info.substrate[key]);

                return m;
              }, new Map())
          : new Map(),
      },
    };
  }

  /// fetch relayers
  private async fetchCapabilitiesAndInsert(config: RelayerConfig) {
    this.capabilities[config.endpoint] = await this.fetchCapabilities(config.endpoint);

    return this.capabilities;
  }

  public async fetchCapabilities(endpoint: string): Promise<Capabilities> {
    const res = await fetch(`${endpoint}/api/v1/info`);
    const info: RelayerInfo = await res.json();

    return WebbRelayerManagerFactory.infoIntoCapabilities(info, this.chainNameAdapter);
  }

  // This function will add the relayer to the factory's store of capabilities.
  // When new RelayerManagers are created, any added entries will be passed.
  public async addRelayer(endpoint: string) {
    const c = await this.fetchCapabilitiesAndInsert({ endpoint });

    this._listUpdated.next();

    return c;
  }

  /**
   * init the builder
   *  create new instance and fetch the relayers
   **/
  static async init(
    config: RelayerConfig[],
    chainNameAdapter: ChainNameIntoChainId,
    appConfig: AppConfig
  ): Promise<WebbRelayerManagerFactory> {
    const relayerManagerFactory = new WebbRelayerManagerFactory(config, chainNameAdapter, appConfig);

    // For all relayers in the relayerConfigs, fetch the info - but timeout after 5 seconds
    // This is done to prevent issues with relayers which are not operating properly
    await Promise.allSettled(
      config.map((p) => {
        return Promise.race([
          relayerManagerFactory.fetchCapabilitiesAndInsert(p),
          new Promise((resolve) => {
            setTimeout(resolve.bind(null, null), 5000);
          }),
        ]);
      })
    );

    return relayerManagerFactory;
  }

  async getRelayerManager(type: RelayerManagerType): Promise<WebbRelayerManager> {
    const relayers = Object.keys(this.capabilities).map((endpoint) => {
      return new WebbRelayer(endpoint, this.capabilities[endpoint]);
    });

    switch (type) {
      case 'evm':
        return new Web3RelayerManager(relayers, this.appConfig);
      case 'substrate':
        return new PolkadotRelayerManager(relayers, this.appConfig);
    }
  }
}
