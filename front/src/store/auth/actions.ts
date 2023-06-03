import {AuthActionTypes, LOGOUT, SET_TOKEN, SET_TOKEN_EXISTS, SET_USER} from './types';
import IUser from "../../models/IUser";

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
    return {
        type: 'SET_TOKEN',
        payload: token,
    };
};

export const setUser = (user: IUser | undefined) => {
    localStorage.setItem('user', JSON.stringify(user)); // зберігаємо користувача у localStorage у вигляді рядка JSON
    return {
        type: 'SET_USER',
        payload: user,
    };
};

export const setTokenExists = (exists: boolean): AuthActionTypes => ({
    type: SET_TOKEN_EXISTS,
    payload: exists,
});
export const logout = (): AuthActionTypes => ({
    type: LOGOUT,
});
