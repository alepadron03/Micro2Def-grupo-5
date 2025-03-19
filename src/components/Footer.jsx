import React from "react";
import { Link } from "react-router";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {

    const volverArriba = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        < div className="custom-navbar">
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Foro">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Contacto">Contacto</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Agentes
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Navbar.Brand className="d-flex justify-content-center w-100" href="/home">
                <img
                    src="http://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png"
                    width="150"
                    height="90"
                    alt="img"
                />
            </Navbar.Brand>
            {/* 
            <nav className='mt-30'>

                <ul className="flex bg-amber-800 justify-around text-4xl text-nowrap text-white font-bold ">

                    <button onClick={volverArriba} class='hover:bg-amber-700 py-10'>Regresar Al Tope de la pagina</button>

                </ul>
            </nav>
            */}
        </div>
    )
}