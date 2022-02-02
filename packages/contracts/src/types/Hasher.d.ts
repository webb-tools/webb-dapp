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
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface HasherInterface extends ethers.utils.Interface {
  functions: {
    'hash11(uint256[])': FunctionFragment;
    'hash5(uint256[5])': FunctionFragment;
    'hashLeftRight(uint256,uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'hash11', values: [BigNumberish[]]): string;
  encodeFunctionData(
    functionFragment: 'hash5',
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(functionFragment: 'hashLeftRight', values: [BigNumberish, BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'hash11', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hash5', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hashLeftRight', data: BytesLike): Result;

  events: {};
}

export class Hasher extends BaseContract {
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

  interface: HasherInterface;

  functions: {
    hash11(array: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber]>;

    hash5(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashLeftRight(_left: BigNumberish, _right: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  hash11(array: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

  hash5(
    array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashLeftRight(_left: BigNumberish, _right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    hash11(array: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

    hash5(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(_left: BigNumberish, _right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    hash11(array: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

    hash5(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(_left: BigNumberish, _right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    hash11(array: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hash5(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashLeftRight(_left: BigNumberish, _right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
