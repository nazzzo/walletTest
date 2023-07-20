import { AccountActionType, AccountState, CREATE_WALLET, MyAccounts, SELECT_WALLET } from './types';



const initialState: MyAccounts = {
  wallet: [
    {
      account: "",
      publicKey: "",
      privateKey: "",
      amount: 0,
    }
  ],
  selectedWallet: {
    account: "",
    publicKey: "",
    privateKey: "",
    amount: 0,
  }
};

export const wallet = (
  state = initialState,
  action: AccountActionType
): MyAccounts => {
  switch (action.type) {
    case CREATE_WALLET:
      return {
        ...state,
        wallet: [...state.wallet, action.payload],
      };
    case SELECT_WALLET:
      return {
        ...state,
        selectedWallet: action.payload,
      };
    default:
      return state;
  }
};