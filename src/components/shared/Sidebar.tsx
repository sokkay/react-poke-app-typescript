import React from 'react';

const typesPokemon = [
    'Normal',
    'Fuego',
    'Agua',
    'Planta',
    'Eléctrico',
    'Hielo',
    'Lucha',
    'Veneno',
];

export const Sidebar = () => {
    return (
        <div className='px-3 py-3 w-2/12 shadow-xs overflow-y-auto flex-col'>
            {typesPokemon.map((tp) => (
                <button
                    key={tp}
                    className='btn py-2 w-full bg-red-600 my-3 text-white active:bg-red-500 focus:outline-none rounded-md'
                >
                    <p>{tp}</p>
                </button>
            ))}
        </div>
    );
};
