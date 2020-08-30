import React from 'react';
import { IPokemonTypesResult } from '../../interfaces/pokemonTypes';
import { useDispatch, useSelector } from 'react-redux';
import {
    setSelectedPokemonType,
    getPokemonsByType,
} from '../../actions/pokemons';
import { IPokemonUIState } from '../../reducers/pokemonUIReducer';

interface Props {
    pt: IPokemonTypesResult;
    selected: boolean;
    color: string;
}

export const TypeButton = ({ pt, selected, color }: Props) => {
    const dispatch = useDispatch();

    const {loading} = useSelector<{ pokemonUI: IPokemonUIState }, IPokemonUIState>((state) => state.pokemonUI);

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
            disabled={selected || loading}
            className='btn py-2 w-full my-3 font-bold focus:outline-none rounded-md'
        >
            <p style={textStyle}>{pt.name.toUpperCase()}</p>
        </button>
    );
};
