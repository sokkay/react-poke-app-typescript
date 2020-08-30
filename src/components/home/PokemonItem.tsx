import React from 'react';
import { IPokemon } from '../../interfaces/ipokemon';
import { PokemonItemCard } from './PokemonItemCard';
import { upFirstLetter } from '../../helpers/upFirstLetter';

interface IPokemonItemProps {
    pokemon: IPokemon;
}

export const PokemonItem = ({ pokemon }: IPokemonItemProps) => {
    return (
        <div className='flex w-full justify-between flex-row py-10 px-5'>
            <PokemonItemCard pokemon={pokemon} />
            <div className='flex-auto flex justify-center'>
                <ul className='w-7/12'>
                    {pokemon.stats.map((stat, index) => (
                        <li key={index} className='flex justify-between'>
                            <div style={{flex: '2 1 0%'}} className='text-right'>{upFirstLetter(stat.stat.name)}</div>
                            <div style={{flex: '1 1 0%'}} className='text-center'>{stat.base_stat}</div>
                            <div style={{flex: '2 1 0%'}} className='bg-gray-400 rounded-md my-1'></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
