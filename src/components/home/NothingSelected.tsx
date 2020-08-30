import React from 'react'
import { Appbar } from '../shared/Appbar'

export const NothingSelected = () => {
    return (
        <div className='w-full'>
            <Appbar/>
            <h1>No se ha seleccionado nada</h1>
        </div>
    )
}
