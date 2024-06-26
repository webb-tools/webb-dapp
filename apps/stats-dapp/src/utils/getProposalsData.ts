import { ProposalType } from '../generated/graphql';
import {
  AnchorUpdateProposal,
  EVMProposal,
  FeeRecipientUpdateProposal,
  MaxDepositLimitProposal,
  MinWithdrawalLimitProposal,
  RefreshProposal,
  RescueTokensProposal,
  ResourceIdUpdateProposal,
  SetTreasuryHandlerProposal,
  SetVerifierProposal,
  TokenAddProposal,
  TokenRemoveProposal,
  WrappingFeeUpdateProposal,
} from '@webb-tools/proposals';
import { hexToU8a, u8aToHex } from '@polkadot/util';
import { ChainType, calculateTypedChainId } from '@webb-tools/sdk-core';
import { chainsConfig } from '@webb-tools/dapp-config';

export function getProposalsData(
  propType: ProposalType,
  data: string,
): Record<string, string | Record<string, any>> {
  if (!data) return { data: '' };

  const bytes = hexToU8a(data);

  switch (propType) {
    case ProposalType.AnchorUpdate: {
      const decoded = AnchorUpdateProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        merkleRoot: decoded.merkleRoot,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    case ProposalType.Evm: {
      const decoded = EVMProposal.fromBytes(bytes);
      return {
        merkleRoot: String(decoded.nonce),
        chainId: String(decoded.chainId),
        tx: { ...decoded.tx },
      };
    }
    case ProposalType.FeeRecipientUpdate: {
      const decoded = FeeRecipientUpdateProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        newFeeRecipient: decoded.newFeeRecipient,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    case ProposalType.MaxDepositLimitUpdate: {
      const decoded = MaxDepositLimitProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        maxDepositLimitBytes: decoded.maxDepositLimitBytes,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    case ProposalType.MinWithdrawalLimitUpdate: {
      const decoded = MinWithdrawalLimitProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        minWithdrawalLimitBytes: decoded.minWithdrawalLimitBytes,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    case ProposalType.Refresh: {
      const decoded = RefreshProposal.fromBytes(bytes);
      return {
        nonce: String(decoded.nonce),
        publicKey: String(decoded.publicKey),
      };
    }
    case ProposalType.RescueTokens: {
      const decoded = RescueTokensProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        toAddress: decoded.toAddress,
        tokenAddress: decoded.tokenAddress,
        amount: decoded.amount,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    case ProposalType.ResourceIdUpdate: {
      const decoded = ResourceIdUpdateProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        handlerAddress: decoded.handlerAddress,
        newResourceId: decoded.newResourceId,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    case ProposalType.SetTreasuryHandler: {
      const decoded = SetTreasuryHandlerProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        newTreasuryHandler: decoded.newTreasuryHandler,
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
      };
    }
    case ProposalType.SetVerifier: {
      const decoded = SetVerifierProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        newVerifier: decoded.newVerifier,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    case ProposalType.TokenAdd: {
      const decoded = TokenAddProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        newTokenAddress: decoded.newTokenAddress,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    case ProposalType.TokenRemove: {
      const decoded = TokenRemoveProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        removeTokenAddress: decoded.removeTokenAddress,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    case ProposalType.WrappingFeeUpdate: {
      const decoded = WrappingFeeUpdateProposal.fromBytes(bytes);

      const chainName = getChainName(
        decoded.header.resourceId.chainType,
        decoded.header.resourceId.chainId,
      );

      return {
        newFee: decoded.newFee,
        functionSignature: u8aToHex(decoded.header.functionSignature),
        nonce: String(decoded.header.nonce),
        chainName: chainName,
        chainType: String(decoded.header.resourceId.chainType),
        chainId: String(decoded.header.resourceId.chainId),
        targetSystem: u8aToHex(decoded.header.resourceId.targetSystem),
      };
    }
    default: {
      return { data };
    }
  }
}

const getChainName = (chainType: ChainType, chainId: number) => {
  const chainTypedChainId = calculateTypedChainId(chainType, chainId);

  const chain = chainsConfig[chainTypedChainId];

  return chain.name;
};
