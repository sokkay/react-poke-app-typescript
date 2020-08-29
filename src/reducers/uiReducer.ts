import { types } from '../types/types';
import { Action } from '../interfaces/action';

export interface Iui {
    loading: boolean;
    msgError?: string;
}

const initialState = {
    loading: false,
    msgError: null,
};

export const uiReducer = (state = initialState, action: Action<Iui>) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload,
            };
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null,
            };
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            };
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
