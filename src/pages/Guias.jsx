import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navBar';

export default function Guias() {
  const instructores = [
    { nombre: 'CAMILA GANDICA', imagen: 'imagenes/hike1.jpg', info: "Hola! Soy Camila Gandica, tengo 20 anos y estudio Ingenieria en Produccion, tengo un ano de experiencia como guia de MetroRutas, estoy muy emocionada de acompanarte en esta nueva actividad!Reserva conmigo para una super experiencia." },
    { nombre: 'LUIS ALBORNOZ', imagen: 'imagenes/hike.jpg', info: 'Hola! Soy Luis Albornoz, tengo 22 anos y estudio Ingenieria Electrica, tengo un ano de experiencia como guia de MetroRutas, estoy muy emocionada de acompanarte en esta nueva actividad!Reserva conmigo para una super experiencia.' },
    { nombre: 'SEBASTIAN CERDA', imagen: 'imagenes/hike4.jpg', info: 'Hola! Soy Sebastian Cerda, tengo 21 anos y estudio Ingenieria Civil, tengo un ano de experiencia como guia de MetroRutas, estoy muy emocionada de acompanarte en esta nueva actividad!Reserva conmigo para una super experiencia.' },
    { nombre: 'VALENTINA VAAMONDE', imagen: 'imagenes/hike3.jpg', info: 'Hola! Soy Valentina Vaamonde, tengo 21 anos y estudio Psicologia, tengo un ano de experiencia como guia de MetroRutas, estoy muy emocionada de acompanarte en esta nueva actividad!Reserva conmigo para una super experiencia.' },
    { nombre: 'ROMINA COLASANTE', imagen: 'imagenes/hik2.jpg', info: 'Hola! Soy Romina Colasante, tengo 21 anos y estudio Administracion, tengo un ano de experiencia como guia de MetroRutas, estoy muy emocionada de acompanarte en esta nueva actividad!Reserva conmigo para una super experiencia.' },
    { nombre: 'EMELY FERNANDEZ', imagen: 'imagenes/hike5.jpg', info: "Hola! Soy Emely Fernandez, tengo 21 anos y estudio Ingenieria en Produccion, tengo un ano de experiencia como guia de MetroRutas, estoy muy emocionada de acompanarte en esta nueva actividad!Reserva conmigo para una super experiencia." },
  ];

  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleCloseModal = () => {
    setSelectedInstructor(null);
  };

  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Guias</h1>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {instructores.map(instructor => (
            <div key={instructor.nombre} className="bg-white rounded-lg shadow-md p-4 text-center">
              <img
                src={instructor.imagen}
                alt={instructor.nombre}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p
                className="text-xl font-bold cursor-pointer truncate"
                onClick={() => handleInstructorClick(instructor)} // Corregido aquí
              >
                {instructor.nombre}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para información del instructor */}
      {selectedInstructor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-xl">✖</button>
            <h2 className="text-2xl font-bold mb-4">{selectedInstructor.nombre}</h2>
            <p>{selectedInstructor.info}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}