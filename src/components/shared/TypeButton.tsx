import React from 'react';
import { IPokemonTypesResult } from '../../interfaces/pokemonTypes';
import { useDispatch } from 'react-redux';
import { setSelectedPokemonType, getPokemonsByType } from '../../actions/pokemons';

interface Props {
    pt: IPokemonTypesResult;
    selected: boolean;
    color: string;
}

export const TypeButton = ({ pt, selected, color }: Props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedPokemonType(pt));
        dispatch(getPokemonsByType(pt));
    };

    let buttonStyle: React.CSSProperties;
    let textStyle: React.CSSProperties;

    if (selected) {
        buttonStyle = {
            backgroundColor: color,
        };
        textStyle = {
            color: 'white',
        };
    } else {
        buttonStyle = {
            backgroundColor: 'white',
        };
        textStyle = {
            color: color,
        };
    }

    return (
        <button
            onClick={handleClick}
            style={buttonStyle}
            type='button'
            disabled={selected}
            className='btn py-2 w-full my-3 font-bold focus:outline-none rounded-md'
        >
            <p style={textStyle}>{pt.name.toUpperCase()}</p>
        </button>
    );
};
