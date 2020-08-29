import React, { Fragment } from 'react';
import { IPokemon } from '../../interfaces/ipokemon';
import { pokemonTypesColor } from '../../helpers/pokemonTypeColor';

interface IPokemonItemProps {
    pokemon: IPokemon;
}

export const PokemonItem = ({ pokemon }: IPokemonItemProps) => {
    const image =
        pokemon.sprites.other?.['official-artwork'].front_default || '';

    const typeStyle = (name: string): React.CSSProperties => ({
        color: pokemonTypesColor.find((p) => p.name === name)?.color || 'red',
    });

    return (
        <div className='flex w-full justify-between flex-row py-10 px-5'>
            <div className='flex-auto flex justify-center'>
                <div>
                    <div className='h-auto w-64 shadow-md rounded-md flex flex-col items-center p-4 relative'>
                        <div
                            style={{
                                zIndex: -10,
                                position: 'absolute',
                                fontSize: '4.5rem',
                            }}
                            className='font-extrabold text-gray-400'
                        >
                            <p>#{pokemon.id}</p>
                        </div>
                        <div className='absolute rounded-full bg-white h-10 w-10 right-0 top-0 font-sans font-bold flex justify-center items-center'>
                            <p className='text-xs'>{pokemon.weight / 10}Kg</p>
                        </div>
                        <div className='absolute rounded-full bg-white h-10 w-10 left-0 top-0 font-sans font-bold flex justify-center items-center'>
                            <p className='text-xs'>{pokemon.height / 10}m</p>
                        </div>
                        <img src={image} alt={pokemon.name} width={90} />
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
                                            {' ' +
                                                upFirstLetter(type.type.name) +
                                                ' '}
                                        </span>
                                    </Fragment>
                                );
                            })}
                        </h5>
                    </div>
                </div>
            </div>
            <div className='flex-auto flex justify-center'></div>
        </div>
    );
};

function upFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
