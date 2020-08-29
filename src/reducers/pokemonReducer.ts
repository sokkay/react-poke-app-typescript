import { types } from '../types/types';
import { IPokemon } from '../interfaces/ipokemon';
import { Action } from '../interfaces/action';

export interface IPokemonState {
    pokemons: IPokemon[];
}

const initialState: IPokemonState = {
    pokemons: [],
};

export const pokemonReducer = (
    state = initialState,
    action: Action<IPokemon[]>
): IPokemonState => {
    switch (action.type) {
        case types.pokemonGetByType:
            return {
                ...state,
                pokemons: action.payload,
            };
        default:
            return state;
    }
};
