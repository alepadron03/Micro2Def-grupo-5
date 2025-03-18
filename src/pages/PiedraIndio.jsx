import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navBar'

export default function PiedraIndio (){
    return(
        <>

            <Navbar/>
                <div class='mt-10 ml-30 mr-30'>
                    <h1 class='text-7xl font-bold'>Piedra el Indio</h1>
                    <p class='text-2xl py-2'>La ruta hacia la Piedra El Indio, ubicada en el Parque Nacional El Ávila, es una experiencia única para los amantes del senderismo en Caracas. Este destino ofrece vistas espectaculares y un ambiente tranquilo para disfrutar de la naturaleza.</p>
                    <p class='text-2xl py-2'>Tenemos dos formas para llegar, te las explicamos a continuacion</p>
                    <p class='text-2xl py-2'>Una de las rutas más populares comienza en Los Chorros, específicamente en la entrada conocida como Cachimbo. Desde allí, el sendero asciende hasta la Piedra El Indio, pasando por puntos de interés como un mirador con vistas impresionantes de Caracas. El recorrido tiene una distancia aproximada de 6,3 km y se considera de dificultad moderada a alta debido a las pendientes pronunciadas.</p>
                    <p class='text-2xl py-2'>Otra opción es tomar el sendero que pasa por la Quebrada Quintero. Este camino incluye una pequeña cascada y un entorno boscoso antes de llegar a la piedra. Aunque el inicio es relativamente sencillo, el tramo final puede ser más desafiante debido a la inclinación del terreno.</p>
                    <p class='text-2xl py-2'>La recompensa al llegar a la Piedra El Indio es una vista panorámica que hace que el esfuerzo valga la pena.</p>

                    
                    <h1 class='text-7xl font-bold py-10'>Imagenes:</h1>
                    <div className="flex flex-wrap justify-center gap-4">
                    <div className="w-full md:w-1/3 relative rounded-b-lg overflow-hidden">
                        <img className="w-full h-64 object-cover rounded-b-lg" src="imagenes/piedra1.jpg" alt="Piedra 1" />
                    </div>
                    <div className="w-full md:w-1/3 relative rounded-b-lg overflow-hidden">
                        <img className="w-full h-64 object-cover rounded-b-lg" src="imagenes/piedra2.jpg" alt="Piedra 2" />
                    </div>
                    <div className="w-full md:w-1/3 relative rounded-b-lg overflow-hidden">
                        <img className="w-full h-64 object-cover rounded-b-lg" src="imagenes/piedra3.jpg" alt="Piedra 3" />
                    </div>
                    </div>
                    </div>

            <Footer/>


        
        
        </>
    )
}