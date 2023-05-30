
import IProductOrder from "../../models/IProductOrder";

export const ADD_PRODUCT_ORDER = 'ADD_PRODUCT_ORDER';
export const REMOVE_PRODUCT_ORDER = 'REMOVE_PRODUCT_ORDER';
export const UPDATE_PRODUCT_ORDER_COUNT = 'UPDATE_PRODUCT_ORDER_COUNT';

export const VIEW_PRODUCT_ORDER = 'VIEW_PRODUCT_ORDER';

export interface AddProductOrderAction {
    type: typeof ADD_PRODUCT_ORDER;
    payload: IProductOrder;
}

export interface RemoveProductOrderAction {
    type: typeof REMOVE_PRODUCT_ORDER;
    payload: {
        orderId: string;
    };
}

export interface UpdateProductOrderCountAction {
    type: typeof UPDATE_PRODUCT_ORDER_COUNT;
    payload: {
        orderId: string;
        count: number;
    };
}

export interface ViewProductOrderAction {
    type: typeof VIEW_PRODUCT_ORDER;
}

export type ProductOrderActionTypes =
    | AddProductOrderAction
    | RemoveProductOrderAction
    | UpdateProductOrderCountAction
    |ViewProductOrderAction;

// Тип стану
export interface ProductOrderState {
    productOrders: IProductOrder[];
    isView:boolean
}

