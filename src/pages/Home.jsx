import React from 'react'
import { useNavigate} from "react-router";
import { Link } from 'react-router'
import Navbar from '../components/navBar';
import Footer from '../components/Footer';


export default function Home(){
    
    return(
        <>
            <Navbar />
            <header className='text-center text-5xl font-medium py-10 bg-white'>Excursionemos como comunidad unimetana!</header>

            <header className ="text-center text-4xl font-normal py-10 bg-blue-200">Explora alguna de las opciones que nos llevan a nuestros destinos</header>

            <div className='flex align-middle bg-blue-200 gap-10 justify-center'>
                <div class="relative max-w-fit mt-10 mb-10 rounded-b-lg">
                    <img className="h-75 w-75" src="imagenes/SabasNieves.png"></img>
                    <div className="absolute inset-0 bg-black opacity-0 rounded-md hover:opacity-75 duration-300 ">
                        <div className="absolute inset-0 ">
                            <Link to="/sabasNieves" className="text-white text-2xl font-bold m-6">Sabas Nieves</Link>
                            <p className="text-white text-2xl font-bold m-6">Un muy buen puente facil y no tan dificil para cualquier persona</p>
                            <p className="text-white text-2xl font-bold m-6">DIFICULTAD: FACIL</p>
                        </div>
                    </div>
                </div>        

                <div class="relative max-w-fit  mt-10 mb-10">
                    <img className="h-75 w-75" src="imagenes/PicoIndio.png"></img>
                    <div className="absolute inset-0 bg-black opacity-0 rounded-md hover:opacity-75 duration-300 ">
                        <div className="absolute inset-0 ">
                            <p className="text-white text-2xl font-bold m-6">Piedra del Indio via Quebrada Quintero</p>
                            <p className="text-white text-2xl font-bold m-6">Tiene una dificultad alta para las personas con mas experiencias</p>
                            <p className="text-white text-2xl font-bold m-6">DIFICULTAD: DIFICIL</p>
                        </div>
                    </div>
                </div>   

                <div class="relative max-w-fit  mt-10 mb-10">
                    <img className="h-75 w-75" src="imagenes/PicoNaiguata.jpg"></img>
                    <div className="absolute inset-0 bg-black opacity-0 rounded-md hover:opacity-75 duration-300 ">
                        <div className="absolute inset-0 ">
                            <p className="text-white text-2xl font-bold m-6">Pico Naiguata</p>
                            <p className="text-white text-2xl font-bold m-6">Larga subida no para principiantes</p>
                            <p className="text-white text-2xl font-bold m-6">DIFICULTAD: DIFICIL</p>
                        </div>
                    </div>
                </div>   

                <div class="relative max-w-fit mt-10 mb-10">
                    <img className="h-75 w-75" src="imagenes/CruzDeLosPalmeros.jpg"></img>
                    <div className="absolute inset-0 bg-black opacity-0 rounded-md hover:opacity-75 duration-300 ">
                        <div className="absolute inset-0 ">
                            <p className="text-white text-2xl font-bold m-6">Cruz de Los Palmeros</p>
                            <p className="text-white text-2xl font-bold m-6">Subida Larga no para Principiantes</p>
                            <p className="text-white text-2xl font-bold m-6">DIFICULTAD: DIFICIL</p>
                        </div>
                    </div>
                </div>   
            </div>

            <header class='flex justify-center text-5xl font-bold py-10'>¿Quienes somos?</header>

            <div class='flex justify-center ml-40 mr-40 items-center'>
            <p class='text-4xl'>Somos un grupo de estudiantes de la unimet que deseamos traer a la universidad una pagina para las actividades de las rutas de nuestras queridas montañas. Ellas nos brindan su proteccion y nos trae a nosotros oportunidades para explorar su magnifica flora y fauna.</p>
            <img class='w-1/2 h-1/2' src='imagenes/FotoUnimet.jpg'></img>
            </div>

            <Footer/>

        </>
    )
}