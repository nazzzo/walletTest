import { ADD_TRANSACTION, GET_TRANSACTIONS_START, GET_TRANSACTIONS_ERROR, GET_TRANSACTIONS_SUCCESS, MyTx, TransactionActionType } from "./types"

interface TransactionState {
    transactions: MyTx[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: TransactionState = {
    transactions: [],
    isLoading: false,
    isError: false,
};

export const transaction = (
    state = initialState,
    action: TransactionActionType
): TransactionState => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
        case GET_TRANSACTIONS_START:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                transactions: action.payload,
            };
        case GET_TRANSACTIONS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};