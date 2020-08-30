import React from 'react';
import { useSelector } from 'react-redux';
import { IPokemonState } from '../../reducers/pokemonReducer';
import { NothingSelected } from './NothingSelected';
import { PokemonItem } from './PokemonItem';
import { Appbar } from '../shared/Appbar';

export const HomeScreen = () => {
    const { pokemons } = useSelector<{ pokemon: IPokemonState }, IPokemonState>(
        (state) => state.pokemon
    );
    if (pokemons.length === 0) return <NothingSelected />;

    return (
        <div className='w-full h-full overflow-y-auto bg-gray-200'>
            <Appbar />
            <ul>
                {pokemons.map((poke) => (
                    <PokemonItem key={poke.id} pokemon={poke} />
                ))}
            </ul>
        </div>
    );
};
