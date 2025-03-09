import { getAuth,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { app } from "../credentials";
import{useState} from "react";
import { useNavigate} from "react-router";
import { Link } from "react-router";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function Register(){
    const navigation= useNavigate();

    const[name, setName]=useState('')
    const[email,setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[loading, setLoading]=useState(false)
    const[error, setError]=useState('')

    const handLeRegister= async (e)=>{


        e.preventDefault()

        if (!name || !email || !password) {
            setError('Por favor complete los datos!');
            return; // Detiene la ejecución si hay campos vacíos
        }
       
       try {
        setLoading(true)
        const nombreRegistrado= await createUserWithEmailAndPassword(auth,email,password)
            console.log(nombreRegistrado.user.email)
            
            setName('')
            setEmail('')
            setPassword('')
            setLoading(false)
            navigation('/home')
        
       } catch (error) {
        console.log(error)
        setError(error.mesagge)
       }
    }
    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user.email);

            setLoading(false);
            setError('');
            navigate('/home');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
        }
    



       
    

    return(
        <div className='w-screen h-screen flex justify-center items-center '>
            {loading && <div className=''>Guardando datos...</div>}
            {error && <div className='text-red-600'>{error}</div>}
            <form onSubmit={handLeRegister} className='flex flex-col bg-amber-50-amber-100 w-lg h-1/2 justify-center items-center gap-5 
            rounded-2xl shadow-2xl  ' >
                <h1 className='mb-10 text-4xl font-semibold'>Crea tu cuenta</h1>
                <Link className='text-2xl text-orange-400' to='/login' >Ya tienes cuenta? Inicia sesión!</Link>
                <label className='text-xl'>
                    Nombre: 
                    <input value={name} onChange={(e)=> setName(e.target.value)} className='border-1 ml-1 rounded-2xl' type="text" name="name"  />
                </label>
                <label className='text-xl' >
                    Email: 
                    <input value={email}  onChange={(e)=> setEmail(e.target.value)}className='border-1 ml-1 rounded-2xl' type="email" name="email"  />
                </label>
                <label className='text-xl'>
                    Password: 
                    <input value={password}  onChange={(e)=> setPassword(e.target.value)}className='border-1 ml-1 rounded-2xl' type="password" name=" password"  />
                </label>
                
                <button className='bg-orange-300 py-3 px-4 text-3xl rounded-2xl cursor-pointer' type="submit">Registrar</button>
                <button type="button" onClick={handleGoogleSignIn} className='bg-orange-300 py-3 px-4 text-3xl rounded-2xl cursor-pointer mt-4'>
                <img src="imagenes/google.svg" alt="Google" className='social-icon'/>
                </button>
            </form>


        </div>
    )
}
