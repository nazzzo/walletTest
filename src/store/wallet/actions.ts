import request from '../../utils/request';
import { AccountActionType, AccountState, CREATE_WALLET, SELECT_WALLET } from './types';

export const saveAccount = (account: AccountState): AccountActionType => {
  return {
    type: CREATE_WALLET,
    payload: account,
  };
};

export const selectAccount = async (selectedWallet: AccountState) => {
  const { data } = await request.post("/getBalance", { account: selectedWallet.account });

  return {
    type: SELECT_WALLET,
    payload: { ...selectedWallet, amount: data.balance}
  };
};