/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TokenSwapInterface extends utils.Interface {
  contractName: "TokenSwap";
  functions: {
    "buyTokensABC(uint256)": FunctionFragment;
    "buyTokensXYZ(uint256)": FunctionFragment;
    "getFees()": FunctionFragment;
    "getRatio()": FunctionFragment;
    "setFees(uint256)": FunctionFragment;
    "setRatio(uint256)": FunctionFragment;
    "swapTKA(uint256)": FunctionFragment;
    "swapTKX(uint256)": FunctionFragment;
    "tokenABC()": FunctionFragment;
    "tokenXYZ()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyTokensABC",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokensXYZ",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getFees", values?: undefined): string;
  encodeFunctionData(functionFragment: "getRatio", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTKA",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTKX",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tokenABC", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenXYZ", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "buyTokensABC",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyTokensXYZ",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRatio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRatio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapTKA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapTKX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenABC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenXYZ", data: BytesLike): Result;

  events: {};
}

export interface TokenSwap extends BaseContract {
  contractName: "TokenSwap";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenSwapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyTokensABC(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyTokensXYZ(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFees(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    setFees(
      _Fees: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRatio(
      _ratio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTKA(
      amountTKA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTKX(
      amountTKX: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenABC(overrides?: CallOverrides): Promise<[string]>;

    tokenXYZ(overrides?: CallOverrides): Promise<[string]>;
  };

  buyTokensABC(
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyTokensXYZ(
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFees(overrides?: CallOverrides): Promise<BigNumber>;

  getRatio(overrides?: CallOverrides): Promise<BigNumber>;

  setFees(
    _Fees: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRatio(
    _ratio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTKA(
    amountTKA: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTKX(
    amountTKX: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenABC(overrides?: CallOverrides): Promise<string>;

  tokenXYZ(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    buyTokensABC(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buyTokensXYZ(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getFees(overrides?: CallOverrides): Promise<BigNumber>;

    getRatio(overrides?: CallOverrides): Promise<BigNumber>;

    setFees(_Fees: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setRatio(_ratio: BigNumberish, overrides?: CallOverrides): Promise<void>;

    swapTKA(
      amountTKA: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapTKX(
      amountTKX: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenABC(overrides?: CallOverrides): Promise<string>;

    tokenXYZ(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    buyTokensABC(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyTokensXYZ(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFees(overrides?: CallOverrides): Promise<BigNumber>;

    getRatio(overrides?: CallOverrides): Promise<BigNumber>;

    setFees(
      _Fees: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRatio(
      _ratio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTKA(
      amountTKA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTKX(
      amountTKX: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenABC(overrides?: CallOverrides): Promise<BigNumber>;

    tokenXYZ(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTokensABC(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyTokensXYZ(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFees(
      _Fees: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRatio(
      _ratio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTKA(
      amountTKA: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTKX(
      amountTKX: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenABC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenXYZ(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
