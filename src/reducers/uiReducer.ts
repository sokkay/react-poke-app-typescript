import { types } from '../types/types';
import { Action } from '../interfaces/action';

export interface IuiState {
    loading: boolean;
    msgError: string | null;
}

const initialState = {
    loading: false,
    msgError: null,
} as IuiState;

export const uiReducer = (state = initialState, action: Action<IuiState>) => {
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
