import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navigator from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router";
import '../index.css';


export default function Header() {

  const mandarLink = () => {
    window.location.href = "https://www.unimet.edu.ve/"
  }


  return (

    <div className="sticky-top">
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img
              src="imagenes/Metrologo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="img"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/sabasNieves">Rutas</Nav.Link>
              <Nav.Link href="/Guias">Guias</Nav.Link>
              <Nav.Link href="/Foro">Reviews</Nav.Link>
              <Nav.Link href="/Contacto">Contacto</Nav.Link>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button> {/* Botón con variante clara */}
              </Form>
            </Nav>

            <Nav
              className="ms-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/Register">Registrarte</Nav.Link>
              <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 
           <nav className=''>
            
            <ul className="flex bg-amber-700 justify-around text-4xl text-nowrap text-white font-bold">
                <img src="imagenes/Metrologo.png" className="w-33 h-33 hover:opacity-65" onClick={mandarLink}></img>
                    <Link to='/home' class='hover:bg-orange-400 py-12 px-8'>Inicio</Link>
                    <Link to='/SabasNieves' class='hover:bg-orange-400 py-12 px-8'>Rutas</Link>
                    <Link to='/Contacto'className="flex gap-20 py-12 hover:bg-orange-400">Contacto</Link>
                    <Link to='/Foro'className="flex gap-5 py-12 hover:bg-orange-400">Foro</Link>
                    <Link to='/login' className="flex gap-5 py-12 hover:bg-orange-400">Iniciar sesion</Link>
                    <Link to='/Register'className="flex gap-5 py-12 hover:bg-orange-400">Registrarme</Link>
                    
            </ul>
        </nav>
        */}
    </div>

  )
}
