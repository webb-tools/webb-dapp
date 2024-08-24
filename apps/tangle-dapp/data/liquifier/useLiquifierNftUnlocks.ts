import { assert, BN } from '@polkadot/util';
import { useCallback, useMemo } from 'react';
import { Address } from 'viem';

import { BaseUnstakeRequest } from '../../components/LiquidStaking/unstakeRequestsTable/UnstakeRequestsTable';
import LIQUIFIER_UNLOCKS_ABI from '../../constants/liquidStaking/liquifierUnlocksAbi';
import useEvmAddress20 from '../../hooks/useEvmAddress';
import getLsProtocolDef from '../../utils/liquidStaking/getLsProtocolDef';
import { useLiquidStakingStore } from '../liquidStaking/useLiquidStakingStore';
import useContractRead from './useContractRead';
import useContractReadBatch, {
  ContractReadOptionsBatch,
} from './useContractReadBatch';
import { ContractReadOptions } from './useContractReadOnce';

/**
 * Represents the metadata of an ERC-721 NFT liquifier unlock request.
 *
 * See: https://github.com/webb-tools/tnt-core/blob/21c158d6cb11e2b5f50409d377431e7cd51ff72f/src/lst/unlocks/Unlocks.sol#L21
 */
export type LiquifierUnlockNftMetadata = BaseUnstakeRequest & {
  type: 'liquifierUnlockNft';
  symbol: string;
  name: string;
  validator: Address;

  /**
   * How far the unlock request has progressed, in percentage (e.g.
   * `0.5` for 50%).
   */
  progress: number;

  /**
   * A timestamp representing the date at which the unlock request
   * can be fulfilled.
   */
  maturityTimestamp: number;
};

/**
 * Note that the `page` and `pageSize` fields are assumed to be
 * 1-indexed.
 */
export type PagingOptions = {
  page: number;
  pageSize: number;
};

/**
 * In the case of liquifier unlock requests, they are represented
 * by ERC-721 NFTs owned by the user.
 *
 * Each unlock NFT has associated metadata about the unlock request,
 * including the progress of the unlock request, the amount of underlying
 * stake tokens, and the maturity timestamp.
 *
 * @param paging The paging options for the unlock requests (1-based index).
 */
const useLiquifierNftUnlocks = (
  paging?: PagingOptions,
): LiquifierUnlockNftMetadata[] | null => {
  const { selectedProtocolId } = useLiquidStakingStore();
  const activeEvmAddress20 = useEvmAddress20();

  const protocol = getLsProtocolDef(selectedProtocolId);

  const getUnlockIdCountOptions = useCallback((): ContractReadOptions<
    typeof LIQUIFIER_UNLOCKS_ABI,
    'balanceOf'
  > | null => {
    if (activeEvmAddress20 === null || protocol.type !== 'erc20') {
      return null;
    }

    return {
      address: protocol.liquifierUnlocksAddress,
      functionName: 'balanceOf',
      args: [activeEvmAddress20],
    };
  }, [activeEvmAddress20, protocol]);

  const { value: rawUnlockIdCount } = useContractRead(
    LIQUIFIER_UNLOCKS_ABI,
    getUnlockIdCountOptions,
  );

  // Extract the paging options from the object, to prevent
  // possible issues due to unstable object references passed.
  const page = paging?.page;
  const pageSize = paging?.pageSize;

  const unlockIds = useMemo(() => {
    if (rawUnlockIdCount === null || rawUnlockIdCount instanceof Error) {
      return null;
    }

    // Extremely unlikely that the user would have this many unlock
    // requests, but just in case.
    assert(
      rawUnlockIdCount <= Number.MAX_SAFE_INTEGER,
      'Unlock ID count exceeds maximum safe integer, user seems to have an unreasonable amount of unlock requests',
    );

    const unlockIdCount = Number(rawUnlockIdCount);

    const from =
      page === undefined || pageSize === undefined ? 0 : (page - 1) * pageSize;

    const to =
      pageSize === undefined
        ? unlockIdCount
        : Math.min(from + pageSize, unlockIdCount);

    return Array.from<bigint>({
      length: to - from,
    }).map((_, i) => BigInt(i + from));
  }, [page, pageSize, rawUnlockIdCount]);

  const getMetadataOptions = useCallback((): ContractReadOptionsBatch<
    typeof LIQUIFIER_UNLOCKS_ABI,
    'getMetadata'
  > | null => {
    if (
      // Do not fetch if there's no active EVM account.
      activeEvmAddress20 === null ||
      protocol.type !== 'erc20' ||
      unlockIds === null
    ) {
      return null;
    }

    const batchArgs = unlockIds.map((unlockId) => [BigInt(unlockId)] as const);

    return {
      address: protocol.liquifierUnlocksAddress,
      functionName: 'getMetadata',
      args: batchArgs,
    };
  }, [activeEvmAddress20, protocol, unlockIds]);

  const { value: rawMetadatas } = useContractReadBatch(
    LIQUIFIER_UNLOCKS_ABI,
    getMetadataOptions,
  );

  const nftMetadatas = useMemo<LiquifierUnlockNftMetadata[] | null>(() => {
    if (rawMetadatas === null) {
      return null;
    }

    return rawMetadatas.flatMap((metadata) => {
      // Ignore failed metadata fetches and those that are still loading.
      if (metadata === null || metadata instanceof Error) {
        return [];
      }

      return {
        type: 'liquifierUnlockNft',
        decimals: protocol.decimals,
        unlockId: Number(metadata.unlockId),
        symbol: metadata.symbol,
        name: metadata.name,
        validator: metadata.validator,
        progress: Number(metadata.progress) / 100,
        amount: new BN(metadata.amount.toString()),
        maturityTimestamp: Number(metadata.maturity),
      } satisfies LiquifierUnlockNftMetadata;
    });
  }, [protocol.decimals, rawMetadatas]);

  return nftMetadatas;
};

export default useLiquifierNftUnlocks;
