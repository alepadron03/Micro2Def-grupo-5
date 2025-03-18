import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navBar';

export default function Contacto() {
  const estudiantes = [
    { nombre: 'Ada Arellano', correo: 'ada.arellano@correo,unimet.edu.ve' },
    { nombre: 'Adolfo Barberi', correo: 'adolfo.barberi@correo,unimet.edu.ve' },
    { nombre: 'Karelin Guzman', correo: 'kguzman@correo,unimet.edu.ve' },
    { nombre: 'Cesar Minotti', correo: 'cesar.minotti@correo,unimet.edu.ve' },
    { nombre: 'Alexandra Padron', correo: 'alexandra.padron@correo,unimet.edu.ve' },
    { nombre: 'Ana Orozco', correo: 'ana.orozco@correo,unimet.edu.ve' },
  ];

  const [correosVisibles, setCorreosVisibles] = useState({});

  const toggleCorreo = (nombre) => {
    setCorreosVisibles((prev) => ({
      ...prev,
      [nombre]: !prev[nombre],
    }));
  };

  return (
    <>
      <Navbar />
        
        <div className="flex flex-col items-center justify-center"> {/* Centramos el contenido */}
        <h1 className="text-7xl font-bold text-center">Contactanos!</h1> {/* Centramos el texto */}
        <p className="text-2xl py-2 text-center">Somos un grupo de estudiantes de la Universidad Metropolitana que quiere incentivar a los demas unimetanos a hacer actividades reacionadas con la naturaleza. Tambien es una forma de conocer nuevas personas y hacer nuevos amigos.</p>
        <div className="space-y-2">

          {estudiantes.map((estudiante) => (
            <div
              key={estudiante.nombre}
              className="text-2xl py-2 border border-indigo-100 bg-indigo-100 rounded-md p-3 w-fit cursor-pointer"
              onClick={() => toggleCorreo(estudiante.nombre)}
            >
              {estudiante.nombre}
              {correosVisibles[estudiante.nombre] && (
                <span className="text-lg text-blue-500 ml-2">{estudiante.correo}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-2">
          <img
            className="w-full h-auto rounded-b-lg"
            src="imagenes/estudiantes.unimet.jpg"
            alt="Estudiantes Unimet"
          />
        </div>

        <div className="w-full md:w-1/2 p-2">
          <img
            className="w-full h-auto rounded-b-lg"
            src="imagenes/ubicacion.png"
            alt="Ubicacion"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
