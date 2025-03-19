
import Card from 'react-bootstrap/Card';

export default function Perks() {
    return (
        <div className="justify-content-center" style={{ display: 'flex', gap: '10px' }}>
            <Card className='perk-card' style={{ width: '18rem', textAlign: 'center' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="imagenes/sombrilla.png"
                        width="80"
                        height="80"
                        alt="img"
                    />
                    <Card.Title>Descubre las Posibilidades</Card.Title>
                    <Card.Text>
                        Con todas las opciones que tenemos para ofrecer, seguro que hay una ruta para cada aventurero.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='perk-card' style={{ width: '18rem', textAlign: 'center' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="imagenes/accesoWeb.png"
                        width="80"
                        height="80"
                        alt="img"
                    />
                    <Card.Title>Online Service</Card.Title>
                    <Card.Text>
                        Reserva y recive soporte en tus viajes desde cualquier lugar del mundo.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='perk-card' style={{ width: '18rem', textAlign: 'center' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="imagenes/equipo.png"
                        width="80"
                        height="80"
                        alt="img"
                    />
                    <Card.Title>Planea y Comparte</Card.Title>
                    <Card.Text>
                        Organiza tus viajes con tus amigos, juntos la vida es mas divertida.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='perk-card' style={{ width: '18rem', textAlign: 'center' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="imagenes/revisar.png"
                        width="80"
                        height="80"
                        alt="img"
                    />
                    <Card.Title>Recomienda tus Viajes</Card.Title>
                    <Card.Text>
                        Sé parte de la comunidad y recomienda tus rutas favoritas.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}