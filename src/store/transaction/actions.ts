import { Dispatch } from "redux";
import { ADD_TRANSACTION, GET_TRANSACTIONS_ERROR, GET_TRANSACTIONS_START, GET_TRANSACTIONS_SUCCESS, MyTx, TransactionActionType } from "./types";

export const addTransaction = (tx: MyTx): TransactionActionType => ({
    type: ADD_TRANSACTION,
    payload: tx,
});

// export const getTransactions = () => (dispatch: Dispatch) => {
//     try {
//       dispatch({ type: GET_TRANSACTIONS_START });
//       const storedTransactions = localStorage.getItem('transactions');
//       console.log(storedTransactions)
//       if (storedTransactions) {
//         const transactions: MyTx[] = JSON.parse(storedTransactions);
//         dispatch({ type: GET_TRANSACTIONS_SUCCESS, payload: transactions });
//       }
//     } catch (error) {
//       dispatch({ type: GET_TRANSACTIONS_ERROR });
//     }
//   };