/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FileTokenUpgradeable,
  FileTokenUpgradeableInterface,
} from "../../../contracts/iFileTokenUpgradeable.sol/FileTokenUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_adminset",
        type: "address",
      },
    ],
    name: "Adminset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferFrom",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fileid",
        type: "address",
      },
    ],
    name: "fileidset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "__owner",
        type: "address",
      },
    ],
    name: "ownerpick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611bb5806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d7146102b1578063a9059cbb146102e1578063dd62ed3e14610311578063f2fde38b1461034157610100565b806370a082311461023b578063715018a61461026b5780638da5cb5b1461027557806395d89b411461029357610100565b806323b872dd116100d357806323b872dd1461018d578063313ce567146101bd57806339509351146101db5780635e9ddeb11461020b57610100565b806306fdde0314610105578063095ea7b3146101235780630f44b4c91461015357806318160ddd1461016f575b600080fd5b61010d61035d565b60405161011a9190611575565b60405180910390f35b61013d6004803603810190610138919061131c565b6103ef565b60405161014a919061155a565b60405180910390f35b61016d60048036038101906101689190611268565b61040d565b005b610177610686565b60405161018491906116b7565b60405180910390f35b6101a760048036038101906101a291906112cd565b610690565b6040516101b4919061155a565b60405180910390f35b6101c56107c9565b6040516101d291906116d2565b60405180910390f35b6101f560048036038101906101f0919061131c565b6107d2565b604051610202919061155a565b60405180910390f35b61022560048036038101906102209190611268565b610809565b6040516102329190611508565b60405180910390f35b61025560048036038101906102509190611268565b610813565b60405161026291906116b7565b60405180910390f35b61027361085c565b005b61027d610870565b60405161028a9190611508565b60405180910390f35b61029b61089a565b6040516102a89190611575565b60405180910390f35b6102cb60048036038101906102c6919061131c565b61092c565b6040516102d8919061155a565b60405180910390f35b6102fb60048036038101906102f6919061131c565b6109a3565b604051610308919061155a565b60405180910390f35b61032b60048036038101906103269190611291565b6109c1565b60405161033891906116b7565b60405180910390f35b61035b60048036038101906103569190611268565b610a48565b005b60606068805461036c906117e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610398906117e7565b80156103e55780601f106103ba576101008083540402835291602001916103e5565b820191906000526020600020905b8154815290600101906020018083116103c857829003601f168201915b5050505050905090565b60006104036103fc610acc565b8484610ad4565b6001905092915050565b610415610870565b609c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080609c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600a81526020017f66696c65544f4b454e5300000000000000000000000000000000000000000000815250609a90805190602001906104e192919061119b565b506040518060400160405280600381526020017f464c540000000000000000000000000000000000000000000000000000000000815250609b908051906020019061052d92919061119b565b5061064c609a805461053e906117e7565b80601f016020809104026020016040519081016040528092919081815260200182805461056a906117e7565b80156105b75780601f1061058c576101008083540402835291602001916105b7565b820191906000526020600020905b81548152906001019060200180831161059a57829003601f168201915b5050505050609b80546105c9906117e7565b80601f01602080910402602001604051908101604052809291908181526020018280546105f5906117e7565b80156106425780601f1061061757610100808354040283529160200191610642565b820191906000526020600020905b81548152906001019060200180831161062557829003601f168201915b5050505050610c9f565b7f52454b5ea0ab0bb9d4c18ab97c144423198d68d685e9214879a694d252ee82798160405161067b9190611508565b60405180910390a150565b6000609954905090565b6000609c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1693506106c2848484610cfc565b610783846106ce610acc565b61077e85604051806060016040528060288152602001611b5860289139609860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610734610acc565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f779092919063ffffffff16565b610ad4565b7fc0d84ce5c7ff9ca21adb0f8436ff3f4951b4bb78c4e2fae2b6837958b3946ffd8484846040516107b693929190611523565b60405180910390a1600190509392505050565b60006012905090565b6000806107dd610acc565b90506107fe8185856107ef85896109c1565b6107f99190611709565b610ad4565b600191505092915050565b6000819050919050565b6000609760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610864610fcc565b61086e600061104a565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060606980546108a9906117e7565b80601f01602080910402602001604051908101604052809291908181526020018280546108d5906117e7565b80156109225780601f106108f757610100808354040283529160200191610922565b820191906000526020600020905b81548152906001019060200180831161090557829003601f168201915b5050505050905090565b600080610937610acc565b9050600061094582866109c1565b90508381101561098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098190611697565b60405180910390fd5b6109978286868403610ad4565b60019250505092915050565b60006109b76109b0610acc565b8484610cfc565b6001905092915050565b6000609860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610a50610fcc565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ac0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab7906115b7565b60405180910390fd5b610ac98161104a565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3b90611657565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bab906115d7565b60405180910390fd5b80606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c9291906116b7565b60405180910390a3505050565b600060019054906101000a900460ff16610cee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce590611677565b60405180910390fd5b610cf88282611110565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6390611637565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ddc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd390611597565b60405180910390fd5b610de7838383611191565b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e65906115f7565b60405180910390fd5b818103606560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f5e91906116b7565b60405180910390a3610f71848484611196565b50505050565b6000838311158290610fbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb69190611575565b60405180910390fd5b5082840390509392505050565b610fd4610acc565b73ffffffffffffffffffffffffffffffffffffffff16610ff2610870565b73ffffffffffffffffffffffffffffffffffffffff1614611048576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103f90611617565b60405180910390fd5b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060019054906101000a900460ff1661115f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115690611677565b60405180910390fd5b816068908051906020019061117592919061119b565b50806069908051906020019061118c92919061119b565b505050565b505050565b505050565b8280546111a7906117e7565b90600052602060002090601f0160209004810192826111c95760008555611210565b82601f106111e257805160ff1916838001178555611210565b82800160010185558215611210579182015b8281111561120f5782518255916020019190600101906111f4565b5b50905061121d9190611221565b5090565b5b8082111561123a576000816000905550600101611222565b5090565b60008135905061124d81611b29565b92915050565b60008135905061126281611b40565b92915050565b60006020828403121561127a57600080fd5b60006112888482850161123e565b91505092915050565b600080604083850312156112a457600080fd5b60006112b28582860161123e565b92505060206112c38582860161123e565b9150509250929050565b6000806000606084860312156112e257600080fd5b60006112f08682870161123e565b93505060206113018682870161123e565b925050604061131286828701611253565b9150509250925092565b6000806040838503121561132f57600080fd5b600061133d8582860161123e565b925050602061134e85828601611253565b9150509250929050565b6113618161175f565b82525050565b61137081611771565b82525050565b6000611381826116ed565b61138b81856116f8565b935061139b8185602086016117b4565b6113a481611877565b840191505092915050565b60006113bc6023836116f8565b91506113c782611888565b604082019050919050565b60006113df6026836116f8565b91506113ea826118d7565b604082019050919050565b60006114026022836116f8565b915061140d82611926565b604082019050919050565b60006114256026836116f8565b915061143082611975565b604082019050919050565b60006114486020836116f8565b9150611453826119c4565b602082019050919050565b600061146b6025836116f8565b9150611476826119ed565b604082019050919050565b600061148e6024836116f8565b915061149982611a3c565b604082019050919050565b60006114b1602b836116f8565b91506114bc82611a8b565b604082019050919050565b60006114d46025836116f8565b91506114df82611ada565b604082019050919050565b6114f38161179d565b82525050565b611502816117a7565b82525050565b600060208201905061151d6000830184611358565b92915050565b60006060820190506115386000830186611358565b6115456020830185611358565b61155260408301846114ea565b949350505050565b600060208201905061156f6000830184611367565b92915050565b6000602082019050818103600083015261158f8184611376565b905092915050565b600060208201905081810360008301526115b0816113af565b9050919050565b600060208201905081810360008301526115d0816113d2565b9050919050565b600060208201905081810360008301526115f0816113f5565b9050919050565b6000602082019050818103600083015261161081611418565b9050919050565b600060208201905081810360008301526116308161143b565b9050919050565b600060208201905081810360008301526116508161145e565b9050919050565b6000602082019050818103600083015261167081611481565b9050919050565b60006020820190508181036000830152611690816114a4565b9050919050565b600060208201905081810360008301526116b0816114c7565b9050919050565b60006020820190506116cc60008301846114ea565b92915050565b60006020820190506116e760008301846114f9565b92915050565b600081519050919050565b600082825260208201905092915050565b60006117148261179d565b915061171f8361179d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561175457611753611819565b5b828201905092915050565b600061176a8261177d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156117d25780820151818401526020810190506117b7565b838111156117e1576000848401525b50505050565b600060028204905060018216806117ff57607f821691505b6020821081141561181357611812611848565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b611b328161175f565b8114611b3d57600080fd5b50565b611b498161179d565b8114611b5457600080fd5b5056fe45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365a26469706673582212205f957d033b962fb9a018c9b70ad29d63a8f8699e8e037895518a772cead934e564736f6c63430008020033";

type FileTokenUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FileTokenUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FileTokenUpgradeable__factory extends ContractFactory {
  constructor(...args: FileTokenUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FileTokenUpgradeable> {
    return super.deploy(overrides || {}) as Promise<FileTokenUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FileTokenUpgradeable {
    return super.attach(address) as FileTokenUpgradeable;
  }
  override connect(signer: Signer): FileTokenUpgradeable__factory {
    return super.connect(signer) as FileTokenUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FileTokenUpgradeableInterface {
    return new utils.Interface(_abi) as FileTokenUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FileTokenUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FileTokenUpgradeable;
  }
}