import {combineReducers} from "redux";
import  productOrderReducer from './order/reducers'
import authReducer from './auth/reducers';
export const rootReducer=combineReducers({
    order:productOrderReducer,
    auth:authReducer,
})

export type RootState = ReturnType<typeof  rootReducer>