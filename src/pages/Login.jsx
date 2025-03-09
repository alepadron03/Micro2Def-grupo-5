import React, { useState } from 'react'

import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import{app} from './credentials'
import { useNavigate} from "react-router";
import { Link } from 'react-router'

const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();

export default function Login(){
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const[loading, setLoading]=useState(false)
    const[error, setError]=useState('')
    const navigation= useNavigate();

    const handLeLogin=async(e)=>{
        e.preventDefault()
        if(error.message=='Firebase:  Error (auth/invalid-email).'){
            setError('T credenciales  inválidas');
            
        } else if (error.code =='  Firebase:  Error (auth/user-not-found).') {
            setError('El correo electrónico no está registrado. Debes crear una cuenta.');
        } else if (error.code == '  Firebase:  Error (auth/wrong-password).') {
            setError('contraseña  incorrecta!');
        } else {
            setError('Ocurrió un error. Inténtalo de nuevo.');
        }
        setLoading(false);
        try {
            const user=await signInWithEmailAndPassword(auth ,email,password)
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

    return(
        <div className='w-screen h-screen flex justify-center items-center'> 
            {loading && <div className=''>Guardando datos...</div>}
            {error && <div className='text-red-600'>{error}</div>}
            <form onSubmit={handLeLogin} className='flex flex-col bg-amber-50-amber-100 w-lg h-1/2 justify-center items-center gap-5 
            rounded-2xl shadow-2xl  ' >
                <h1 className='mb-10 text-4xl font-semibold'>Login</h1>
                <Link  className='text-2xl text-orange-400' to='/register' >No tienes cuenta? Registrate! </Link>
                <label className='text-xl'>
                    Email: 
                    <input  value={email} onChange={(e)=> setEmail(e.target.value)}  className='border-1 ml-1 rounded-2xl' type="email" name=" email"  />
                    
                    
                </label>
                <label className='text-xl' >
                    Password: 
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} className='border-1 ml-1 rounded-2xl' type="password" name="password "  />
                </label>
                <button className='bg-orange-300 py-3 px-4 text-4xl rounded-2xl cursor-pointer font-extrabold' type="submit">Login</button>
                <button type="button" onClick={handleGoogleSignIn} className='bg-orange-300 py-3 px-4 text-3xl rounded-2xl cursor-pointer mt-4'>
                    
                    <img src="imagenes/google.svg" alt="Google" className='social-icon'/>
                </button>
            </form>


        </div>
    )
}