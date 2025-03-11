import React from "react";
import { Link } from "react-router";



export default function Navbar(){

    const mandarLink = () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" /// Deberia ser Link de Unimet
    }


    return(

        <nav className=''>
            
            <ul className="flex bg-blue-800 justify-around text-4xl text-nowrap text-white font-bold">
                <img src="imagenes/Metrologo.png" className="w-33 h-33 hover:opacity-65" onClick={mandarLink}></img>
                    <Link to='/home' class='hover:bg-blue-700 py-12 px-10'>INICIO</Link>
                    <Link to='/home' class='hover:bg-blue-700 py-12 px-10'>RUTAS</Link>
                    <Link to='/login' className="flex gap-10 py-12 hover:bg-blue-700">INICIAR SESION</Link>
                    <Link to='/Register'className="flex gap-10 py-12 hover:bg-blue-700">REGISTRAR</Link>
            </ul>
        </nav>
        
    )
}