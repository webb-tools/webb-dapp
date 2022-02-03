/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, BigNumberish, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Bridge, BridgeInterface } from '../Bridge';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'chainID',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'initialRelayers',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'initialRelayerThreshold',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'destinationChainID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'resourceID',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'originChainID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'enum Bridge.ProposalStatus',
        name: 'status',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'dataHash',
        type: 'bytes32',
      },
    ],
    name: 'ProposalEvent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'originChainID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'enum Bridge.ProposalStatus',
        name: 'status',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'dataHash',
        type: 'bytes32',
      },
    ],
    name: 'ProposalVote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'relayer',
        type: 'address',
      },
    ],
    name: 'RelayerAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'relayer',
        type: 'address',
      },
    ],
    name: 'RelayerRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newThreshold',
        type: 'uint256',
      },
    ],
    name: 'RelayerThresholdChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_RELAYERS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'RELAYER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_chainID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: '_counts',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_expiry',
    outputs: [
      {
        internalType: 'uint40',
        name: '',
        type: 'uint40',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_fee',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint72',
        name: 'destNonce',
        type: 'uint72',
      },
      {
        internalType: 'bytes32',
        name: 'dataHash',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'relayer',
        type: 'address',
      },
    ],
    name: '_hasVotedOnProposal',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_relayerThreshold',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: '_resourceIDToHandlerAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_totalRelayers',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'relayerAddress',
        type: 'address',
      },
    ],
    name: 'adminAddRelayer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newFee',
        type: 'uint256',
      },
    ],
    name: 'adminChangeFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newThreshold',
        type: 'uint256',
      },
    ],
    name: 'adminChangeRelayerThreshold',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'adminPauseTransfers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'relayerAddress',
        type: 'address',
      },
    ],
    name: 'adminRemoveRelayer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'handlerAddress',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'resourceID',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'executionContextAddress',
        type: 'address',
      },
    ],
    name: 'adminSetResource',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'adminUnpauseTransfers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'chainID',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
      {
        internalType: 'bytes32',
        name: 'dataHash',
        type: 'bytes32',
      },
    ],
    name: 'cancelProposal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'chainID',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes32',
        name: 'resourceID',
        type: 'bytes32',
      },
    ],
    name: 'executeProposal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'originChainID',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
      {
        internalType: 'bytes32',
        name: 'dataHash',
        type: 'bytes32',
      },
    ],
    name: 'getProposal',
    outputs: [
      {
        components: [
          {
            internalType: 'enum Bridge.ProposalStatus',
            name: '_status',
            type: 'uint8',
          },
          {
            internalType: 'uint200',
            name: '_yesVotes',
            type: 'uint200',
          },
          {
            internalType: 'uint8',
            name: '_yesVotesTotal',
            type: 'uint8',
          },
          {
            internalType: 'uint40',
            name: '_proposedBlock',
            type: 'uint40',
          },
        ],
        internalType: 'struct Bridge.Proposal',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getRoleMember',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleMemberCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getRoleMemberIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'relayer',
        type: 'address',
      },
    ],
    name: 'isRelayer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'renounceAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable[]',
        name: 'addrs',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
    ],
    name: 'transferFunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'chainID',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
      {
        internalType: 'bytes32',
        name: 'resourceID',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'dataHash',
        type: 'bytes32',
      },
    ],
    name: 'voteProposal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620027f8380380620027f8833981016040819052620000349162000458565b6000805460ff1916905560028590556200005a8362000176602090811b620015f517901c565b600360006101000a81548160ff021916908360ff1602179055506200008a82620001d360201b6200164c1760201c565b600360016101000a8154816001600160801b0302191690836001600160801b03160217905550620000c6816200022a60201b620016a11760201c565b6003805464ffffffffff92909216600160881b0264ffffffffff60881b19909216919091179055620000fa60003362000283565b60005b84518110156200016a57620001557fe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc486838151811062000141576200014162000582565b60200260200101516200029360201b60201c565b80620001618162000558565b915050620000fd565b505050505050620005ae565b60006101008210620001cf5760405162461bcd60e51b815260206004820152601c60248201527f76616c756520646f6573206e6f742066697420696e203820626974730000000060448201526064015b60405180910390fd5b5090565b6000600160801b8210620001cf5760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e20313238206269747300006044820152606401620001c6565b6000650100000000008210620001cf5760405162461bcd60e51b815260206004820152601d60248201527f76616c756520646f6573206e6f742066697420696e20343020626974730000006044820152606401620001c6565b6200028f828262000317565b5050565b600082815260016020526040902060020154620002b1903362000380565b620002835760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526e0818591b5a5b881d1bc819dc985b9d608a1b6064820152608401620001c6565b60008281526001602090815260409091206200033e918390620016f8620003af821b17901c565b156200028f5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526001602090815260408220620003a69184906200170d620003c6821b17901c565b90505b92915050565b6000620003a6836001600160a01b038416620003e9565b6001600160a01b03811660009081526001830160205260408120541515620003a6565b60008181526001830160205260408120546200043257508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620003a9565b506000620003a9565b80516001600160a01b03811681146200045357600080fd5b919050565b600080600080600060a086880312156200047157600080fd5b8551602080880151919650906001600160401b03808211156200049357600080fd5b818901915089601f830112620004a857600080fd5b815181811115620004bd57620004bd62000598565b8060051b604051601f19603f83011681018181108582111715620004e557620004e562000598565b604052828152858101935084860182860187018e10156200050557600080fd5b600095505b8386101562000533576200051e816200043b565b8552600195909501949386019386016200050a565b5060408c015160608d01516080909d01519b9e919d509b9a9950975050505050505050565b60006000198214156200057b57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61223a80620005be6000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063926d7d7f1161011a578063c5ec8970116100ad578063d547741f1161007c578063d547741f1461049e578063d75a0683146104b1578063d7a9cd79146104f4578063dfef9a5314610513578063ffaac0eb1461052657600080fd5b8063c5ec897014610437578063ca15c87314610465578063cb10f21514610478578063cdb0f73a1461048b57600080fd5b8063a06fa09b116100e9578063a06fa09b146103e3578063a217fddf146103f6578063beab7131146103fe578063c5b37c221461040757600080fd5b8063926d7d7f146103935780639b303d7a146103a85780639d82dd63146103c85780639debb3bd146103db57600080fd5b80635e1fab0f1161019d57806380ae1c281161016c57806380ae1c281461031157806384db809f146103195780639010d07c1461035a57806391c404ac1461036d57806391d148541461038057600080fd5b80635e1fab0f146102d0578063709940e6146102e35780637febe63f146102f6578063802aabe81461030957600080fd5b80634e056005116101d95780634e0560051461027c5780634e0df3f61461028f578063541d5548146102a25780635c975abb146102c557600080fd5b8063248a9ca31461020b5780632f2ff15d1461024157806336568abe146102565780634603ae3814610269575b600080fd5b61022e610219366004611e1a565b60009081526001602052604090206002015490565b6040519081526020015b60405180910390f35b61025461024f366004611e33565b61052e565b005b610254610264366004611e33565b6105c1565b610254610277366004611dae565b61063b565b61025461028a366004611e1a565b6106df565b61022e61029d366004611e33565b61073b565b6102b56102b0366004611d4f565b610767565b6040519015158152602001610238565b60005460ff166102b5565b6102546102de366004611d4f565b610781565b6102546102f1366004611e85565b6107fb565b6102b5610304366004611f84565b610a90565b61022e610b34565b610254610b52565b610342610327366004611e1a565b6005602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610238565b610342610368366004611e63565b610b64565b61025461037b366004611e1a565b610b83565b6102b561038e366004611e33565b610c1d565b61022e6000805160206121c583398151915281565b6103bb6103b6366004611e85565b610c35565b6040516102389190612089565b6102546103d6366004611d4f565b610d03565b61022e60c881565b6102546103f1366004611eba565b610db8565b61022e600081565b61022e60025481565b60035461041f9061010090046001600160801b031681565b6040516001600160801b039091168152602001610238565b60035461044f90600160881b900464ffffffffff1681565b60405164ffffffffff9091168152602001610238565b61022e610473366004611e1a565b611219565b610254610486366004611d6c565b611230565b610254610499366004611d4f565b6112c4565b6102546104ac366004611e33565b6113ca565b6104db6104bf366004611e1a565b60046020526000908152604090205467ffffffffffffffff1681565b60405167ffffffffffffffff9091168152602001610238565b6003546105019060ff1681565b60405160ff9091168152602001610238565b610254610521366004611ef5565b61144b565b6102546115e5565b60008281526001602052604090206002015461054a9033610c1d565b6105b35760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526e0818591b5a5b881d1bc819dc985b9d608a1b60648201526084015b60405180910390fd5b6105bd828261172f565b5050565b6001600160a01b03811633146106315760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105aa565b6105bd8282611788565b6106436117e1565b60005b838110156106d85784848281811061066057610660612199565b90506020020160208101906106759190611d4f565b6001600160a01b03166108fc84848481811061069357610693612199565b905060200201359081150290604051600060405180830381858888f193505050501580156106c5573d6000803e3d6000fd5b50806106d08161211c565b915050610646565b5050505050565b6106e76117e1565b6106f0816115f5565b6003805460ff191660ff929092169190911790556040518181527fa20d6b84cd798a24038be305eff8a45ca82ef54a2aa2082005d8e14c0a4746c8906020015b60405180910390a150565b60008281526001602081815260408084206001600160a01b038616855290920190529020545b92915050565b60006107616000805160206121c583398151915283610c1d565b6107896117e1565b336001600160a01b03821614156107e25760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f742072656e6f756e6365206f6e6573656c6600000000000000000060448201526064016105aa565b6107ed60008261052e565b6107f86000336105c1565b50565b610803611838565b600882901b68ffffffffffffffff00166001600160481b03841681176000908152600660209081526040808320858452909152808220815160808101909252805493871793829060ff16600481111561085e5761085e61216d565b600481111561086f5761086f61216d565b8152905461010081046001600160c81b03166020830152600160d01b810460ff166040830152600160d81b900464ffffffffff16606090910152805190915060018160048111156108c2576108c261216d565b14806108df575060028160048111156108dd576108dd61216d565b145b61092b5760405162461bcd60e51b815260206004820152601c60248201527f50726f706f73616c2063616e6e6f742062652063616e63656c6c65640000000060448201526064016105aa565b600354606083015164ffffffffff600160881b909204821691610950914391166118ad565b64ffffffffff16116109a45760405162461bcd60e51b815260206004820181905260248201527f50726f706f73616c206e6f7420617420657870697279207468726573686f6c6460448201526064016105aa565b60048083526001600160481b03841660009081526006602090815260408083208884529091529020835181548593839160ff19169060019084908111156109ed576109ed61216d565b02179055506020820151815460408085015160609095015164ffffffffff16600160d81b026001600160d81b0360ff909616600160d01b0260ff60d01b196001600160c81b039095166101000294909416610100600160d81b0319909316929092179290921793909316929092179055516000805160206121e583398151915290610a80908890889060049089906120d2565b60405180910390a1505050505050565b6001600160481b03831660009081526006602090815260408083208584529091528082208151608081019092528054610b2c929190829060ff166004811115610adb57610adb61216d565b6004811115610aec57610aec61216d565b8152905461010081046001600160c81b03166020830152600160d01b810460ff166040830152600160d81b900464ffffffffff16606090910152836118ef565b949350505050565b6000610b4d6000805160206121c5833981519152611219565b905090565b610b5a6117e1565b610b62611912565b565b6000828152600160205260408120610b7c908361195d565b9392505050565b610b8b6117e1565b60035461010090046001600160801b0316811415610beb5760405162461bcd60e51b815260206004820152601f60248201527f43757272656e742066656520697320657175616c20746f206e6577206665650060448201526064016105aa565b610bf48161164c565b600360016101000a8154816001600160801b0302191690836001600160801b0316021790555050565b6000828152600160205260408120610b7c908361170d565b60408051608080820183526000808352602080840182905283850182905260608401829052600887901b68ffffffffffffffff00166001600160481b03891681178352600682528583208784529091529084902084519283019094528354929390871792829060ff166004811115610caf57610caf61216d565b6004811115610cc057610cc061216d565b8152905461010081046001600160c81b03166020830152600160d01b810460ff166040830152600160d81b900464ffffffffff1660609091015295945050505050565b610d1b6000805160206121c583398151915282610c1d565b610d675760405162461bcd60e51b815260206004820152601f60248201527f6164647220646f65736e277420686176652072656c6179657220726f6c65210060448201526064016105aa565b610d7f6000805160206121c5833981519152826113ca565b6040516001600160a01b03821681527f10e1f7ce9fd7d1b90a66d13a2ab3cb8dd7f29f3f8d520b143b063ccfbab6906b90602001610730565b610dc0611969565b610dc86119cd565b600883901b68ffffffffffffffff00166001600160481b03851681176000908152600660209081526040808320858452909152808220815160808101909252805493881793829060ff166004811115610e2357610e2361216d565b6004811115610e3457610e3461216d565b8152905461010081046001600160c81b0316602080840191909152600160d01b820460ff16604080850191909152600160d81b90920464ffffffffff16606090930192909252600087815260059092529020549091506001600160a01b0316610edf5760405162461bcd60e51b815260206004820152601960248201527f6e6f2068616e646c657220666f72207265736f7572636549440000000000000060448201526064016105aa565b80516001906004811115610ef557610ef561216d565b1115610f565760405162461bcd60e51b815260206004820152602a60248201527f70726f706f73616c20616c7265616479207061737365642f65786563757465646044820152690bd8d85b98d95b1b195960b21b60648201526084016105aa565b610f6081336118ef565b15610fa55760405162461bcd60e51b81526020600482015260156024820152741c995b185e595c88185b1c9958591e481d9bdd1959605a1b60448201526064016105aa565b600081516004811115610fba57610fba61216d565b141561101b57506040805160808101825260018082526000602083018190528284015264ffffffffff43166060830152915190916000805160206121e58339815191529161100e91899189919088906120d2565b60405180910390a161107d565b600354606082015164ffffffffff600160881b909204821691611040914391166118ad565b64ffffffffff16111561107d5760048082526040516000805160206121e583398151915291611074918991899188906120d2565b60405180910390a15b6004815160048111156110925761109261216d565b1461115d576110b76110a333611a13565b82602001516001600160c81b031617611a41565b6001600160c81b03166020820152604081018051906110d582612137565b60ff1690525080516040517f9bce7387b7d9942d29cffae8898ffe045a4b66dc7b0a6fa81606e41772ed12a991611111918991899188906120d2565b60405180910390a1600354604082015160ff91821691161061115d5760028082526040516000805160206121e583398151915291611154918991899188906120d2565b60405180910390a15b6001600160481b038216600090815260066020908152604080832086845290915290208151815483929190829060ff191660018360048111156111a2576111a261216d565b021790555060208201518154604084015160609094015164ffffffffff16600160d81b026001600160d81b0360ff909516600160d01b0260ff60d01b196001600160c81b039094166101000293909316610100600160d81b0319909216919091179190911792909216919091179055505050505050565b600081815260016020526040812061076190611a96565b6112386117e1565b6000828152600560205260409081902080546001600160a01b0319166001600160a01b038681169182179092559151635c7d1b9b60e11b815260048101859052908316602482015284919063b8fa373690604401600060405180830381600087803b1580156112a657600080fd5b505af11580156112ba573d6000803e3d6000fd5b5050505050505050565b6112dc6000805160206121c583398151915282610c1d565b156113295760405162461bcd60e51b815260206004820152601e60248201527f6164647220616c7265616479206861732072656c6179657220726f6c6521000060448201526064016105aa565b60c8611333610b34565b106113795760405162461bcd60e51b81526020600482015260166024820152751c995b185e595c9cc81b1a5b5a5d081c995858da195960521b60448201526064016105aa565b6113916000805160206121c58339815191528261052e565b6040516001600160a01b03821681527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c590602001610730565b6000828152600160205260409020600201546113e69033610c1d565b6106315760405162461bcd60e51b815260206004820152603060248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526f2061646d696e20746f207265766f6b6560801b60648201526084016105aa565b611453611969565b61145b6119cd565b60008181526005602090815260408083205490516001600160a01b039091169268ffffffffffffffff00600889901b1689179290916114a09185918991899101611fd2565b60408051601f1981840301815291815281516020928301206001600160481b03851660009081526006845282812082825290935291209091506002815460ff1660048111156114f1576114f161216d565b1461153e5760405162461bcd60e51b815260206004820181905260248201527f50726f706f73616c206d7573742068617665205061737365642073746174757360448201526064016105aa565b805460ff1916600317815560405163712467f960e11b815284906001600160a01b0382169063e248cff29061157b9089908c908c90600401611ffe565b600060405180830381600087803b15801561159557600080fd5b505af11580156115a9573d6000803e3d6000fd5b505050506000805160206121e58339815191528a8a6003866040516115d194939291906120d2565b60405180910390a150505050505050505050565b6115ed6117e1565b610b62611aa0565b600061010082106116485760405162461bcd60e51b815260206004820152601c60248201527f76616c756520646f6573206e6f742066697420696e203820626974730000000060448201526064016105aa565b5090565b6000600160801b82106116485760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e203132382062697473000060448201526064016105aa565b60006501000000000082106116485760405162461bcd60e51b815260206004820152601d60248201527f76616c756520646f6573206e6f742066697420696e203430206269747300000060448201526064016105aa565b6000610b7c836001600160a01b038416611ae2565b6001600160a01b03811660009081526001830160205260408120541515610b7c565b600082815260016020526040902061174790826116f8565b156105bd5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526001602052604090206117a09082611b31565b156105bd5760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b6117ec600033610c1d565b610b625760405162461bcd60e51b815260206004820152601e60248201527f73656e64657220646f65736e277420686176652061646d696e20726f6c65000060448201526064016105aa565b611843600033610c1d565b8061186157506118616000805160206121c583398151915233610c1d565b610b625760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206973206e6f742072656c61796572206f722061646d696e000060448201526064016105aa565b6000610b7c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611b46565b60008083602001516001600160c81b031661190984611a13565b16119392505050565b61191a6119cd565b6000805460ff191660011790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258906020015b60405180910390a1565b6000610b7c8383611b80565b6119816000805160206121c583398151915233610c1d565b610b625760405162461bcd60e51b815260206004820181905260248201527f73656e64657220646f65736e277420686176652072656c6179657220726f6c6560448201526064016105aa565b60005460ff1615610b625760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016105aa565b6000611a37611a306000805160206121c58339815191528461073b565b60016118ad565b6001901b92915050565b6000600160c81b82106116485760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e203230302062697473000060448201526064016105aa565b6000610761825490565b611aa8611baa565b6000805460ff191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa90602001611953565b6000818152600183016020526040812054611b2957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610761565b506000610761565b6000610b7c836001600160a01b038416611bf3565b60008184841115611b6a5760405162461bcd60e51b81526004016105aa9190612034565b506000611b778486612105565b95945050505050565b6000826000018281548110611b9757611b97612199565b9060005260206000200154905092915050565b60005460ff16610b625760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016105aa565b60008181526001830160205260408120548015611cdc576000611c17600183612105565b8554909150600090611c2b90600190612105565b9050818114611c90576000866000018281548110611c4b57611c4b612199565b9060005260206000200154905080876000018481548110611c6e57611c6e612199565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611ca157611ca1612183565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610761565b6000915050610761565b60008083601f840112611cf857600080fd5b50813567ffffffffffffffff811115611d1057600080fd5b6020830191508360208260051b8501011115611d2b57600080fd5b9250929050565b803567ffffffffffffffff81168114611d4a57600080fd5b919050565b600060208284031215611d6157600080fd5b8135610b7c816121af565b600080600060608486031215611d8157600080fd5b8335611d8c816121af565b9250602084013591506040840135611da3816121af565b809150509250925092565b60008060008060408587031215611dc457600080fd5b843567ffffffffffffffff80821115611ddc57600080fd5b611de888838901611ce6565b90965094506020870135915080821115611e0157600080fd5b50611e0e87828801611ce6565b95989497509550505050565b600060208284031215611e2c57600080fd5b5035919050565b60008060408385031215611e4657600080fd5b823591506020830135611e58816121af565b809150509250929050565b60008060408385031215611e7657600080fd5b50508035926020909101359150565b600080600060608486031215611e9a57600080fd5b83359250611eaa60208501611d32565b9150604084013590509250925092565b60008060008060808587031215611ed057600080fd5b84359350611ee060208601611d32565b93969395505050506040820135916060013590565b600080600080600060808688031215611f0d57600080fd5b85359450611f1d60208701611d32565b9350604086013567ffffffffffffffff80821115611f3a57600080fd5b818801915088601f830112611f4e57600080fd5b813581811115611f5d57600080fd5b896020828501011115611f6f57600080fd5b96999598505060200195606001359392505050565b600080600060608486031215611f9957600080fd5b83356001600160481b0381168114611d8c57600080fd5b60058110611fce57634e487b7160e01b600052602160045260246000fd5b9052565b6bffffffffffffffffffffffff198460601b168152818360148301376000910160140190815292915050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b600060208083528351808285015260005b8181101561206157858101830151858201604001528201612045565b81811115612073576000604083870101525b50601f01601f1916929092016040019392505050565b600060808201905061209c828451611fb0565b60018060c81b03602084015116602083015260ff604084015116604083015264ffffffffff606084015116606083015292915050565b84815267ffffffffffffffff84166020820152608081016120f66040830185611fb0565b82606083015295945050505050565b60008282101561211757612117612157565b500390565b600060001982141561213057612130612157565b5060010190565b600060ff821660ff81141561214e5761214e612157565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03811681146107f857600080fdfee2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc44cb7956f27653ed00ab0902269b3f51178752f9eb2b4ec82146afdddc5a0d41ca2646970667358221220b23439b208dff4997c9173cdf2dda8de949c01317b346c547b3ee0ea3e37cec964736f6c63430008050033';

export class Bridge__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    chainID: BigNumberish,
    initialRelayers: string[],
    initialRelayerThreshold: BigNumberish,
    fee: BigNumberish,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Bridge> {
    return super.deploy(
      chainID,
      initialRelayers,
      initialRelayerThreshold,
      fee,
      expiry,
      overrides || {}
    ) as Promise<Bridge>;
  }
  getDeployTransaction(
    chainID: BigNumberish,
    initialRelayers: string[],
    initialRelayerThreshold: BigNumberish,
    fee: BigNumberish,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(chainID, initialRelayers, initialRelayerThreshold, fee, expiry, overrides || {});
  }
  attach(address: string): Bridge {
    return super.attach(address) as Bridge;
  }
  connect(signer: Signer): Bridge__factory {
    return super.connect(signer) as Bridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeInterface {
    return new utils.Interface(_abi) as BridgeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bridge {
    return new Contract(address, _abi, signerOrProvider) as Bridge;
  }
}
