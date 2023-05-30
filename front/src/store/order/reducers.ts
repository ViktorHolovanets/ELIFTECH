
import {
    ADD_PRODUCT_ORDER,
    REMOVE_PRODUCT_ORDER,
    UPDATE_PRODUCT_ORDER_COUNT,
    ProductOrderActionTypes,
    ProductOrderState,
    VIEW_PRODUCT_ORDER
} from './types';


const initialState: ProductOrderState = {
    productOrders: [],
    isView: false,
};

const productOrderReducer = (state = initialState, action: ProductOrderActionTypes): ProductOrderState => {
    switch (action.type) {
        case ADD_PRODUCT_ORDER:
            const existingOrder = state.productOrders.find(order => order.id === action.payload.id);
            return {
                ...state,
                productOrders: existingOrder ? [...state.productOrders] : [...state.productOrders, action.payload],
                isView: state.isView,
            };
        case REMOVE_PRODUCT_ORDER:
            return {
                ...state,
                productOrders: state.productOrders.filter((order) => order.id !== action.payload.orderId),
                isView: state.isView,
            };
        case UPDATE_PRODUCT_ORDER_COUNT:
            return {
                ...state,
                productOrders: state.productOrders.map((order) => {
                    if (order.id === action.payload.orderId) {
                        return {
                            ...order,
                            count: action.payload.count,
                        };
                    }
                    return order;
                }),
                isView: state.isView,
            };
        case VIEW_PRODUCT_ORDER:
            return {
                ...state,
                productOrders: state.productOrders,
                isView: !state.isView,
            };
        default:
            return state;
    }
};

export default productOrderReducer;
