import { Action } from '../interfaces/action';
import { types } from '../types/types';
import { IPokemonTypesResult } from '../interfaces/pokemonTypes';

export interface PokemonTypeSelectedState {
    type?: IPokemonTypesResult;
}

const initialState: PokemonTypeSelectedState = {};

export const pokemonTypeSelectedReducer = (
    state = initialState,
    action: Action<string>
) => {
    switch (action.type) {
        case types.pokemonSelectedType:
            return {
                ...state,
                type: action.payload
            };
        default:
            return state;
    }
};
