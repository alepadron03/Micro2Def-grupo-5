import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./credentials";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { getFirestore, setDoc, doc } from "firebase/firestore";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export default function Register() {
    const navigation = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handLeRegister = async (e) => {


        e.preventDefault()

        if (!name || !email || !password) {
            setError('Por favor complete los datos!');
            return;
        }

        try {
            setLoading(true)
            const nombreRegistrado = await createUserWithEmailAndPassword(auth, email, password)
            console.log(nombreRegistrado.user.email)
            await setDoc(doc(db, 'usuarios', nombreRegistrado.user.uid), {
                nombre: name,
                email: email,
                uid: nombreRegistrado.user.uid,
                dateCreacion: new Date()
            });
            setName('')
            setEmail('')
            setPassword('')
            setLoading(false)
            navigation('/home')

        } catch (error) {
            console.log(error)
            setError(error.message)
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
        }
    }







    return (
        <div className="w-screen h-screen flex justify-center items-center p-4 relative">
            <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center z-[-1]"
                style={{
                    backgroundImage: `url(imagenes/loginPageImage.jpg)`, // Usar url() para la imagen
                }}
            ></div>

            <form
                onSubmit={handLeRegister}
                className="flex flex-col bg-amber-50 w-full max-w-md p-6 rounded-2xl shadow-2xl"
            >
                <p className="mb-6 text-3xl font-extrabold text-center" style={{color:'#d90057'}}>
                    Crea tu cuenta
                </p>
                
                <Link className="text-xl text-blue-700 text-center" style={{color:'#d90057'}} to="/login">
                    ¿Ya tienes cuenta? Inicia sesión!
                </Link>
                <label className="text-xl font-extrabold">
                    Nombre:
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-1 ml-1 rounded-2xl font-extralight w-full p-2"
                        type="text"
                        name="name"
                    />
                </label>
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
                    {error && <div className="text-red-600 font-extralight">{error}</div>}
                </label>

                <button
                    className="custom-button"
                    type="submit"
                >
                    Registrar
                </button>
                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="custom-button"
                >
                    <img src="imagenes/google.svg" alt="Google" className="social-icon" />
                    <p> Registrate con Google</p>
                </button>
                <Link className="text-center" style={{padding:'10px 20px', color:'#d90057'}} to="/home">
                   Ir a Inicio                    
                </Link>
            </form>
            {loading && <div className="text-xl font-extrabold text-amber-50">Guardando datos...</div>}
        </div>
    )
}
