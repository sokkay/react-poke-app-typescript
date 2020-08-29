import { types } from '../types/types';
import { Action } from '../interfaces/action';

export const setError = (err: string): Action<string> => ({
    type: types.uiSetError,
    payload: err,
});

export const removeError = (): Action<any> => ({
    type: types.uiRemoveError,
    payload: null,
});

export const startLoading = (): Action<any> => ({
    type: types.uiStartLoading,
    payload: null,
});

export const finishLoading = (): Action<any> => ({
    type: types.uiFinishLoading,
    payload: null,
});
