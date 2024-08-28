import { HexString } from '@polkadot/util/types';

/**
 * Development only. Sepolia testnet contracts that were
 * deployed to test the liquifier functionality. These contracts
 * use dummy data.
 */
export const SEPOLIA_TESTNET_CONTRACTS = {
  LIQUIFIER: '0x55D942dC55b8b3bEE51C964c4985C46C7DF98Be0',
  ERC20: '0x2eE951c2d215ba1b3E0DF20764c96a0bC7809F41',
  // Use the same address as the dummy ERC20 contract.
  TG_TOKEN: '0x2eE951c2d215ba1b3E0DF20764c96a0bC7809F41',
  UNLOCKS: '0x32d70bC73d0965209Cf175711b010dE6A7650c2B',
} as const satisfies Record<string, HexString>;
