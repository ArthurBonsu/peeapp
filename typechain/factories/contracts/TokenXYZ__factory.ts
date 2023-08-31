/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TokenXYZ, TokenXYZInterface } from "../../contracts/TokenXYZ";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenPrice",
        type: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
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
    name: "tokenPrice",
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
    name: "tokensSold",
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
  "0x60806040523480156200001157600080fd5b5060405162001cee38038062001cee833981810160405281019062000037919062000342565b6040518060400160405280600881526020017f546f6b656e58595a0000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f58595a00000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb9291906200027b565b508060049080519060200190620000d49291906200027b565b50505080600581905550620000f03083620000f860201b60201c565b505062000549565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200016b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016290620003bb565b60405180910390fd5b6200017f600083836200027160201b60201c565b80600260008282546200019391906200040b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001ea91906200040b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002519190620003dd565b60405180910390a36200026d600083836200027660201b60201c565b5050565b505050565b505050565b828054620002899062000472565b90600052602060002090601f016020900481019282620002ad5760008555620002f9565b82601f10620002c857805160ff1916838001178555620002f9565b82800160010185558215620002f9579182015b82811115620002f8578251825591602001919060010190620002db565b5b5090506200030891906200030c565b5090565b5b80821115620003275760008160009055506001016200030d565b5090565b6000815190506200033c816200052f565b92915050565b600080604083850312156200035657600080fd5b600062000366858286016200032b565b925050602062000379858286016200032b565b9150509250929050565b600062000392601f83620003fa565b91506200039f8262000506565b602082019050919050565b620003b58162000468565b82525050565b60006020820190508181036000830152620003d68162000383565b9050919050565b6000602082019050620003f46000830184620003aa565b92915050565b600082825260208201905092915050565b6000620004188262000468565b9150620004258362000468565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200045d576200045c620004a8565b5b828201905092915050565b6000819050919050565b600060028204905060018216806200048b57607f821691505b60208210811415620004a257620004a1620004d7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6200053a8162000468565b81146200054657600080fd5b50565b61179580620005596000396000f3fe6080604052600436106100dd5760003560e01c8063518ab2a81161007f57806395d89b411161005957806395d89b41146102c9578063a457c2d7146102f4578063a9059cbb14610331578063dd62ed3e1461036e576100dd565b8063518ab2a81461023657806370a08231146102615780637ff9b5961461029e576100dd565b806323b872dd116100bb57806323b872dd14610175578063313ce567146101b25780633610724e146101dd57806339509351146101f9576100dd565b806306fdde03146100e2578063095ea7b31461010d57806318160ddd1461014a575b600080fd5b3480156100ee57600080fd5b506100f76103ab565b6040516101049190611141565b60405180910390f35b34801561011957600080fd5b50610134600480360381019061012f9190610e9e565b61043d565b6040516101419190611126565b60405180910390f35b34801561015657600080fd5b5061015f610460565b60405161016c9190611263565b60405180910390f35b34801561018157600080fd5b5061019c60048036038101906101979190610e4f565b61046a565b6040516101a99190611126565b60405180910390f35b3480156101be57600080fd5b506101c7610499565b6040516101d4919061127e565b60405180910390f35b6101f760048036038101906101f29190610f03565b6104a2565b005b34801561020557600080fd5b50610220600480360381019061021b9190610e9e565b610601565b60405161022d9190611126565b60405180910390f35b34801561024257600080fd5b5061024b610638565b6040516102589190611263565b60405180910390f35b34801561026d57600080fd5b5061028860048036038101906102839190610dea565b61063e565b6040516102959190611263565b60405180910390f35b3480156102aa57600080fd5b506102b3610686565b6040516102c09190611263565b60405180910390f35b3480156102d557600080fd5b506102de61068c565b6040516102eb9190611141565b60405180910390f35b34801561030057600080fd5b5061031b60048036038101906103169190610e9e565b61071e565b6040516103289190611126565b60405180910390f35b34801561033d57600080fd5b5061035860048036038101906103539190610e9e565b610795565b6040516103659190611126565b60405180910390f35b34801561037a57600080fd5b5061039560048036038101906103909190610e13565b6107b8565b6040516103a29190611263565b60405180910390f35b6060600380546103ba9061141e565b80601f01602080910402602001604051908101604052809291908181526020018280546103e69061141e565b80156104335780601f1061040857610100808354040283529160200191610433565b820191906000526020600020905b81548152906001019060200180831161041657829003601f168201915b5050505050905090565b60008061044861083f565b9050610455818585610847565b600191505092915050565b6000600254905090565b60008061047561083f565b9050610482858285610a12565b61048d858585610a9e565b60019150509392505050565b60006012905090565b6104ae81600554610d1f565b3410156104ba57600080fd5b803073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104f491906110e2565b60206040518083038186803b15801561050c57600080fd5b505afa158015610520573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105449190610f2c565b101561054f57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161058a9291906110fd565b602060405180830381600087803b1580156105a457600080fd5b505af11580156105b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105dc9190610eda565b6105e557600080fd5b80600660008282546105f791906112b5565b9250508190555050565b60008061060c61083f565b905061062d81858561061e85896107b8565b61062891906112b5565b610847565b600191505092915050565b60065481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60055481565b60606004805461069b9061141e565b80601f01602080910402602001604051908101604052809291908181526020018280546106c79061141e565b80156107145780601f106106e957610100808354040283529160200191610714565b820191906000526020600020905b8154815290600101906020018083116106f757829003601f168201915b5050505050905090565b60008061072961083f565b9050600061073782866107b8565b90508381101561077c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077390611243565b60405180910390fd5b6107898286868403610847565b60019250505092915050565b6000806107a061083f565b90506107ad818585610a9e565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ae90611223565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610927576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091e90611183565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a059190611263565b60405180910390a3505050565b6000610a1e84846107b8565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a985781811015610a8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a81906111c3565b60405180910390fd5b610a978484848403610847565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0590611203565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7590611163565b60405180910390fd5b610b89838383610d8c565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c06906111e3565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ca291906112b5565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d069190611263565b60405180910390a3610d19848484610d91565b50505050565b600080821480610d47575082828385610d38919061133c565b925082610d45919061130b565b145b610d86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7d906111a3565b60405180910390fd5b92915050565b505050565b505050565b600081359050610da58161171a565b92915050565b600081519050610dba81611731565b92915050565b600081359050610dcf81611748565b92915050565b600081519050610de481611748565b92915050565b600060208284031215610dfc57600080fd5b6000610e0a84828501610d96565b91505092915050565b60008060408385031215610e2657600080fd5b6000610e3485828601610d96565b9250506020610e4585828601610d96565b9150509250929050565b600080600060608486031215610e6457600080fd5b6000610e7286828701610d96565b9350506020610e8386828701610d96565b9250506040610e9486828701610dc0565b9150509250925092565b60008060408385031215610eb157600080fd5b6000610ebf85828601610d96565b9250506020610ed085828601610dc0565b9150509250929050565b600060208284031215610eec57600080fd5b6000610efa84828501610dab565b91505092915050565b600060208284031215610f1557600080fd5b6000610f2384828501610dc0565b91505092915050565b600060208284031215610f3e57600080fd5b6000610f4c84828501610dd5565b91505092915050565b610f5e81611396565b82525050565b610f6d816113a8565b82525050565b6000610f7e82611299565b610f8881856112a4565b9350610f988185602086016113eb565b610fa1816114dd565b840191505092915050565b6000610fb96023836112a4565b9150610fc4826114ee565b604082019050919050565b6000610fdc6022836112a4565b9150610fe78261153d565b604082019050919050565b6000610fff6014836112a4565b915061100a8261158c565b602082019050919050565b6000611022601d836112a4565b915061102d826115b5565b602082019050919050565b60006110456026836112a4565b9150611050826115de565b604082019050919050565b60006110686025836112a4565b91506110738261162d565b604082019050919050565b600061108b6024836112a4565b91506110968261167c565b604082019050919050565b60006110ae6025836112a4565b91506110b9826116cb565b604082019050919050565b6110cd816113d4565b82525050565b6110dc816113de565b82525050565b60006020820190506110f76000830184610f55565b92915050565b60006040820190506111126000830185610f55565b61111f60208301846110c4565b9392505050565b600060208201905061113b6000830184610f64565b92915050565b6000602082019050818103600083015261115b8184610f73565b905092915050565b6000602082019050818103600083015261117c81610fac565b9050919050565b6000602082019050818103600083015261119c81610fcf565b9050919050565b600060208201905081810360008301526111bc81610ff2565b9050919050565b600060208201905081810360008301526111dc81611015565b9050919050565b600060208201905081810360008301526111fc81611038565b9050919050565b6000602082019050818103600083015261121c8161105b565b9050919050565b6000602082019050818103600083015261123c8161107e565b9050919050565b6000602082019050818103600083015261125c816110a1565b9050919050565b600060208201905061127860008301846110c4565b92915050565b600060208201905061129360008301846110d3565b92915050565b600081519050919050565b600082825260208201905092915050565b60006112c0826113d4565b91506112cb836113d4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611300576112ff611450565b5b828201905092915050565b6000611316826113d4565b9150611321836113d4565b9250826113315761133061147f565b5b828204905092915050565b6000611347826113d4565b9150611352836113d4565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561138b5761138a611450565b5b828202905092915050565b60006113a1826113b4565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156114095780820151818401526020810190506113ee565b83811115611418576000848401525b50505050565b6000600282049050600182168061143657607f821691505b6020821081141561144a576114496114ae565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000600082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61172381611396565b811461172e57600080fd5b50565b61173a816113a8565b811461174557600080fd5b50565b611751816113d4565b811461175c57600080fd5b5056fea26469706673582212204fa521f43c2c5e777d90ecb68bcf6540e2e1eac4dc3d12379ebb9014ecfd9fa064736f6c63430008020033";

type TokenXYZConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenXYZConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenXYZ__factory extends ContractFactory {
  constructor(...args: TokenXYZConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: PromiseOrValue<BigNumberish>,
    _tokenPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenXYZ> {
    return super.deploy(
      initialSupply,
      _tokenPrice,
      overrides || {}
    ) as Promise<TokenXYZ>;
  }
  override getDeployTransaction(
    initialSupply: PromiseOrValue<BigNumberish>,
    _tokenPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialSupply,
      _tokenPrice,
      overrides || {}
    );
  }
  override attach(address: string): TokenXYZ {
    return super.attach(address) as TokenXYZ;
  }
  override connect(signer: Signer): TokenXYZ__factory {
    return super.connect(signer) as TokenXYZ__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenXYZInterface {
    return new utils.Interface(_abi) as TokenXYZInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenXYZ {
    return new Contract(address, _abi, signerOrProvider) as TokenXYZ;
  }
}
