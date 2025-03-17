import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navBar'

export default function NotFound (){
    return(
        <>

            <Navbar/>
                <div class='mt-10 ml-30 mr-30'>
                    <h1 class='text-7xl font-bold'>Sabas Nieves</h1>
                    <p class='text-2xl py-2'>Sabas Nieves es una de las rutas más populares para subir al Parque Nacional Waraira Repano, conocido también como El Ávila, en Caracas, Venezuela. Esta ruta comienza en la urbanización Altamira y es frecuentada por personas que buscan hacer ejercicio, disfrutar de la naturaleza y obtener una vista panorámica de la ciudad.</p>
                    <p class='text-2xl py-2'>Inicio de la Ruta: La entrada a Sabas Nieves se encuentra en la 10ma transversal de Altamira. Puedes llegar caminando, en automóvil o en autobús desde la Plaza Francia de Altamira.</p>
                    <p class='text-2xl py-2'>Terreno y Dificultad: El camino es ancho y de tierra rojiza. La subida es bastante empinada, lo que la hace desafiante para algunos. Los más atléticos pueden subir en 30-45 minutos, mientras que otros pueden tardar entre 60-90 minutos.</p>
                    <p class='text-2xl py-2'>Puntos de Interés: A lo largo del camino, encontrarás una plataforma con equipos para hacer ejercicio, una pequeña gruta con una imagen de la Virgen adornada con flores y velas, y una fuente de agua fresca de la montaña.</p>
                    <p class='text-2xl py-2'>Vistas y Naturaleza: Durante la subida, puedes disfrutar de la vegetación espesa y vistas impresionantes de Caracas. Es común ver a personas descansando en bancos estratégicamente ubicados para contemplar la ciudad.</p>
                    <p class='text-2xl py-2'>Destino Final: Al llegar a Sabas Nieves, puedes continuar hacia otros puntos como Loma Serrano, No te Apures, y eventualmente llegar a la Silla de Caracas, el Pico Occidental o el Pico Oriental</p>
                    
                    <h1 class='text-7xl font-bold py-10'>Imagenes:</h1>
                </div>

                <div className='flex align-middle gap-10 justify-center'>
                    <div class="relative max-w-fit rounded-b-lg">
                        <img className="h-150 w-fill" src="imagenes/SabasNieveImagen2.png"></img>
                    </div>
                    <div class="relative max-w-fit rounded-b-lg">
                        <img className="h-150 w-fill" src="imagenes/SabasNieveImagen3.png"></img>
                    </div>
                    <div class="relative max-w-fit rounded-b-lg">
                        <img className="h-150 w-fill" src="imagenes/SabasNieveImagen4.png"></img>
                    </div>
                </div>


            <Footer/>


        
        
        </>
    )
}