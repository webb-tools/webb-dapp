/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { NativeAnchor } from './NativeAnchor';

export class NativeAnchorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _verifier: string,
    _hasher: string,
    _denomination: BigNumberish,
    _merkleTreeHeight: BigNumberish,
    overrides?: Overrides
  ): Promise<NativeAnchor> {
    return super.deploy(_verifier, _hasher, _denomination, _merkleTreeHeight, overrides || {}) as Promise<NativeAnchor>;
  }
  getDeployTransaction(
    _verifier: string,
    _hasher: string,
    _denomination: BigNumberish,
    _merkleTreeHeight: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_verifier, _hasher, _denomination, _merkleTreeHeight, overrides || {});
  }
  attach(address: string): NativeAnchor {
    return super.attach(address) as NativeAnchor;
  }
  connect(signer: Signer): NativeAnchorFactory {
    return super.connect(signer) as NativeAnchorFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NativeAnchor {
    return new Contract(address, _abi, signerOrProvider) as NativeAnchor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IVerifier',
        name: '_verifier',
        type: 'address',
      },
      {
        internalType: 'contract IHasher',
        name: '_hasher',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_denomination',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_merkleTreeHeight',
        type: 'uint32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'commitment',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'leafIndex',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
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
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'nullifierHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'relayer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'Withdrawal',
    type: 'event',
  },
  {
    inputs: [],
    name: 'FIELD_SIZE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'ROOT_HISTORY_SIZE',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'ZERO_VALUE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'commitments',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'currentRootIndex',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'denomination',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_commitment',
        type: 'bytes32',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'filledSubtrees',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'getLastRoot',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'contract IHasher',
        name: '_hasher',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_left',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_right',
        type: 'bytes32',
      },
    ],
    name: 'hashLeftRight',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'hasher',
    outputs: [
      {
        internalType: 'contract IHasher',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
    ],
    name: 'isKnownRoot',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_nullifierHash',
        type: 'bytes32',
      },
    ],
    name: 'isSpent',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: '_nullifierHashes',
        type: 'bytes32[]',
      },
    ],
    name: 'isSpentArray',
    outputs: [
      {
        internalType: 'bool[]',
        name: 'spent',
        type: 'bool[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'levels',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'nextIndex',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'nullifierHashes',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'roots',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'verifier',
    outputs: [
      {
        internalType: 'contract IVerifier',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_proof',
        type: 'bytes',
      },
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_nullifierHash',
        type: 'bytes32',
      },
      {
        internalType: 'address payable',
        name: '_recipient',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_relayer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_fee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_refund',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'i',
        type: 'uint256',
      },
    ],
    name: 'zeros',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
    constant: true,
  },
];

