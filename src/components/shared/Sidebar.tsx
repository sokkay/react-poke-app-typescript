import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonTypeState } from '../../reducers/pokemonTypesReducer';
import { TypeButton } from './TypeButton';
import { PokemonTypeSelectedState } from '../../reducers/pokemonTypeSelectedReducer';
import { pokemonTypesColor } from '../../helpers/pokemonTypeColor';

export const Sidebar = () => {
    const { pokemonTypes } = useSelector<
        { pokemonTypes: PokemonTypeState },
        PokemonTypeState
    >((state) => state.pokemonTypes);

    const { type } = useSelector<
        { pokemonTypeSelected: PokemonTypeSelectedState },
        PokemonTypeSelectedState
    >((state) => state.pokemonTypeSelected);

    return (
        <div className='px-3 py-3 w-56 hidden sm:flex shadow-xs overflow-y-auto sm:flex-col h-full'>
            {pokemonTypes.map((pt, index) => (
                <TypeButton
                    key={pt.name}
                    pt={pt}
                    color={pokemonTypesColor[index].color}
                    selected={type?.name === pt.name}
                />
            ))}
        </div>
    );
};