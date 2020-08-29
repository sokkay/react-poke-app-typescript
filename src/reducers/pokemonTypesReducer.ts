import { Action } from '../interfaces/action';
import { types } from '../types/types';
import { IPokemonTypesResult, IPokemonTypes } from '../interfaces/pokemonTypes';

export interface PokemonTypeState {
    pokemonTypes: IPokemonTypesResult[];
}

const initialState: PokemonTypeState = {
    pokemonTypes: [],
};

export const pokemonTypesReducer = (
    state = initialState,
    action: Action<IPokemonTypes>
): PokemonTypeState => {
    switch (action.type) {
        case types.pokemonGetTypes:
            return {
                ...state,
                pokemonTypes: action.payload.results,
            };
        default:
            return state;
    }
};
