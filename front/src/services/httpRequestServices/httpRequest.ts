import axios, {AxiosRequestConfig} from 'axios';
import IProduct from "../../models/IProduct";
import {BASE_URL, LOGIN_URL, ORDERS_URL, PRODUCTS_URL, REGISTER_URL, USER_URL} from "../../store/url/types";
import store from "../../store/store";
import IUser from "../../models/IUser";
import IOrderHistory from "../../models/IOrderHistory";


const addAuthorizationHeader = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = store.getState().auth.token;
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        };
    }
    return config;
};

// @ts-ignore
axios.interceptors.request.use(addAuthorizationHeader);

const fetchPostAny = async (url: string, data: any) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        alert((error as Error).message);
    }
};

export const fetchProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await axios.post<IProduct[]>(BASE_URL + PRODUCTS_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        alert((error as Error).message);
        return []; // Return an empty array or handle the error case accordingly
    }
};

export const fetchRegister = async (data: any) => {
    try {
        return await fetchPostAny(BASE_URL + REGISTER_URL, data);
    } catch (error) {
        console.error('Error fetching products:', error);
        alert((error as Error).message);
    }
};
export const fetchLogin = async (data: any) => {
    try {
        return await fetchPostAny(BASE_URL + LOGIN_URL, data);
    } catch (error) {
        console.error('Error fetching products:', error);
        alert((error as Error).message);
    }
};
export const fetchUser = async () => {
    try {
        const response = await axios.post<IUser | undefined>(BASE_URL + USER_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        alert((error as Error).message);
    }
};

export const fetchOrder = async (data:IOrderHistory) => {
    try {
        console.log(data);
        const response = await axios.post<{isOrder: boolean, orderId: string}>(BASE_URL + ORDERS_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        alert((error as Error).message);
    }
};