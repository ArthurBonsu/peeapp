/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC20Upgradeable,
  ERC20UpgradeableInterface,
} from "../../../../../@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable";

const _abi = [
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
        name: "to",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061124e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610d14565b60405180910390f35b6100e660048036038101906100e19190610b62565b610308565b6040516100f39190610cf9565b60405180910390f35b61010461032b565b6040516101119190610e16565b60405180910390f35b610134600480360381019061012f9190610b13565b610335565b6040516101419190610cf9565b60405180910390f35b610152610364565b60405161015f9190610e31565b60405180910390f35b610182600480360381019061017d9190610b62565b61036d565b60405161018f9190610cf9565b60405180910390f35b6101b260048036038101906101ad9190610aae565b6103a4565b6040516101bf9190610e16565b60405180910390f35b6101d06103ed565b6040516101dd9190610d14565b60405180910390f35b61020060048036038101906101fb9190610b62565b61047f565b60405161020d9190610cf9565b60405180910390f35b610230600480360381019061022b9190610b62565b6104f6565b60405161023d9190610cf9565b60405180910390f35b610260600480360381019061025b9190610ad7565b610519565b60405161026d9190610e16565b60405180910390f35b60606036805461028590610f46565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610f46565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b6000806103136105a0565b90506103208185856105a8565b600191505092915050565b6000603554905090565b6000806103406105a0565b905061034d858285610773565b6103588585856107ff565b60019150509392505050565b60006012905090565b6000806103786105a0565b905061039981858561038a8589610519565b6103949190610e68565b6105a8565b600191505092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060603780546103fc90610f46565b80601f016020809104026020016040519081016040528092919081815260200182805461042890610f46565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b5050505050905090565b60008061048a6105a0565b905060006104988286610519565b9050838110156104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d490610df6565b60405180910390fd5b6104ea82868684036105a8565b60019250505092915050565b6000806105016105a0565b905061050e8185856107ff565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060f90610dd6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610688576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067f90610d56565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107669190610e16565b60405180910390a3505050565b600061077f8484610519565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f957818110156107eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e290610d76565b60405180910390fd5b6107f884848484036105a8565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086690610db6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d690610d36565b60405180910390fd5b6108ea838383610a7a565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610971576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096890610d96565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a619190610e16565b60405180910390a3610a74848484610a7f565b50505050565b505050565b505050565b600081359050610a93816111ea565b92915050565b600081359050610aa881611201565b92915050565b600060208284031215610ac057600080fd5b6000610ace84828501610a84565b91505092915050565b60008060408385031215610aea57600080fd5b6000610af885828601610a84565b9250506020610b0985828601610a84565b9150509250929050565b600080600060608486031215610b2857600080fd5b6000610b3686828701610a84565b9350506020610b4786828701610a84565b9250506040610b5886828701610a99565b9150509250925092565b60008060408385031215610b7557600080fd5b6000610b8385828601610a84565b9250506020610b9485828601610a99565b9150509250929050565b610ba781610ed0565b82525050565b6000610bb882610e4c565b610bc28185610e57565b9350610bd2818560208601610f13565b610bdb81610fd6565b840191505092915050565b6000610bf3602383610e57565b9150610bfe82610fe7565b604082019050919050565b6000610c16602283610e57565b9150610c2182611036565b604082019050919050565b6000610c39601d83610e57565b9150610c4482611085565b602082019050919050565b6000610c5c602683610e57565b9150610c67826110ae565b604082019050919050565b6000610c7f602583610e57565b9150610c8a826110fd565b604082019050919050565b6000610ca2602483610e57565b9150610cad8261114c565b604082019050919050565b6000610cc5602583610e57565b9150610cd08261119b565b604082019050919050565b610ce481610efc565b82525050565b610cf381610f06565b82525050565b6000602082019050610d0e6000830184610b9e565b92915050565b60006020820190508181036000830152610d2e8184610bad565b905092915050565b60006020820190508181036000830152610d4f81610be6565b9050919050565b60006020820190508181036000830152610d6f81610c09565b9050919050565b60006020820190508181036000830152610d8f81610c2c565b9050919050565b60006020820190508181036000830152610daf81610c4f565b9050919050565b60006020820190508181036000830152610dcf81610c72565b9050919050565b60006020820190508181036000830152610def81610c95565b9050919050565b60006020820190508181036000830152610e0f81610cb8565b9050919050565b6000602082019050610e2b6000830184610cdb565b92915050565b6000602082019050610e466000830184610cea565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610e7382610efc565b9150610e7e83610efc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610eb357610eb2610f78565b5b828201905092915050565b6000610ec982610edc565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610f31578082015181840152602081019050610f16565b83811115610f40576000848401525b50505050565b60006002820490506001821680610f5e57607f821691505b60208210811415610f7257610f71610fa7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6111f381610ebe565b81146111fe57600080fd5b50565b61120a81610efc565b811461121557600080fd5b5056fea2646970667358221220637fb8c93a5b70915910646f5cee05a4f9951d24737443f93514ccac4896bd4164736f6c63430008020033";

type ERC20UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC20UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC20Upgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Upgradeable {
    return super.attach(address) as ERC20Upgradeable;
  }
  override connect(signer: Signer): ERC20Upgradeable__factory {
    return super.connect(signer) as ERC20Upgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20UpgradeableInterface {
    return new utils.Interface(_abi) as ERC20UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Upgradeable;
  }
}