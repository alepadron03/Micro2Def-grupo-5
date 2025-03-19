import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';

export default function Rutas() {
    const scrollCarousel = (direction) => {
        const carousel = document.querySelector('.carousel');
        const scrollAmount = 300; // Ajusta la cantidad de desplazamiento
        carousel.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    };
    return (
        <Carousel>
            <Carousel.Item>
                <img src="imagenes/SabasNieves.png" text="Sabas Nieves" width="100%" height="100%" />
                <Carousel.Caption>
                    <h3>Sabas Nieves</h3>
                    <p> <FontAwesomeIcon icon={faStar}/> 3.5 (reviews)</p>
                    <p>Ruta perfecta para quienes esperan un buen desafío sin rozar en la dificultad extrema.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img text="Pico el Indio" src="imagenes/PicoIndio.png" width="100%" height="100%"/>

                <Carousel.Caption>
                    <h3>Pico el Indio</h3>
                    <p> <FontAwesomeIcon icon={faStar}/> 1.5 (reviews)</p>
                    <p>Tiene una dificultad alta para las personas con mas experiencia..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img  text="Pico Naiguata" src="imagenes/PicoNaiguata.jpg" width="100%" height="100%"/>

                <Carousel.Caption>
                    <h3>Pico Naiguatá</h3>
                    
                    <p> <FontAwesomeIcon icon={faStar}/> 4.5 (reviews)</p>
                    <p>
                    Subida pronunciada. No apto para principiantes.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img  text="Pico Naiguata" src="imagenes/CruzDeLosPalmeros.jpg" width="100%" height="100%"/>

                <Carousel.Caption>
                    <h3>Cruz de los Palmeros</h3>
                    <p> <FontAwesomeIcon icon={faStar}/> 2.5 (reviews)</p>

                    <p>
                    Subida pronunciada. No apto para principiantes.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};
/*
<div className="carousel-container">
            <button className="carousel-arrow left" onClick={() => scrollCarousel(-1)}>
                &#8249; 
            </button>

            <div className="carousel">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="imagenes/SabasNieves.png" />
                    <Card.Body>
                        <Card.Title>Sabas Nieves</Card.Title>
                        <Card.Text>
                            Un muy buen puente facil y no tan dificil para cualquier persona
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>
                                <FontAwesomeIcon icon={faStar} />
                                3.5 (reviews)
                            </ListGroup.Item>
                            <ListGroup.Item>Nivel de Dificultad: Leve</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="primary">Agendar</Button>
                        </Card.Body>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="imagenes/PicoIndio.png" />
                    <Card.Body>
                        <Card.Title>Piedra del Indio</Card.Title>
                        <Card.Text>
                        Tiene una dificultad alta para las personas con mas experiencia.
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>
                                <FontAwesomeIcon icon={faStar} />
                                1.5 (reviews)
                            </ListGroup.Item>
                            <ListGroup.Item>Nivel de Dificultad: Alto</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="primary">Agendar</Button>
                        </Card.Body>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="imagenes/PicoNaiguata.jpg" />
                    <Card.Body>
                        <Card.Title>Pico Naiguata</Card.Title>
                        <Card.Text>
                        Subida pronunciada. No apto para principiantes.
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>
                                <FontAwesomeIcon icon={faStar} />
                                4.5 (reviews)
                            </ListGroup.Item>
                            <ListGroup.Item>Nivel de Dificultad: Extremo</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="primary">Agendar</Button>
                        </Card.Body>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="imagenes/CruzDeLosPalmeros.jpg" />
                    <Card.Body>
                        <Card.Title>Cruz de Los Palmeros</Card.Title>
                        <Card.Text>
                        Subida pronunciada. No apto para principiantes.
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>
                                <FontAwesomeIcon icon={faStar} />
                                2.5 (reviews)
                            </ListGroup.Item>
                            <ListGroup.Item>Nivel de Dificultad: Alto</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="primary">Agendar</Button>
                        </Card.Body>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="imagenes/CruzDeLosPalmeros.jpg" />
                    <Card.Body>
                        <Card.Title>Cruz de Los Palmeros</Card.Title>
                        <Card.Text>
                        Subida pronunciada. No apto para principiantes.
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>
                                <FontAwesomeIcon icon={faStar} />
                                2.5 (reviews)
                            </ListGroup.Item>
                            <ListGroup.Item>Nivel de Dificultad: Alto</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="primary">Agendar</Button>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
            <button className="carousel-arrow right" onClick={() => scrollCarousel(1)}>
                &#8250; {/* Flecha derecha 
            </button>
        </div>
*/