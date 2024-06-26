import { TANGLE_TESTNET_NATIVE_TOKEN_SYMBOL } from '@webb-tools/dapp-config/constants/tangle';
import {
  Network,
  NetworkId,
} from '@webb-tools/webb-ui-components/constants/networks';

const createCustomNetwork = (customRpcEndpoint: string): Network => ({
  id: NetworkId.CUSTOM,
  name: 'Custom network',
  // Default to testnet symbol for all custom networks
  tokenSymbol: TANGLE_TESTNET_NATIVE_TOKEN_SYMBOL,
  nodeType: 'standalone',
  wsRpcEndpoint: customRpcEndpoint,
  polkadotExplorerUrl: `https://polkadot.js.org/apps/?rpc=${customRpcEndpoint}#/explorer`,
  // TODO: Use a generic EVM block explorer that supports passing in an RPC url. For now, this isn't a priority since this is the case only for the local development network, and this URL is only used for convenience.
  evmExplorerUrl: `https://polkadot.js.org/apps/?rpc=${customRpcEndpoint}#/explorer`,
});

export default createCustomNetwork;
