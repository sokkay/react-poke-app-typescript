import { Dispatch } from 'redux';
import Axios from 'axios';
import { startLoading, finishLoading, setError } from './ui';
import { IPokemonTypes, IPokemonTypesResult } from '../interfaces/pokemonTypes';
import { types } from '../types/types';
import { Action } from '../interfaces/action';
import { IPokemonType } from '../interfaces/pokemonType';
import { IPokemon } from '../interfaces/ipokemon';

const baseUrl = 'https://pokeapi.co/api/v2';

export const getTypesOfPokemons = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(startLoading());
            const { data } = await Axios.get<IPokemonTypes>(baseUrl + '/type');

            dispatch(setTypesOfPokemons(data));
        } catch (error) {
            console.error(error);
            dispatch(setError(error.toString()));
        } finally {
            dispatch(finishLoading());
        }
    };
};

export const setTypesOfPokemons = (
    pokemonTypes: IPokemonTypes
): Action<IPokemonTypes> => ({
    type: types.pokemonGetTypes,
    payload: pokemonTypes,
});

export const setSelectedPokemonType = (
    pokemonTypeSelected: IPokemonTypesResult
): Action<IPokemonTypesResult> => ({
    type: types.pokemonSelectedType,
    payload: pokemonTypeSelected,
});

export const getPokemonsByType = (pokemonType: IPokemonTypesResult) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data: pokemonPartial } = await Axios.get<IPokemonType>(
                pokemonType.url
            );
            const pokemonsPromise = pokemonPartial.pokemon
                .filter((pp, index) => index < 15)
                .map((pp) => Axios.get<IPokemon>(pp.pokemon.url));

            const axiosResponse = await Promise.all(pokemonsPromise);
            const pokemons = axiosResponse.map((response) => response.data);

            dispatch(setPokemonsByType(pokemons));

        } catch (error) {
            console.error(error);
            dispatch(setError(error.toString()));
        } finally {

        }
    };
};

export const setPokemonsByType = (
    pokemons: IPokemon[]
): Action<IPokemon[]> => ({
    type: types.pokemonGetByType,
    payload: pokemons,
});
