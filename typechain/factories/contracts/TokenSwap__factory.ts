/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TokenSwap, TokenSwapInterface } from "../../contracts/TokenSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenABC",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenXYZ",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "swapTKAcounter",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "initialamount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amountafter",
        type: "uint256",
      },
    ],
    name: "eventswapTKA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "swapTKXcounter",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "initialamount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amountafter",
        type: "uint256",
      },
    ],
    name: "eventswapTKX",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyTokensABC",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyTokensXYZ",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFees",
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
    name: "getRatio",
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
        internalType: "uint256",
        name: "_Fees",
        type: "uint256",
      },
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ratio",
        type: "uint256",
      },
    ],
    name: "setRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountTKA",
        type: "uint256",
      },
    ],
    name: "swapTKA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountTKX",
        type: "uint256",
      },
    ],
    name: "swapTKX",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenABC",
    outputs: [
      {
        internalType: "contract TokenABC",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenXYZ",
    outputs: [
      {
        internalType: "contract TokenXYZ",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ba538038062001ba58339818101604052810190620000379190620003f8565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b330600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015620001a157600080fd5b505afa158015620001b6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001dc919062000465565b6040518363ffffffff1660e01b8152600401620001fb929190620004b3565b602060405180830381600087803b1580156200021657600080fd5b505af11580156200022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000251919062000439565b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b330600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015620002fa57600080fd5b505afa1580156200030f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000335919062000465565b6040518363ffffffff1660e01b815260040162000354929190620004b3565b602060405180830381600087803b1580156200036f57600080fd5b505af115801562000384573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003aa919062000439565b50505062000578565b600081519050620003c4816200052a565b92915050565b600081519050620003db8162000544565b92915050565b600081519050620003f2816200055e565b92915050565b600080604083850312156200040c57600080fd5b60006200041c85828601620003b3565b92505060206200042f85828601620003b3565b9150509250929050565b6000602082840312156200044c57600080fd5b60006200045c84828501620003ca565b91505092915050565b6000602082840312156200047857600080fd5b60006200048884828501620003e1565b91505092915050565b6200049c81620004e0565b82525050565b620004ad8162000520565b82525050565b6000604082019050620004ca600083018562000491565b620004d96020830184620004a2565b9392505050565b6000620004ed8262000500565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200053581620004e0565b81146200054157600080fd5b50565b6200054f81620004f4565b81146200055b57600080fd5b50565b620005698162000520565b81146200057557600080fd5b50565b61161d80620005886000396000f3fe6080604052600436106100915760003560e01c8063ad20f47011610059578063ad20f4701461018f578063b2237ba3146101ab578063db8d55f1146101d4578063ec1ebd7a146101ff578063f62b77d71461022a57610091565b80633d18678e146100965780635f70662d146100bf5780637226d2c3146100ea57806394e6d1a214610127578063aaea238214610164575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b89190610eec565b610246565b005b3480156100cb57600080fd5b506100d461025c565b6040516100e191906110e2565b60405180910390f35b3480156100f657600080fd5b50610111600480360381019061010c9190610eec565b610282565b60405161011e91906111bd565b60405180910390f35b34801561013357600080fd5b5061014e60048036038101906101499190610eec565b610777565b60405161015b91906111bd565b60405180910390f35b34801561017057600080fd5b50610179610c73565b60405161018691906110c7565b60405180910390f35b6101a960048036038101906101a49190610eec565b610c99565b005b3480156101b757600080fd5b506101d260048036038101906101cd9190610eec565b610d36565b005b3480156101e057600080fd5b506101e9610d4c565b6040516101f691906111bd565b60405180910390f35b34801561020b57600080fd5b50610214610d63565b60405161022191906111bd565b60405180910390f35b610244600480360381019061023f9190610eec565b610d7a565b005b60008054906101000a9050508060038190555050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082116102c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bd9061117d565b60405180910390fd5b81600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401610322919061104c565b60206040518083038186803b15801561033a57600080fd5b505afa15801561034e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103729190610f15565b10156103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103aa9061115d565b60405180910390fd5b60006103c183600154610e17565b9050600060646103d383600354610e17565b6103dd91906111e9565b826103e89190611274565b90506000811161042d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104249061111d565b60405180910390fd5b80600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610489919061104c565b60206040518083038186803b1580156104a157600080fd5b505afa1580156104b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d99190610f15565b11610519576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105109061113d565b60405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b815260040161057a93929190611067565b602060405180830381600087803b15801561059457600080fd5b505af11580156105a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cc9190610ec3565b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b333846040518363ffffffff1660e01b815260040161062a92919061109e565b602060405180830381600087803b15801561064457600080fd5b505af1158015610658573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067c9190610ec3565b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3033856040518463ffffffff1660e01b81526004016106dc93929190611067565b602060405180830381600087803b1580156106f657600080fd5b505af115801561070a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072e9190610ec3565b50808061073a90611338565b9150508185827fedd13a96cad2c4ad7f005492f012ede3601a021bf64e78840d2d940afffacb4160405160405180910390a4819350505050919050565b60006001548210156107be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b59061119d565b60405180910390fd5b81600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161081a919061104c565b60206040518083038186803b15801561083257600080fd5b505afa158015610846573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086a9190610f15565b10156108ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a29061115d565b60405180910390fd5b6000600154836108bb91906111e9565b905060006064600354836108cf919061121a565b6108d991906111e9565b826108e49190611274565b905060008111610929576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109209061111d565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610985919061104c565b60206040518083038186803b15801561099d57600080fd5b505afa1580156109b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d59190610f15565b11610a15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0c9061113d565b60405180910390fd5b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b8152600401610a7693929190611067565b602060405180830381600087803b158015610a9057600080fd5b505af1158015610aa4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac89190610ec3565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b333846040518363ffffffff1660e01b8152600401610b2692919061109e565b602060405180830381600087803b158015610b4057600080fd5b505af1158015610b54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b789190610ec3565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3033856040518463ffffffff1660e01b8152600401610bd893929190611067565b602060405180830381600087803b158015610bf257600080fd5b505af1158015610c06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2a9190610ec3565b508080610c3690611338565b9150508185827f1066d2d5f601fb81675f66324bfa556201df58d00a3a86b12ba77ffa00751ad660405160405180910390a4819350505050919050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a905050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633610724e34836040518363ffffffff1660e01b8152600401610d0191906111bd565b6000604051808303818588803b158015610d1a57600080fd5b505af1158015610d2e573d6000803e3d6000fd5b505050505050565b60008054906101000a9050508060018190555050565b60008060009054906101000a905050600354905090565b60008060009054906101000a905050600154905090565b60008054906101000a905050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633610724e34836040518363ffffffff1660e01b8152600401610de291906111bd565b6000604051808303818588803b158015610dfb57600080fd5b505af1158015610e0f573d6000803e3d6000fd5b505050505050565b600080821480610e3f575082828385610e30919061121a565b925082610e3d91906111e9565b145b610e7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e75906110fd565b60405180910390fd5b92915050565b600081519050610e93816115b9565b92915050565b600081359050610ea8816115d0565b92915050565b600081519050610ebd816115d0565b92915050565b600060208284031215610ed557600080fd5b6000610ee384828501610e84565b91505092915050565b600060208284031215610efe57600080fd5b6000610f0c84828501610e99565b91505092915050565b600060208284031215610f2757600080fd5b6000610f3584828501610eae565b91505092915050565b610f47816112a8565b82525050565b610f56816112f0565b82525050565b610f6581611314565b82525050565b6000610f786014836111d8565b9150610f83826113df565b602082019050919050565b6000610f9b6029836111d8565b9150610fa682611408565b604082019050919050565b6000610fbe604c836111d8565b9150610fc982611457565b606082019050919050565b6000610fe16021836111d8565b9150610fec826114cc565b604082019050919050565b60006110046023836111d8565b915061100f8261151b565b604082019050919050565b60006110276024836111d8565b91506110328261156a565b604082019050919050565b611046816112e6565b82525050565b60006020820190506110616000830184610f3e565b92915050565b600060608201905061107c6000830186610f3e565b6110896020830185610f3e565b611096604083018461103d565b949350505050565b60006040820190506110b36000830185610f3e565b6110c0602083018461103d565b9392505050565b60006020820190506110dc6000830184610f4d565b92915050565b60006020820190506110f76000830184610f5c565b92915050565b6000602082019050818103600083015261111681610f6b565b9050919050565b6000602082019050818103600083015261113681610f8e565b9050919050565b6000602082019050818103600083015261115681610fb1565b9050919050565b6000602082019050818103600083015261117681610fd4565b9050919050565b6000602082019050818103600083015261119681610ff7565b9050919050565b600060208201905081810360008301526111b68161101a565b9050919050565b60006020820190506111d2600083018461103d565b92915050565b600082825260208201905092915050565b60006111f4826112e6565b91506111ff836112e6565b92508261120f5761120e6113b0565b5b828204905092915050565b6000611225826112e6565b9150611230836112e6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561126957611268611381565b5b828202905092915050565b600061127f826112e6565b915061128a836112e6565b92508282101561129d5761129c611381565b5b828203905092915050565b60006112b3826112c6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006112fb82611302565b9050919050565b600061130d826112c6565b9050919050565b600061131f82611326565b9050919050565b6000611331826112c6565b9050919050565b6000611343826112e6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561137657611375611381565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000600082015250565b7f65786368616e676520416d6f756e74206d75737420626520677265617465722060008201527f7468656e207a65726f0000000000000000000000000000000000000000000000602082015250565b7f63757272656e746c79207468652065786368616e676520646f65736e7420686160008201527f766520656e6f7567682058595a20546f6b656e732c20706c656173652072657460208201527f7279206c61746572203a3d280000000000000000000000000000000000000000604082015250565b7f73656e64657220646f65736e2774206861766520656e6f75676820546f6b656e60008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f616d6f756e74544b41206d7573742062652067726561746572207468656e207a60008201527f65726f0000000000000000000000000000000000000000000000000000000000602082015250565b7f616d6f756e74544b58206d7573742062652067726561746572207468656e207260008201527f6174696f00000000000000000000000000000000000000000000000000000000602082015250565b6115c2816112ba565b81146115cd57600080fd5b50565b6115d9816112e6565b81146115e457600080fd5b5056fea26469706673582212207eafe14f0686efc510e0318e73711bdb26b85f29dadf2a0b9310025effeee85064736f6c63430008020033";

type TokenSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenSwap__factory extends ContractFactory {
  constructor(...args: TokenSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenABC: PromiseOrValue<string>,
    _tokenXYZ: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenSwap> {
    return super.deploy(
      _tokenABC,
      _tokenXYZ,
      overrides || {}
    ) as Promise<TokenSwap>;
  }
  override getDeployTransaction(
    _tokenABC: PromiseOrValue<string>,
    _tokenXYZ: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenABC, _tokenXYZ, overrides || {});
  }
  override attach(address: string): TokenSwap {
    return super.attach(address) as TokenSwap;
  }
  override connect(signer: Signer): TokenSwap__factory {
    return super.connect(signer) as TokenSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenSwapInterface {
    return new utils.Interface(_abi) as TokenSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenSwap {
    return new Contract(address, _abi, signerOrProvider) as TokenSwap;
  }
}