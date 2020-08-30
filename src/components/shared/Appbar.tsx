import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchModal } from './SearchModal';

export const Appbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(!toggle);
    return (
        <div className='bg-white h-16 py-4 shadow-md flex flex-row justify-between px-12 z-20 sticky top-0'>
            <div></div>
            <div>
                <div
                    className='border border-gray-300 rounded-lg py-2 px-4 leading-normal flex-row flex items-center cursor-pointer bg-white shadow-md'
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faSearch} size='1x' />
                    <h4 className='ml-4 text-gray-500'>Search a Pokemon</h4>
                </div>
            </div>
            <div></div>
            {toggle && <SearchModal setToggle={setToggle} />}
        </div>
    );
};
