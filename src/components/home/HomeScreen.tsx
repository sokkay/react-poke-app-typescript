import React from 'react';
import { useSelector } from 'react-redux';
import { IPokemonState } from '../../reducers/pokemonReducer';
import { NothingSelected } from './NothingSelected';
import { PokemonItem } from './PokemonItem';
import { Appbar } from '../shared/Appbar';
import ReactLoading from 'react-loading';
import { IPokemonUIState } from '../../reducers/pokemonUIReducer';

export const HomeScreen = () => {
    const { pokemons } = useSelector<{ pokemon: IPokemonState }, IPokemonState>(
        (state) => state.pokemon
    );
    const { loading } = useSelector<
        { pokemonUI: IPokemonUIState },
        IPokemonUIState
    >((state) => state.pokemonUI);

    if (pokemons.length === 0) return <NothingSelected />;

    return (
        <div className='w-full h-full overflow-y-auto bg-gray-200'>
            <Appbar />
            {loading ? (
                <div className='w-full h-full flex justify-center items-center'>
                    <ReactLoading type='bubbles' color='#a32641' />
                </div>
            ) : (
                <div className='animate__animated animate__fadeIn'>
                    {pokemons.map((poke) => (
                        <PokemonItem key={poke.id} pokemon={poke} />
                    ))}
                </div>
            )}
        </div>
    );
};
