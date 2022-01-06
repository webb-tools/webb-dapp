/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface VerifierInterface extends ethers.utils.Interface {
  functions: {
    "v2()": FunctionFragment;
    "v3()": FunctionFragment;
    "v4()": FunctionFragment;
    "v5()": FunctionFragment;
    "v6()": FunctionFragment;
    "verifyProof(uint256[2],uint256[2][2],uint256[2],bytes,uint8,bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "v2", values?: undefined): string;
  encodeFunctionData(functionFragment: "v3", values?: undefined): string;
  encodeFunctionData(functionFragment: "v4", values?: undefined): string;
  encodeFunctionData(functionFragment: "v5", values?: undefined): string;
  encodeFunctionData(functionFragment: "v6", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      BytesLike,
      BigNumberish,
      boolean
    ]
  ): string;

  decodeFunctionResult(functionFragment: "v2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "v3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "v4", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "v5", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "v6", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {};
}

export class Verifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: VerifierInterface;

  functions: {
    v2(overrides?: CallOverrides): Promise<[string]>;

    v3(overrides?: CallOverrides): Promise<[string]>;

    v4(overrides?: CallOverrides): Promise<[string]>;

    v5(overrides?: CallOverrides): Promise<[string]>;

    v6(overrides?: CallOverrides): Promise<[string]>;

    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: BytesLike,
      maxEdges: BigNumberish,
      _unused: boolean,
      overrides?: CallOverrides
    ): Promise<[boolean] & { r: boolean }>;
  };

  v2(overrides?: CallOverrides): Promise<string>;

  v3(overrides?: CallOverrides): Promise<string>;

  v4(overrides?: CallOverrides): Promise<string>;

  v5(overrides?: CallOverrides): Promise<string>;

  v6(overrides?: CallOverrides): Promise<string>;

  verifyProof(
    a: [BigNumberish, BigNumberish],
    b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
    c: [BigNumberish, BigNumberish],
    input: BytesLike,
    maxEdges: BigNumberish,
    _unused: boolean,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    v2(overrides?: CallOverrides): Promise<string>;

    v3(overrides?: CallOverrides): Promise<string>;

    v4(overrides?: CallOverrides): Promise<string>;

    v5(overrides?: CallOverrides): Promise<string>;

    v6(overrides?: CallOverrides): Promise<string>;

    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: BytesLike,
      maxEdges: BigNumberish,
      _unused: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    v2(overrides?: CallOverrides): Promise<BigNumber>;

    v3(overrides?: CallOverrides): Promise<BigNumber>;

    v4(overrides?: CallOverrides): Promise<BigNumber>;

    v5(overrides?: CallOverrides): Promise<BigNumber>;

    v6(overrides?: CallOverrides): Promise<BigNumber>;

    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: BytesLike,
      maxEdges: BigNumberish,
      _unused: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    v2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    v3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    v4(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    v5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    v6(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: BytesLike,
      maxEdges: BigNumberish,
      _unused: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
