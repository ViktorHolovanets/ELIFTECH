import { SET_TOKEN, SET_USER, SET_TOKEN_EXISTS, AuthActionTypes, AuthState } from './types';

const initialState: AuthState = {
    token: '',
    user: undefined,
    tokenExists: false,
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
        default:
            return state;
    }
};

export default authReducer;