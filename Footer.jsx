import React from "react";
import { Link } from "react-router";



export default function Footer(){

    const volverArriba = () => {
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }

    return(

        <nav className='mt-30'>
            
            <ul className="flex bg-amber-800 justify-around text-4xl text-nowrap text-white font-bold ">
                
                <button onClick={volverArriba} class='hover:bg-amber-700 py-10'>Inicio de la pagina</button>

            </ul>
        </nav>
        
    )
}