import React, { Fragment } from 'react';
import { IPokemon } from '../../interfaces/ipokemon';
import { upFirstLetter } from '../../helpers/upFirstLetter';
import { pokemonTypesColor } from '../../helpers/pokemonTypeColor';

interface Props {
    pokemon: IPokemon;
}

export const PokemonItemCard = ({ pokemon }: Props) => {
    const image =
        pokemon.sprites.other?.['official-artwork'].front_default || '';

    const typeStyle = (name: string): React.CSSProperties => ({
        color: pokemonTypesColor.find((p) => p.name === name)?.color || 'red',
    });
    return (
        <div className='flex-auto flex justify-center'>
            <div className='h-auto w-64 shadow-md rounded-md flex flex-col items-center p-4 relative bg-white'>
                <div
                    style={{
                        position: 'absolute',
                        fontSize: '4.5rem',
                    }}
                    className='font-extrabold text-gray-400'
                >
                    <p>#{pokemon.id}</p>
                </div>
                <div className='absolute -mt-2 -mr-2 rounded-full shadow-md bg-white h-10 w-10 right-0 top-0 font-sans font-bold flex justify-center items-center'>
                    <p className='text-xs'>{pokemon.weight / 10}Kg</p>
                </div>
                <div className='absolute -mt-2 -ml-2 rounded-full shadow-md bg-white h-10 w-10 left-0 top-0 font-sans font-bold flex justify-center items-center'>
                    <p className='text-xs'>{pokemon.height / 10}m</p>
                </div>
                <img
                    src={image}
                    alt={pokemon.name}
                    width={90}
                    className='z-10'
                />
                <h3 className='text-xl font-sans font-bold'>
                    {upFirstLetter(pokemon.name)}
                </h3>
                <h5>
                    {pokemon.types.map((type, index) => {
                        return (
                            <Fragment key={type.type.name}>
                                {index > 0 && (
                                    <span>
                                        <b>·</b>
                                    </span>
                                )}
                                <span
                                    className='text-sm font-bold'
                                    style={typeStyle(type.type.name)}
                                >
                                    {' ' + upFirstLetter(type.type.name) + ' '}
                                </span>
                            </Fragment>
                        );
                    })}
                </h5>
            </div>
        </div>
    );
};
