import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/NavBar';

export default function PicoNa (){
    return(
        <>

            <Header/>
                <div class='mt-10 ml-30 mr-30'>
                    <h1 class='text-7xl font-bold'>Pico Naiguata</h1>
                    <p class='text-2xl py-2'>Es el punto más alto de la Cordillera de la Costa en Venezuela, es un destino emblemático para los amantes del senderismo. Con una altitud de 2.765 metros, ofrece vistas espectaculares y una experiencia desafiante pero gratificante.</p>
                    <p class='text-2xl py-2'>Tienes dos maneras de llegar:.</p>
                    <p class='text-2xl py-2'>La ruta más común comienza en la urbanización Terrazas de Ávila, en Caracas, desde el puesto de guardaparques Galindo. El recorrido tiene una distancia aproximada de 16,96 km ida y vuelta. Durante el ascenso, se pasa por puntos como el Topo Arvelo y el Rancho Miguel Delgado, donde es posible encontrar agua. La última etapa incluye una subida empinada hasta la cima, conocida como "La Fila", desde donde se puede disfrutar de vistas panorámicas impresionantes</p>
                    <p class='text-2xl py-2'>La otra manera es, desde el Puesto de Guardaparques La Julia. Esta ruta, de aproximadamente 14 km, puede completarse en unas seis horas, dependiendo del ritmo y las paradas. Es ideal para quienes buscan una experiencia nocturna, ya que el ascenso de noche permite evitar el desgaste causado por el sol.</p>
                    <p class='text-2xl py-2'>Es una subida subida de alta dificultad, por lo que se recomienda ir de dia, con mucha energia y bastante agua.</p>
   
                    
                    <h5 class='text-7xl font-bold py-10'>Imagenes:</h5>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <div className="w-full md:w-1/3 relative rounded-b-lg overflow-hidden">
                        <img className="w-full h-64 object-cover rounded-b-lg" src="imagenes/picona1.jpg" alt="Piedra 1" />
                    </div>
                    <div className="w-full md:w-1/3 relative rounded-b-lg overflow-hidden">
                        <img className="w-full h-64 object-cover rounded-b-lg" src="imagenes/picona2.jpg" alt="Piedra 2" />
                    </div>
                    <div className="w-full md:w-1/3 relative rounded-b-lg overflow-hidden">
                        <img className="w-full h-64 object-cover rounded-b-lg" src="imagenes/picona3.jpg" alt="Piedra 3" />
                    </div>
                    </div>
                    



            <Footer/>


        
        
        </>
    )
}