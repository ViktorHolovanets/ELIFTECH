import {
    ADD_PRODUCT_ORDER,
    CLEAN_PRODUCT_ORDER,
    CleanProductAction,
    ProductOrderActionTypes,
    REMOVE_PRODUCT_ORDER,
    UPDATE_PRODUCT_ORDER_COUNT,
    VIEW_PRODUCT_ORDER
} from './types';
import IProductOrder from "../../models/IProductOrder";

export const addProductOrder = (productOrder: IProductOrder): ProductOrderActionTypes => {
    return {
        type: ADD_PRODUCT_ORDER,
        payload: productOrder,
    };
};

export const removeProductOrder = (orderId: string): ProductOrderActionTypes => {
    return {
        type: REMOVE_PRODUCT_ORDER,
        payload: {
            orderId,
        },
    };
};

export const updateProductOrderCount = (orderId: string, count: number): ProductOrderActionTypes => {
    return {
        type: UPDATE_PRODUCT_ORDER_COUNT,
        payload: {
            orderId,
            count,
        },
    };
};
export const viewOrder = (): ProductOrderActionTypes => {
    return {
        type: VIEW_PRODUCT_ORDER,
    };
};
export const clean = (): CleanProductAction => {
    return {
        type: CLEAN_PRODUCT_ORDER,
    };
};
