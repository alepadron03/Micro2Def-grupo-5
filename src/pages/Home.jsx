import React from 'react'
import { useNavigate } from "react-router";
import { Link } from 'react-router'
import Header from '../components/NavBar';
import Footer from '../components/Footer';
import Rutas from '../components/Rutas';
import Perks from '../components/Perks';
export default function Home() {

    return (
        <>
            <Header />
            <div className="position-relative">
                <div className="d-flex justify-content-center w-100">
                    <img
                        src="imagenes/fotoPrincipal.jpg"
                        width="100%"
                        height="75%"
                        style={{ objectFit: 'cover' }}
                        alt="Imagen principal"
                    />
                </div>
                <div className="perks-container">
                    <Perks />
                </div>
            </div>

            <div className="rutas-container">
                <Rutas />
            </div>
            <Footer />

        </>
    )
}