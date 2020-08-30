import { Action } from '../interfaces/action';
import { types } from '../types/types';

export interface IPokemonUIState {
    loading: boolean;
}

const initialState = {
    loading: false,
} as IPokemonUIState;

export const pokemonUIReducer = (
    state = initialState,
    action: Action<boolean>
) => {
    switch (action.type) {
        case types.pokemonGetPokemonsLoading:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};
