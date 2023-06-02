import {combineReducers} from "redux";
import  productOrderReducer from './order/reducers'
import authReducer from './auth/reducers';
import orderHistoryReducer from "./hisrotyOrder/reducers";
export const rootReducer=combineReducers({
    order:productOrderReducer,
    auth:authReducer,
    history:orderHistoryReducer,
})

export type RootState = ReturnType<typeof  rootReducer>