import { Note } from '@webb-tools/sdk-core';
import { notificationApi } from '@webb-tools/webb-ui-components';
import { BehaviorSubject, Observable } from 'rxjs';

import { CancellationToken } from './cancelation-token';
import { WebbProviderType } from './webb-provider.interface';

export interface TXresultBase {
  // method: MethodPath;
  txHash: string;
}

export interface NewNotesTxResult extends TXresultBase {
  outputNotes: Note[];
}

export enum TransactionState {
  Cancelling, // Withdraw canceled
  Ideal, // initial status where the instance is Idea and ready for a withdraw

  PreparingTransaction, // Preparing the arguments for a transaction

  FetchingFixtures, // Zero-knowledge files need to be obtained over the network and may take time.
  FetchingLeavesFromRelayer, // The leaves of the merkle tree need to be obtained from the relayer
  ValidatingLeaves, // The leaves of the merkle tree need to be validated

  FetchingLeaves, // To create a merkle proof, the elements of the merkle tree must be fetched.
  GeneratingZk, // There is a withdraw in progress, and it's on the step of generating the Zero-knowledge proof
  InitializingTransaction, // There is a withdraw in progress, and it's on the step of initializing the transaction
  SendingTransaction, // There is a withdraw in progress, and it's on the step Sending the Transaction whether directly or through relayers

  Intermediate,

  Done, // the withdraw is Done and succeeded, the next tic the instance should be ideal
  Failed, // the withdraw is Done with a failure, the next tic the instance should be ideal
}

// Events that can be emitted using the {EventBus}
export type ActionEvent = {
  // Generic Error by the provider or doing an intermediate step
  error: string;
  // Validation Error for the withdrawing note
  // TODO : update this to be more verbose and not just relate to the note but also the params for `generateNote` and `transact`
  validationError: {
    note: string;
    recipient: string;
  };
  // The instance State change event to track the current status of the instance
  stateChange: TransactionState;
  // the instance is ready
  ready: void;
  loading: boolean;
};

export type FixturesStatus = 'Done' | 'Waiting' | 'Failed' | number;

export type FixturesProgress = {
  // Fixture name -> status
  fixturesList: Map<string, FixturesStatus>;
};

type LeavesProgress = {
  start: number;
  currentRange: [number, number];
  end?: number;
};

type IntermediateProgress = {
  name: string;
  data?: any;
};

type FailedTransaction = {
  error: string;
  txHash?: string;
};

type TransactionStatusMap<DonePayload> = {
  [TransactionState.Cancelling]: undefined;
  [TransactionState.Ideal]: undefined;

  [TransactionState.PreparingTransaction]: undefined;

  [TransactionState.FetchingFixtures]: FixturesProgress;
  [TransactionState.FetchingLeavesFromRelayer]: undefined;
  [TransactionState.FetchingLeaves]: LeavesProgress;
  // undefined -> start validating, boolean -> true if valid, false if not valid
  [TransactionState.ValidatingLeaves]: undefined | boolean;

  [TransactionState.GeneratingZk]: undefined;
  [TransactionState.Intermediate]: IntermediateProgress;
  [TransactionState.InitializingTransaction]: undefined;
  [TransactionState.SendingTransaction]: string;

  [TransactionState.Done]: DonePayload;
  [TransactionState.Failed]: FailedTransaction;
};

type StatusKey = TransactionState;

export type TransactionStatusValue<
  Key extends StatusKey,
  DonePayload = any
> = TransactionStatusMap<DonePayload>[Key];

type ExecutorClosure<DonePayload> = (
  next: Transaction<DonePayload>['next']
) => void | Promise<DonePayload>;

/**
 * The metadata for the transaction
 */
export type TransactionMetaData = {
  amount: number;
  tokens: [string, string];
  wallets: {
    src: number;
    dest: number;
  };
  token: string;
  recipient?: string;
  address?: string;
  tokenURI?: string;

  /**
   * The provider type to use for the transaction
   * @default 'web3'
   */
  providerType: WebbProviderType;
};

type PromiseExec<T> = (
  resolve: (value: T | PromiseLike<T>) => void,
  reject: (reason?: any) => void
) => void;

export class Transaction<DonePayload> extends Promise<DonePayload> {
  cancelToken: CancellationToken = new CancellationToken();
  readonly id = String(Date.now() + Math.random());
  readonly timestamp = new Date();
  private _txHash: BehaviorSubject<string | undefined> = new BehaviorSubject<
    string | undefined
  >(undefined);

  private constructor(
    executor: PromiseExec<DonePayload>,
    public readonly name: string,
    public readonly metaData: TransactionMetaData,
    private readonly _status: BehaviorSubject<
      [
        StatusKey,
        TransactionStatusMap<DonePayload>[keyof TransactionStatusMap<DonePayload>]
      ]
    >
  ) {
    super(executor);
  }

  static new<T>(name: string, metadata: TransactionMetaData): Transaction<T> {
    const status = new BehaviorSubject<
      [StatusKey, TransactionStatusMap<T>[keyof TransactionStatusMap<T>]]
    >([TransactionState.Ideal, undefined]);

    const exec: PromiseExec<T> = (resolve, reject) => {
      status
        .forEach(([state, data]) => {
          if (state === TransactionState.Done) {
            resolve(data as T);
          } else if (state === TransactionState.Failed) {
            const failedData = data as FailedTransaction;
            notificationApi.addToQueue({
              variant: 'error',
              message: 'Transaction Failed',
              secondaryMessage: failedData.error,
            });
          }
        })
        .catch((reason) => {
          notificationApi.addToQueue({
            variant: 'error',
            message: 'Executor reject',
            secondaryMessage: reason.toString?.(),
          });
        });
    };

    return new Transaction(exec, name, metadata, status);
  }

  next<Status extends keyof TransactionStatusMap<DonePayload>>(
    status: Status,
    data: TransactionStatusMap<DonePayload>[Status]
  ) {
    console.log('Transaction update status', [status, data]);
    this._status.next([status, data]);
  }

  fail(error: string): void {
    this.next(TransactionState.Failed, {
      error,
      txHash: this.txHash,
    });
  }

  cancel() {
    this.cancelToken.cancel();
  }

  get currentStatus(): [
    TransactionState,
    TransactionStatusMap<DonePayload>[keyof TransactionStatusMap<DonePayload>]
  ] {
    return this._status.value;
  }

  get txHash(): string | undefined {
    return this._txHash.value;
  }

  set txHash(hash: string | undefined) {
    this._txHash.next(hash);
  }

  get $txHash(): Observable<string | undefined> {
    return this._txHash.asObservable();
  }

  get $currentStatus() {
    return this._status.asObservable();
  }

  executor = (handler: ExecutorClosure<DonePayload>) => {
    try {
      return handler(this.next);
    } catch (e) {
      this.next(TransactionState.Failed, {
        error: JSON.stringify(e),
        txHash: this.txHash,
      });
    }
  };
}
