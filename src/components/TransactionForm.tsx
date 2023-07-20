import { useReducer } from 'react';
import axios from 'axios';

type Transaction = {
  sender: string;
  receiver: string;
  amount: number;
};

type TransactionFormState = {
  receiver: string;
  amount: number;
  isLoading: boolean;
  isError: boolean;
};

type TransactionFormAction =
  | { type: 'FETCH_TRANSACTION_REQUEST' }
  | { type: 'FETCH_TRANSACTION_SUCCESS' }
  | { type: 'FETCH_TRANSACTION_FAILURE' }
  | { type: 'SET_RECEIVER'; payload: string }
  | { type: 'SET_AMOUNT'; payload: number };

const initialState: TransactionFormState = {
  receiver: '',
  amount: 0,
  isLoading: false,
  isError: false,
};

const reducer = (
  state: TransactionFormState,
  action: TransactionFormAction
): TransactionFormState => {
  switch (action.type) {
    case 'FETCH_TRANSACTION_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_TRANSACTION_SUCCESS':
      return {
        ...state,
        isLoading: false,
        receiver: '',
        amount: 0,
      };
    case 'FETCH_TRANSACTION_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'SET_RECEIVER':
      return {
        ...state,
        receiver: action.payload,
      };
    case 'SET_AMOUNT':
      return {
        ...state,
        amount: action.payload,
      };
    default:
      throw new Error('Unhandled action');
  }
};

const TransactionForm = ({ account }: { account: string }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'FETCH_TRANSACTION_REQUEST' });
    const transaction: Transaction = {
      sender: account,
      receiver: state.receiver,
      amount: state.amount,
    };
    try {
      await axios.post('http://127.0.0.1:3000/transaction', transaction);
      dispatch({ type: 'FETCH_TRANSACTION_SUCCESS' });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'FETCH_TRANSACTION_FAILURE' });
    }
  };

  return (
    <div>
      <h3>Transaction</h3>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="receiver">Receiver:</label>
            <input
              type="text"
              id="receiver"
              placeholder="Recipient account"
              value={state.receiver}
              onChange={(e) =>
                dispatch({
                  type: 'SET_RECEIVER',
                  payload: e.target.value,
                })
              }
            />
          </li>
          <li>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              placeholder="Amount"
              value={state.amount}
              onChange={(e) =>
                dispatch({
                  type: 'SET_AMOUNT',
                  payload: Number(e.target.value),
                })
              }
            />
          </li>
        </ul>
        <button type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Loading...' : 'Send'}
        </button>
        {state.isError && <p>Error sending transaction.</p>}
      </form>
    </div>
  );
};

export default TransactionForm;
