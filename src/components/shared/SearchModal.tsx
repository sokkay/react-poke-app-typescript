import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    setToggle: Function;
}

export const SearchModal = ({ setToggle }: ModalProps) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setToggle(false);
    };

    return (
        <>
            <div
                className='fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50'
                onClick={handleClick}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className='relative mx-auto w-auto max-w-xl bg-white p-4 rounded-md shadow-xl flex flex-col justify-between'
                >
                    <div className='w-full flex flex-row items-center rounded-sm border-2 border-green-600 text-lg py-1 px-2'>
                        <FontAwesomeIcon icon={faSearch} size='1x' />
                        <input
                            className='w-full ml-4 focus:outline-none'
                            type='text'
                            autoComplete='off'
                            placeholder='Search a Pokemon'
                            autoFocus
                        />
                    </div>
                    <div className='w-full mt-4'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Alias pariatur earum, laudantium aut voluptate
                        dolore commodi. Explicabo nihil in necessitatibus cumque
                        id molestiae magni accusamus omnis corrupti! Eveniet,
                        soluta id.
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='absolute inset-0 z-40 opacity-25 bg-black h-screen w-screen'></div>
        </>
    );
};
