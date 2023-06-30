import { PresetTypedChainId } from '@webb-tools/dapp-types';

// 0x38e7aa90c77f86747fab355eecaa0c2e4c3a463d - webbAlpha - mocked backend
// 0x34E2a2686B8a8FD62ee1FB2865be67bAB75b21dD - webbtTNT - DKG backend

// Substrate chains are only contain treeId

export const anchorDeploymentBlock: Record<number, Record<string, number>> = {
  // EVM
  [PresetTypedChainId.ArbitrumTestnet]: {
    '0x38e7aa90c77f86747fab355eecaa0c2e4c3a463d': 13062856,
  },
  [PresetTypedChainId.Goerli]: {
    '0x38e7aa90c77f86747fab355eecaa0c2e4c3a463d': 8703495,
  },
  [PresetTypedChainId.Sepolia]: {
    '0x38e7aa90c77f86747fab355eecaa0c2e4c3a463d': 3146553,
  },
  [PresetTypedChainId.PolygonTestnet]: {
    '0x38e7aa90c77f86747fab355eecaa0c2e4c3a463d': 33462722,
  },
  [PresetTypedChainId.MoonbaseAlpha]: {
    '0x38e7aa90c77f86747fab355eecaa0c2e4c3a463d': 3996742,
  },
  [PresetTypedChainId.AvalancheFuji]: {
    '0x38e7aa90c77f86747fab355eecaa0c2e4c3a463d': 20151492,
  },
  [PresetTypedChainId.ScrollAlpha]: {
    '0x38e7aa90c77f86747fab355eecaa0c2e4c3a463d': 666098,
  },

  [PresetTypedChainId.HermesOrbit]: {
    '0xba730ee516fc52Ab35f001faa3114eeBd48eeCB8': 0,
  },
  [PresetTypedChainId.AthenaOrbit]: {
    '0xba730ee516fc52Ab35f001faa3114eeBd48eeCB8': 0,
  },
  [PresetTypedChainId.DemeterOrbit]: {
    '0xba730ee516fc52Ab35f001faa3114eeBd48eeCB8': 0,
  },

  [PresetTypedChainId.HermesLocalnet]: {
    '0xc705034ded85e817b9E56C977E61A2098362898B': 0,
  },
  [PresetTypedChainId.AthenaLocalnet]: {
    '0x91eB86019FD8D7c5a9E31143D422850A13F670A3': 0,
  },
  [PresetTypedChainId.DemeterLocalnet]: {
    '0x6595b34ED0a270B10a586FC1EA22030A95386f1e': 0,
  },

  // Substrate
  [PresetTypedChainId.LocalTangleStandalone]: {
    '1': NaN,
  },
};

export const parsedAnchorConfig = Object.keys(anchorDeploymentBlock).reduce(
  (acc, typedChainId) => {
    const addresses = Object.keys(anchorDeploymentBlock[+typedChainId]);
    if (addresses && addresses.length > 0) {
      acc[+typedChainId] = addresses;
    }
    return acc;
  },
  {} as Record<number, string[]>
);

export const getAnchorDeploymentBlockNumber = (
  chainIdType: number,
  contractAddress: string
): number | undefined => {
  return Object.entries(anchorDeploymentBlock[chainIdType]).find(
    (entry) => entry[0].toLowerCase() === contractAddress.toLowerCase()
  )?.[1];
};
