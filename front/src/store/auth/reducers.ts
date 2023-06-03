import {AuthActionTypes, AuthState, LOGOUT, SET_TOKEN, SET_TOKEN_EXISTS, SET_USER} from './types';

const token = localStorage.getItem('token') || '';
const userString = localStorage.getItem('user') || '';
const user = userString ? JSON.parse(userString) : undefined;
const tokenExists = !!user;

const initialState: AuthState = {
    token,
    user,
    tokenExists,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
                tokenExists:true,
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case SET_TOKEN_EXISTS:
            return {
                ...state,
                tokenExists: action.payload,
            };
        case LOGOUT:
            return {
                token: '',
                user: undefined,
                tokenExists: false,
            };
        default:
            return state;
    }
};

export default authReducer;