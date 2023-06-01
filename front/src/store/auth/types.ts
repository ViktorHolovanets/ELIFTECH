import IUser from "../../models/IUser";

export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';
export const SET_TOKEN_EXISTS = 'SET_TOKEN_EXISTS';

export interface AuthState {
    token: string;
    user: IUser | undefined;
    tokenExists: boolean;
}

export interface SetTokenAction {
    type: typeof SET_TOKEN;
    payload: string;
}

export interface SetUserAction {
    type: typeof SET_USER;
    payload: IUser | undefined;
}

export interface SetTokenExistsAction {
    type: typeof SET_TOKEN_EXISTS;
    payload: boolean;
}

export type AuthActionTypes = SetTokenAction | SetUserAction | SetTokenExistsAction;
