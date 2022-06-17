import React, { useRef } from 'react'
import { auth } from '../../base'
import { InfoModal } from '../utils/InfoModal'

export const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const login = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await auth.signInWithEmailAndPassword(email, password)
    }

    return (
        <InfoModal modalId="login-form" modalTitle="Acccess to the course">
            <div className="container">
                <div className="row justify-content-center">
                <h2>If you already have an account, make login!</h2>
                <input type="email" ref={emailRef} className="form-control mt-1" placeholder="Email" />
                <input type="password" ref={passwordRef} className="form-control mt-1" placeholder="Contraseña" />
                <button type="button" className="btn btn-primary btn-block mt-3 mb-2" onClick={login} data-dismiss="modal">
                    Login
                </button>
                </div>
            </div>
        </InfoModal>         
    )
}