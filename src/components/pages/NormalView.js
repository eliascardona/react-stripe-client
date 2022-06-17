import React from 'react'
import { auth } from '../../base'

export const NormalView = () => {
    const logOut = async () => {
        await auth.signOut()
        window.location.reload()
    }
    return (
        <div className='container'>
            <h1>Normal view</h1>
            <button type='button' className='btn btn-primary mt-2' onClick={logOut}>Cerrar sesión</button>
        </div>
    )
}