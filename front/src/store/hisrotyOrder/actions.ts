import { ADD_ORDER_HISTORY, SET_ORDER_HISTORY } from "./types";
import IOrderHistory from "../../models/IOrderHistory";

export const addOrderHistory = (order: IOrderHistory) => {
    const existingHistory = JSON.parse(localStorage.getItem('history') || '[]');
    const updatedHistory = [order, ...existingHistory];
    localStorage.setItem('history', JSON.stringify(updatedHistory));
    return {
        type: ADD_ORDER_HISTORY,
        payload: order,
    };
};


export const setOrderHistory = (orderHistory: IOrderHistory[]) => {
    localStorage.setItem('history', JSON.stringify(orderHistory));
    return {
        type: SET_ORDER_HISTORY,
        payload: orderHistory,
    };
};


