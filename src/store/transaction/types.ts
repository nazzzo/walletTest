export interface MyTx {
    senderAccount : string;
    receivedAccount: string;
    amount: number;
    timestamp : Date;
}


export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const GET_TRANSACTIONS_START = 'GET_TRANSACTIONS_START'
export const GET_TRANSACTIONS_SUCCESS = "GET_TRANSACTIONS_SUCCESS"
export const GET_TRANSACTIONS_ERROR = "GET_TRANSACTIONS_ERROR"



export type TransactionActionType =
  | { type: typeof ADD_TRANSACTION; payload: MyTx }
  | { type: typeof GET_TRANSACTIONS_START }
  | { type: typeof GET_TRANSACTIONS_SUCCESS; payload: MyTx[] }
  | { type: typeof GET_TRANSACTIONS_ERROR };