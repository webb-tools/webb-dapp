import { AppConfig, ChainType, EVMChainId, InternalChainId, WebbCurrencyId } from '@webb-dapp/api-providers';
import ArbitrumLogo from '@webb-dapp/apps/configs/logos/chains/ArbitrumLogo';
import GanacheLogo from '@webb-dapp/apps/configs/logos/chains/GanacheLogo';
import OptimismLogo from '@webb-dapp/apps/configs/logos/chains/OptimismLogo';
import PolygonLogo from '@webb-dapp/apps/configs/logos/chains/PolygonLogo';
import EtherLogo from '@webb-dapp/apps/configs/logos/Eth';

export const getSupportedCurrenciesOfChain = (chainId: InternalChainId): WebbCurrencyId[] => {
  return chainsConfig[chainId].currencies;
};

export const chainsConfig: AppConfig['chains'] = {
  [InternalChainId.Rinkeby]: {
    chainType: ChainType.EVM,
    group: 'eth',
    id: InternalChainId.Rinkeby,
    chainId: EVMChainId.Rinkeby,
    name: 'Rinkeby',
    url: 'https://rinkeby.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4',
    evmRpcUrls: ['https://rinkeby.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4'],
    blockExplorerStub: 'https://rinkeby.etherscan.io',
    logo: EtherLogo,
    tag: 'test',
    currencies: [WebbCurrencyId.ETH, WebbCurrencyId.WETH, WebbCurrencyId.webbWETH],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
  [InternalChainId.Ropsten]: {
    chainType: ChainType.EVM,
    group: 'eth',
    id: InternalChainId.Ropsten,
    chainId: EVMChainId.Ropsten,
    name: 'Ropsten',
    url: 'https://ropsten.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4',
    evmRpcUrls: ['https://ropsten.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4'],
    blockExplorerStub: 'https://ropsten.etherscan.io',
    logo: EtherLogo,
    tag: 'test',
    currencies: [WebbCurrencyId.ETH, WebbCurrencyId.WETH, WebbCurrencyId.webbWETH],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
  [InternalChainId.Goerli]: {
    chainType: ChainType.EVM,
    group: 'eth',
    id: InternalChainId.Goerli,
    chainId: EVMChainId.Goerli,
    name: 'Goerli',
    url: 'https://goerli.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4',
    evmRpcUrls: ['https://goerli.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4'],
    blockExplorerStub: 'https://goerli.etherscan.io',
    logo: EtherLogo,
    tag: 'test',
    currencies: [WebbCurrencyId.ETH, WebbCurrencyId.WETH, WebbCurrencyId.webbWETH],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
  [InternalChainId.OptimismTestnet]: {
    chainType: ChainType.EVM,
    group: 'eth',
    id: InternalChainId.OptimismTestnet,
    chainId: EVMChainId.OptimismTestnet,
    name: 'Optimism Testnet',
    url: 'https://kovan.optimism.io',
    evmRpcUrls: ['https://kovan.optimism.io'],
    blockExplorerStub: 'https://kovan-optimistic.etherscan.io',
    logo: OptimismLogo,
    tag: 'test',
    currencies: [WebbCurrencyId.ETH, WebbCurrencyId.WETH, WebbCurrencyId.webbWETH],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
  [InternalChainId.ArbitrumTestnet]: {
    chainType: ChainType.EVM,
    group: 'eth',
    id: InternalChainId.ArbitrumTestnet,
    chainId: EVMChainId.ArbitrumTestnet,
    name: 'Arbitrum Testnet',
    url: 'https://rinkeby.arbitrum.io/rpc',
    evmRpcUrls: ['https://rinkeby.arbitrum.io/rpc'],
    blockExplorerStub: 'https://testnet.arbiscan.io',
    logo: ArbitrumLogo,
    tag: 'test',
    currencies: [WebbCurrencyId.ETH, WebbCurrencyId.WETH, WebbCurrencyId.webbWETH],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
  [InternalChainId.PolygonTestnet]: {
    chainType: ChainType.EVM,
    group: 'matic',
    id: InternalChainId.PolygonTestnet,
    chainId: EVMChainId.PolygonTestnet,
    name: 'Polygon Testnet',
    tag: 'test',
    url: 'https://rpc-mumbai.maticvigil.com/',
    evmRpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    blockExplorerStub: 'https://mumbai.polygonscan.com/',
    logo: PolygonLogo,
    currencies: [WebbCurrencyId.MATIC, WebbCurrencyId.WETH, WebbCurrencyId.webbWETH],
    nativeCurrencyId: WebbCurrencyId.MATIC,
  },
  [InternalChainId.HermesLocalnet]: {
    chainType: ChainType.EVM,
    group: 'eth',
    id: InternalChainId.HermesLocalnet,
    chainId: EVMChainId.HermesLocalnet,
    name: 'Hermes Localnet',
    tag: 'dev',
    url: 'http://127.0.0.1:5001',
    evmRpcUrls: ['http://127.0.0.1:5001'],
    logo: GanacheLogo,
    currencies: [WebbCurrencyId.webbDEV, WebbCurrencyId.DEV, WebbCurrencyId.ETH],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
  [InternalChainId.AthenaLocalnet]: {
    chainType: ChainType.EVM,
    group: 'eth',
    id: InternalChainId.AthenaLocalnet,
    chainId: EVMChainId.AthenaLocalnet,
    name: 'Athena Localnet',
    tag: 'dev',
    url: 'http://127.0.0.1:5002',
    evmRpcUrls: ['http://127.0.0.1:5002'],
    logo: GanacheLogo,
    currencies: [WebbCurrencyId.webbDEV, WebbCurrencyId.DEV, WebbCurrencyId.ETH],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
  [InternalChainId.DemeterLocalnet]: {
    chainType: ChainType.EVM,
    group: 'eth',
    id: InternalChainId.DemeterLocalnet,
    chainId: EVMChainId.DemeterLocalnet,
    name: 'Demeter Localnet',
    tag: 'dev',
    url: 'http://127.0.0.1:5003',
    evmRpcUrls: ['http://127.0.0.1:5003'],
    logo: GanacheLogo,
    currencies: [WebbCurrencyId.webbDEV, WebbCurrencyId.DEV, WebbCurrencyId.ETH],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
};
