import React, { useState } from 'react'
import { auth } from '../../base'
import { NormalView } from './NormalView'
import { PremiumView } from './PremiumView'

export const Courses = () => {
    const [userType, setUserType] = useState('')

    auth.onAuthStateChanged(user => {
        if(user) {
            user.getIdTokenResult().then(idTokenResult => {
                if (idTokenResult.claims.premium) {
                    setUserType('premium')
                }
            })
        }
    })

    return (
        <div id='appCapsule'>
            {userType==='premium' ? (<PremiumView />) : (<NormalView />)}
        </div>
    )
}