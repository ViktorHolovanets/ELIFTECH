import { SET_TOKEN, SET_USER, SET_TOKEN_EXISTS, AuthActionTypes } from './types';
import IUser from "../../models/IUser";

export const setToken = (token: string): AuthActionTypes => ({
    type: SET_TOKEN,
    payload: token,
});

export const setUser = (user: IUser | undefined): AuthActionTypes => ({
    type: SET_USER,
    payload: user,
});

export const setTokenExists = (exists: boolean): AuthActionTypes => ({
    type: SET_TOKEN_EXISTS,
    payload: exists,
});
