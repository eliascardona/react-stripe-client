import React, { useRef } from 'react'
import { auth, db } from '../../base'

export const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()

    const signUp = async (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const res = await auth.createUserWithEmailAndPassword(email, password)
        await db.collection("users").doc(res.user.email).set({
            nombre: name,
            email: res.user.email,
            id: res.user.uid
        })
        window.location.reload()
    }

    const logOut = async () => {
        await auth.signOut()
        window.location.reload()
    }

    return (
        <>
            <input type="text" ref={nameRef} className="form-control mt-1" placeholder="Nombre" />
            <input type="email" ref={emailRef} className="form-control mt-1" placeholder="Email" />
            <input type="password" ref={passwordRef} className="form-control mt-1" placeholder="Contraseña" />
                <button type="button" className="btn mt-1 mr-2" onClick={signUp} 
                style={{color:'#fff', backgroundColor:'#ff414d'}}>
                    Sign up
                </button>
                <p className="ml-1 mt-1 mb-2 d-block">
                    If the page is reloaded, you signed up corrcetly. Else you entered a wrong email, you could log out
                    <span onClick={logOut} className="text-primary"> <u>here</u></span>
                </p>
        </>
    )
}