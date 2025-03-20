import React, { useState } from 'react'

import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from './credentials'
import { useNavigate } from "react-router";
import { Link } from 'react-router'
import Header from '../components/NavBar';


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigation = useNavigate();

    const handLeLogin = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Por favor complete los datos!');
            return;
        }
        if (error.message == 'Firebase:  Error (auth/invalid-email).') {
            setError('T credenciales  inválidas');

        } else if (error.code == '  Firebase:  Error (auth/user-not-found).') {
            setError('El correo electrónico no está registrado. Debes crear una cuenta.');
        } else if (error.code == '  Firebase:  Error (auth/wrong-password).') {
            setError('contraseña  incorrecta!');
        } else {
            setError('Ocurrió un error. Inténtalo de nuevo.');
        }
        setLoading(false);
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user.user.uid)
            console.log(user.user.email)
            setLoading(false);
            setError('');
            navigation('/home')

        } catch (error) {
            console.log(error)

        }
    }

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user.email);

            setLoading(false);
            setError('');
            navigation('/home');
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat bg-center z-[-1]"
                    style={{
                        backgroundImage: "url(/imagenes/s.jpg)",
                    }}
                ></div>
                {loading && <div className="">Guardando datos...</div>}

                <form
                    onSubmit={handLeLogin}
                    className="flex flex-col bg-amber-50 w-full max-w-md p-6 rounded-2xl shadow-2xl"
                >
                    <p className="mb-6 text-3xl font-extrabold text-center" style={{color:'#d90057'}}>
                        Login
                    </p>
                   
                    <label className="text-xl font-extrabold">
                        Email:
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-1 ml-1 rounded-2xl font-extralight w-full p-2"
                            type="email"
                            name="email"
                        />
                        {error && <div className="text-red-600 font-extralight">{error}</div>}
                    </label>
                    <label className="text-xl font-extrabold">
                        Contraseña:
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-1 ml-1 rounded-2xl font-extralight w-full p-2"
                            type="password"
                            name="password"
                        />
                        {error && <div className="text-red-600 font-extralight text-2xl">{error}</div>}
                    </label>
                    <button className="custom-button" type="submit">
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="custom-button"
                    >
                        <img src="imagenes/google.svg" alt="Google" className="social-icon" />
                        <p> Inicia sesión con Google</p>
                    </button>
                    <Link
                        className="text-center" style={{padding:'10px 20px', color:'#d90057'}}
                        to="/register"
                    >
                        ¿No tienes cuenta? Regístrate!
                    </Link>

                    <Link className="text-center" style={{padding:'10px 20px', color:'#d90057'}} to="/home">
                        Ir a Inicio.
                    </Link>
                </form>
            </div>

        </>
    )
}