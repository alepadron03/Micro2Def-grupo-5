import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navigator from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router";



export default function Header() {

    const mandarLink = () => {
        window.location.href = "https://www.unimet.edu.ve/"
    }


    return (

        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/home">
                        <img
                            src="imagenes/Metrologo.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/home">Inicio</Nav.Link>
                            <Nav.Link href="/sabasNieves">Rutas</Nav.Link>
                            <Nav.Link href="/home">Guías</Nav.Link>

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>

                        <Nav className="ms-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link href="/Register">Registrarte</Nav.Link>
                            <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <nav className=''>

                <ul className="flex bg-blue-800 justify-around text-4xl text-nowrap text-white font-bold">
                    <img src="imagenes/Metrologo.png" className="w-33 h-33 hover:opacity-65" onClick={mandarLink}></img>
                    <Link to='/home' class='hover:bg-blue-700 py-12 px-10'>INICIO</Link>
                    <Link to='/sabasNieves' class='hover:bg-blue-700 py-12 px-10'>RUTAS</Link>
                    <Link to='/login' className="flex gap-10 py-12 hover:bg-blue-700">INICIAR SESION</Link>
                    <Link to='/Register' className="flex gap-10 py-12 hover:bg-blue-700">REGISTRAR</Link>
                </ul>
            </nav>
        </div>

    )
}