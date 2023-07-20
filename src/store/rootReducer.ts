import { combineReducers } from "redux"
import { wallet } from "./wallet"
import { transaction } from './transaction';


export const rootReducer = combineReducers({
    wallet, transaction
})