const _bytecode =
  '0x610100604052600280546001600160401b03191690553480156200002257600080fd5b506040516200235738038062002357833981810160405260808110156200004857600080fd5b508051602082015160408301516060909301519192909183838383808363ffffffff8216620000a95760405162461bcd60e51b8152600401808060200182810382526023815260200180620023346023913960400191505060405180910390fd5b60208263ffffffff161062000105576040805162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e2033320000604482015290519081900360640190fd5b6001600160e01b031960e083901b1660a0526001600160601b0319606082901b1660805260005b8263ffffffff168163ffffffff16101562000171576200015263ffffffff82166200021d565b63ffffffff82166000908152602081905260409020556001016200012c565b506200018763ffffffff6000198401166200021d565b60008052600160208190527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4991909155600355505081620001fa5760405162461bcd60e51b81526004018080602001828103825260258152602001806200230f6025913960400191505060405180910390fd5b5060609290921b6001600160601b03191660c0525060e05250620008ab92505050565b6000816200024d57507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c620008a6565b81600114156200027f57507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d620008a6565b8160021415620002b157507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c200620008a6565b8160031415620002e357507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb620008a6565b81600414156200031557507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c9620008a6565b81600514156200034757507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb54959620008a6565b81600614156200037957507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c620008a6565b8160071415620003ab57507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb4620008a6565b8160081415620003dd57507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff80620008a6565b81600914156200040e57507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c007620008a6565b81600a14156200044057507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e30620008a6565b81600b14156200047257507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e5620008a6565b81600c1415620004a457507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f620008a6565b81600d1415620004d657507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd620008a6565b81600e14156200050857507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb108620008a6565b81600f14156200053a57507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b6620008a6565b81601014156200056c57507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db61854620008a6565b81601114156200059e57507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea620008a6565b8160121415620005d057507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d620008a6565b81601314156200060257507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc05620008a6565b81601414156200063457507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d4620008a6565b81601514156200066657507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b2967620008a6565b81601614156200069857507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc3453620008a6565b8160171415620006ca57507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c48620008a6565b8160181415620006fc57507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd1620008a6565b81601914156200072e57507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c620008a6565b81601a14156200076057507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce99620008a6565b81601b14156200079257507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f354620008a6565b81601c1415620007c357507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d620008a6565b81601d1415620007f557507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f427620008a6565b81601e14156200082757507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb620008a6565b81601f14156200085957507f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc620008a6565b6040805162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e647300000000000000000000000000604482015290519081900360640190fd5b919050565b60805160601c60a05160e01c60c05160601c60e051611a026200090d600039806105b852806109c7528061150152806117f35250806106eb52806108e652508061091c528061165752806116c352508061142d528061174f5250611a026000f3fe60806040526004361061012a5760003560e01c80639fa12d0b116100ab578063e5285dcc1161006f578063e5285dcc14610487578063e8295588146104b1578063ec732959146104db578063ed33639f146104f0578063f178e47c14610505578063fc7e9c6f1461052f5761012a565b80639fa12d0b1461034b578063b214faa514610416578063ba70f75714610433578063c2b40ae414610448578063cd87a3b4146104725761012a565b80636d9833e3116100f25780636d9833e31461028e578063839df945146102b85780638bca6d16146102e25780638ea3099e146102f757806390eeb02b146103365761012a565b806317cc915c1461012f57806321a0adb61461016d5780632b7ac3f314610208578063414a37ba146102395780634ecf518b14610260575b600080fd5b34801561013b57600080fd5b506101596004803603602081101561015257600080fd5b5035610544565b604080519115158252519081900360200190f35b610206600480360360e081101561018357600080fd5b810190602081018135600160201b81111561019d57600080fd5b8201836020820111156101af57600080fd5b803590602001918460018302840111600160201b831117156101d057600080fd5b91935091508035906020810135906001600160a01b03604082013581169160608101359091169060808101359060a00135610559565b005b34801561021457600080fd5b5061021d6108e4565b604080516001600160a01b039092168252519081900360200190f35b34801561024557600080fd5b5061024e610908565b60408051918252519081900360200190f35b34801561026c57600080fd5b5061027561091a565b6040805163ffffffff9092168252519081900360200190f35b34801561029a57600080fd5b50610159600480360360208110156102b157600080fd5b503561093e565b3480156102c457600080fd5b50610159600480360360208110156102db57600080fd5b50356109b0565b3480156102ee57600080fd5b5061024e6109c5565b34801561030357600080fd5b5061024e6004803603606081101561031a57600080fd5b506001600160a01b0381351690602081013590604001356109e9565b34801561034257600080fd5b50610275610bb5565b34801561035757600080fd5b506103c66004803603602081101561036e57600080fd5b810190602081018135600160201b81111561038857600080fd5b82018360208201111561039a57600080fd5b803590602001918460208302840111600160201b831117156103bb57600080fd5b509092509050610bc1565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156104025781810151838201526020016103ea565b505050509050019250505060405180910390f35b6102066004803603602081101561042c57600080fd5b5035610c60565b34801561043f57600080fd5b5061024e610d81565b34801561045457600080fd5b5061024e6004803603602081101561046b57600080fd5b5035610d9c565b34801561047e57600080fd5b50610275610dae565b34801561049357600080fd5b50610159600480360360208110156104aa57600080fd5b5035610db3565b3480156104bd57600080fd5b5061024e600480360360208110156104d457600080fd5b5035610dc8565b3480156104e757600080fd5b5061024e611407565b3480156104fc57600080fd5b5061021d61142b565b34801561051157600080fd5b5061024e6004803603602081101561052857600080fd5b503561144f565b34801561053b57600080fd5b50610275611461565b60046020526000908152604090205460ff1681565b600260035414156105b1576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026003557f000000000000000000000000000000000000000000000000000000000000000082111561062b576040805162461bcd60e51b815260206004820152601a60248201527f4665652065786365656473207472616e736665722076616c7565000000000000604482015290519081900360640190fd5b60008581526004602052604090205460ff161561068f576040805162461bcd60e51b815260206004820152601f60248201527f546865206e6f746520686173206265656e20616c7265616479207370656e7400604482015290519081900360640190fd5b6106988661093e565b6106e9576040805162461bcd60e51b815260206004820152601c60248201527f43616e6e6f742066696e6420796f7572206d65726b6c6520726f6f7400000000604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663695ef6f989896040518060c001604052808b60001c81526020018a60001c8152602001896001600160a01b03168152602001886001600160a01b03168152602001878152602001868152506040518463ffffffff1660e01b8152600401808060200183600660200280838360005b8381101561079a578181015183820152602001610782565b505050509050018281038252858582818152602001925080828437600081840152601f19601f820116905080830192505050945050505050602060405180830381600087803b1580156107ec57600080fd5b505af1158015610800573d6000803e3d6000fd5b505050506040513d602081101561081657600080fd5b5051610862576040805162461bcd60e51b815260206004820152601660248201527524b73b30b634b2103bb4ba34323930bb90383937b7b360511b604482015290519081900360640190fd5b6000858152600460205260409020805460ff1916600117905561088784848484611474565b604080516001600160a01b038681168252602082018890528183018590529151918516917fe9e508bad6d4c3227e881ca19068f099da81b5164dd6d62b2eaf1e8bc6c349319181900360600190a250506001600355505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000805160206118df83398151915281565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008161094d575060006109ab565b60025463ffffffff16805b63ffffffff8116600090815260016020526040902054841415610980576001925050506109ab565b63ffffffff811661098f5750601e5b6000190163ffffffff8082169083161415610958576000925050505b919050565b60056020526000908152604090205460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006000805160206118df8339815191528310610a4d576040805162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c64604482015290519081900360640190fd5b6000805160206118df8339815191528210610a995760405162461bcd60e51b815260040180806020018281038252602181526020018061188a6021913960400191505060405180910390fd5b6040805163f47d33b560e01b8152600481018590526000602482018190528251869391926001600160a01b0389169263f47d33b592604480840193829003018186803b158015610ae857600080fd5b505afa158015610afc573d6000803e3d6000fd5b505050506040513d6040811015610b1257600080fd5b50805160209091015190925090506000805160206118df8339815191528483089150856001600160a01b031663f47d33b583836040518363ffffffff1660e01b81526004018083815260200182815260200192505050604080518083038186803b158015610b7f57600080fd5b505afa158015610b93573d6000803e3d6000fd5b505050506040513d6040811015610ba957600080fd5b50519695505050505050565b60025463ffffffff1681565b60608167ffffffffffffffff81118015610bda57600080fd5b50604051908082528060200260200182016040528015610c04578160200160208202803683370190505b50905060005b82811015610c5957610c2d848483818110610c2157fe5b90506020020135610db3565b15610c51576001828281518110610c4057fe5b911515602092830291909101909101525b600101610c0a565b5092915050565b60026003541415610cb8576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260035560008181526005602052604090205460ff1615610d0b5760405162461bcd60e51b81526004018080602001828103825260218152602001806118ff6021913960400191505060405180910390fd5b6000610d168261163e565b6000838152600560205260409020805460ff191660011790559050610d396117f1565b6040805163ffffffff83168152426020820152815184927fa945e51eec50ab98c161376f0db4cf2aeba3ec92755fe2fcd388bdbbb80ff196928290030190a250506001600355565b60025463ffffffff1660009081526001602052604090205490565b60016020526000908152604090205481565b601e81565b60009081526004602052604090205460ff1690565b600081610df657507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c6109ab565b8160011415610e2657507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d6109ab565b8160021415610e5657507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c2006109ab565b8160031415610e8657507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb6109ab565b8160041415610eb657507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c96109ab565b8160051415610ee657507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb549596109ab565b8160061415610f1657507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c6109ab565b8160071415610f4657507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb46109ab565b8160081415610f7657507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff806109ab565b8160091415610fa557507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c0076109ab565b81600a1415610fd557507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e306109ab565b81600b141561100557507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e56109ab565b81600c141561103557507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f6109ab565b81600d141561106557507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd6109ab565b81600e141561109557507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb1086109ab565b81600f14156110c557507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b66109ab565b81601014156110f557507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db618546109ab565b816011141561112557507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea6109ab565b816012141561115557507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d6109ab565b816013141561118557507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc056109ab565b81601414156111b557507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d46109ab565b81601514156111e557507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b29676109ab565b816016141561121557507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc34536109ab565b816017141561124557507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c486109ab565b816018141561127557507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd16109ab565b81601914156112a557507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c6109ab565b81601a14156112d557507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce996109ab565b81601b141561130557507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f3546109ab565b81601c141561133457507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d6109ab565b81601d141561136457507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f4276109ab565b81601e141561139457507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb6109ab565b81601f14156113c457507f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc6109ab565b6040805162461bcd60e51b8152602060048201526013602482015272496e646578206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b7f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006020819052908152604090205481565b600254600160201b900463ffffffff1681565b34156114b15760405162461bcd60e51b81526004018080602001828103825260358152602001806119986035913960400191505060405180910390fd5b80156114ee5760405162461bcd60e51b81526004018080602001828103825260348152602001806118ab6034913960400191505060405180910390fd5b6040516000906001600160a01b038616907f0000000000000000000000000000000000000000000000000000000000000000859003908381818185875af1925050503d806000811461155c576040519150601f19603f3d011682016040523d82523d6000602084013e611561565b606091505b50509050806115a15760405162461bcd60e51b81526004018080602001828103825260258152602001806119206025913960400191505060405180910390fd5b8215611637576040516001600160a01b038516908490600081818185875af1925050503d80600081146115f0576040519150601f19603f3d011682016040523d82523d6000602084013e6115f5565b606091505b505080915050806116375760405162461bcd60e51b81526004018080602001828103825260238152602001806119456023913960400191505060405180910390fd5b5050505050565b6002805460009163ffffffff600160201b9092048216917f0000000000000000000000000000000000000000000000000000000000000000811690910a168114156116ba5760405162461bcd60e51b81526004018080602001828103825260308152602001806119686030913960400191505060405180910390fd5b8083600080805b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff168163ffffffff16101561178b576001851661172e5783925061170f8163ffffffff16610dc8565b63ffffffff82166000908152602081905260409020859055915061174a565b63ffffffff811660009081526020819052604090205492508391505b6117757f000000000000000000000000000000000000000000000000000000000000000084846109e9565b9350600263ffffffff86160494506001016116c1565b505060028054601e63ffffffff8083166001908101821692909206811663ffffffff199093168317845560009283526020829052604090922094909455815493860116600160201b0267ffffffff00000000199093169290921790915550909392505050565b7f0000000000000000000000000000000000000000000000000000000000000000341461184f5760405162461bcd60e51b81526004018080602001828103825260388152602001806118526038913960400191505060405180910390fd5b56fe506c656173652073656e6420606d697844656e6f6d696e6174696f6e602045544820616c6f6e672077697468207472616e73616374696f6e5f72696768742073686f756c6420626520696e7369646520746865206669656c64526566756e642076616c756520697320737570706f73656420746f206265207a65726f20666f722045544820696e7374616e636530644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000154686520636f6d6d69746d656e7420686173206265656e207375626d69747465647061796d656e7420746f205f726563697069656e7420646964206e6f7420676f20746872757061796d656e7420746f205f72656c6179657220646964206e6f7420676f20746872754d65726b6c6520747265652069732066756c6c2e204e6f206d6f7265206c65617665732063616e2062652061646465644d6573736167652076616c756520697320737570706f73656420746f206265207a65726f20666f722045544820696e7374616e6365a2646970667358221220ade90c177ae5ad043d0de1fa48b80b06c1defcc3bacbe56c458c8fa73f6dcf4b64736f6c6343000706003364656e6f6d696e6174696f6e2073686f756c642062652067726561746572207468616e20305f6c6576656c732073686f756c642062652067726561746572207468616e207a65726f';
