import { ADD_ORDER_HISTORY, SET_ORDER_HISTORY } from "./types";
import IOrderHistory from "../../models/IOrderHistory";

export const addOrderHistory = (order: IOrderHistory) => ({
    type: ADD_ORDER_HISTORY,
    payload: order,
});

export const setOrderHistory = (orderHistory: IOrderHistory[]) => ({
    type: SET_ORDER_HISTORY,
    payload: orderHistory,
});
