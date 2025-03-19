import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/NavBar';


export default function CruzP (){
    return(
        <>

            <Header/>
                <div class='mt-10 ml-30 mr-30'>
                    <h1 class='text-7xl font-bold'>Cruz de los Palmeros</h1>
                    <p class='text-2xl py-2'>La ruta hacia la Cruz de los Palmeros, ubicada en el Parque Nacional El Ávila, es una experiencia desafiante pero enriquecedora para los senderistas. Una de las rutas más comunes comienza en Sabas Nieves, un punto de acceso popular en Caracas. Desde allí, el sendero asciende hacia el Pico Oriental, pasando por áreas boscosas y miradores con vistas espectaculares de la ciudad.</p>
                    <p class='text-2xl py-2'>El recorrido tiene una distancia aproximada de 6,4 km y se considera de dificultad alta debido a las pendientes pronunciadas y el terreno irregular. Durante el trayecto, se atraviesan puntos emblemáticos como el Peñón Diamante, donde se encuentra la Cruz de los Palmeros. Este punto ofrece una vista panorámica impresionante y es ideal para descansar y disfrutar del paisaje.</p>
                    <p class='text-2xl py-2'>Es importante llevar suficiente agua, alimentos, protector solar y ropa adecuada para el clima de montaña. Además, se recomienda iniciar temprano en la mañana para aprovechar las mejores condiciones climáticas y evitar el calor del mediodía.</p>
                    
                    <h1 class='text-7xl font-bold py-10'>Imagenes:</h1>
                </div>

             
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="w-full md:w-1/3 relative rounded-b-lg overflow-hidden">
                        <img className="w-full h-64 object-cover rounded-b-lg" src="imagenes/cruz1.jpg" alt="Piedra 1" />
                    </div>
                    <div className="w-full md:w-1/3 relative rounded-b-lg overflow-hidden">
                        <img className="w-full h-64 object-cover rounded-b-lg" src="imagenes/cruz2.jpg" alt="Piedra 2" />
                    </div>
                    <div className="w-full md:w-1/3 relative rounded-b-lg overflow-hidden">
                        <img className="w-full h-64 object-cover rounded-b-lg" src="imagenes/cruz3.jpg" alt="Piedra 3" />
                    </div>
                    </div>
                    

            <Footer/>


        
        
        </>
    )
}