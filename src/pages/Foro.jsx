import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navBar';

function Foro() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  const agregarComentario = () => {
    if (nuevoComentario.trim() !== '') {
      setComentarios([...comentarios, nuevoComentario]);
      setNuevoComentario('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold mb-4">Foro</h1>
        <p class='text-2xl py-2'>Este foro es para expresar las dudas que tengan sobre la ruta, su experiencia con las actividades y cualquier comentario que quieran dejarnos. Los leemos!</p>
        <div className="mb-4">

          <textarea
            className="w-full p-2 border rounded-md"
            rows="4"
            placeholder="Agregar un comentario al foro..."
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
          />

          <button
            className="bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={agregarComentario}
          >
            Publicar
          </button>

        </div>
        <div>
          {comentarios.map((comentario, index) => (
            <div key={index} className="border rounded-md p-3 mb-2">
              {comentario}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Foro;