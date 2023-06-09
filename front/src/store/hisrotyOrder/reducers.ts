import IOrderHistory from "../../models/IOrderHistory";
import {ADD_ORDER_HISTORY, SET_ORDER_HISTORY} from "./types";

const storedData = localStorage.getItem('history');
const initialState: IOrderHistory[] = storedData ? JSON.parse(storedData) : [];


export default function orderHistoryReducer(
    state: IOrderHistory[] = initialState,
    action: any
): IOrderHistory[] {
    switch (action.type) {
        case ADD_ORDER_HISTORY:
            return [...state, action.payload];
        case SET_ORDER_HISTORY:
            return action.payload;
        default:
            return state;
    }
}
