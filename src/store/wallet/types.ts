export interface MyAccounts {
  wallet: AccountState[];
  selectedWallet: AccountState
}

export interface AccountState {
  account: string;
  publicKey: string;
  privateKey: string;
  amount: number;
}



export const CREATE_WALLET = 'CREATE_WALLET';
export const SELECT_WALLET = 'SELECT_WALLET';


export type AccountActionType =
  | { type: typeof CREATE_WALLET; payload: AccountState }
  | { type: typeof SELECT_WALLET; payload: AccountState };