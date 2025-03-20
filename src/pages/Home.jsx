import React from 'react'
import { useNavigate } from "react-router";
import { Link } from 'react-router'
import Header from '../components/NavBar';
import Footer from '../components/Footer';
import Rutas from '../components/Rutas';
import Perks from '../components/Perks';
export default function Home() {

    return (
        <div style={{ backgroundColor: '#ececeb' }}>
            <Header />
            <div className="position-relative"> {/* Contenedor relativo para el texto */}
                <div className="d-flex justify-content-center w-100">
                    <img
                        src="imagenes/fotoPrincipal.jpg"
                        width="100%"
                        height="200px"
                        style={{ objectFit: 'cover' }}
                        alt="Imagen principal"
                        className="clipped-image"
                    />
                </div>
                <div className="overlay-text"> {/* Texto sobre la imagen */}
                    <h1>Bienvenido a tu próxima aventura</h1>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Perks />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h2>Nuestra Misión</h2>
                            <p>
                                Inspirar y facilitar la exploración de los parques nacionales de Venezuela, creando experiencias de viaje únicas y memorables para nuestros usuarios.
                            </p>
                        </div>
                        <div>
                            <h2>Nuestra Visión</h2>
                            <p>
                                Ser la plataforma líder en la promoción del turismo de aventura y naturaleza en Venezuela, conectando a viajeros con las maravillas naturales de nuestro país.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rutas-container">
                <Rutas />
            </div>
            <Footer />
        </div>
    )
}