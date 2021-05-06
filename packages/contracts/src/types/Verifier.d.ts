/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface VerifierInterface extends Interface {
  functions: {
    verifyProof: TypedFunctionDescription<{
      encode([proof, inputs]: [Arrayish, BigNumberish[]]): string;
    }>;
  };

  events: {};
}

export class Verifier extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Verifier;
  attach(addressOrName: string): Verifier;
  deployed(): Promise<Verifier>;

  on(event: EventFilter | string, listener: Listener): Verifier;
  once(event: EventFilter | string, listener: Listener): Verifier;
  addListener(eventName: EventFilter | string, listener: Listener): Verifier;
  removeAllListeners(eventName: EventFilter | string): Verifier;
  removeListener(eventName: any, listener: Listener): Verifier;

  interface: VerifierInterface;

  functions: {
    verifyProof(
      proof: Arrayish,
      inputs: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    "verifyProof(bytes,uint256[6])"(
      proof: Arrayish,
      inputs: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[6])"(
      a: BigNumberish[],
      b: BigNumberish[][],
      c: BigNumberish[],
      input: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<boolean>;
  };

  verifyProof(
    proof: Arrayish,
    inputs: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  "verifyProof(bytes,uint256[6])"(
    proof: Arrayish,
    inputs: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[6])"(
    a: BigNumberish[],
    b: BigNumberish[][],
    c: BigNumberish[],
    input: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  filters: {};

  estimate: {
    verifyProof(
      proof: Arrayish,
      inputs: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "verifyProof(bytes,uint256[6])"(
      proof: Arrayish,
      inputs: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[6])"(
      a: BigNumberish[],
      b: BigNumberish[][],
      c: BigNumberish[],
      input: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}
