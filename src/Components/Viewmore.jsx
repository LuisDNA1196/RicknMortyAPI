import React, { useEffect, useState } from 'react';
import '../Estilos/Viewmore.css'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Viewmore() {
  const [rick, setRick] = useState(null); // Cambiar a null para indicar que aún no se ha obtenido ningún personaje
  const [loading, setLoading] = useState(true); // Estado de carga
  const {characterID} = useParams();
  const navigate = useNavigate();


  useEffect(() => {

    const getRick = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterID}`);
        const rickData = await response.json();

        // Verificar si se obtuvieron datos del personaje
        if (rickData) {
          // Formatear los datos del personaje
          const rickFormatted = {
            id: rickData.id,
            name: rickData.name,
            status: rickData.status,
            img: rickData.image,
            species:rickData.species,
            origin:rickData.origin,
            location:rickData.location,
          };

          // Establecer el personaje en el estado
          setRick(rickFormatted);
        }

        setLoading(false); // Establecer el estado de carga en falso cuando se obtengan los datos
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false); // Establecer el estado de carga en falso incluso si hay un error
      }
    };

    getRick();
  }, [characterID]);

  const handleSeeMore = () => {
        navigate('/mainprofiles')
      }

  return (
    <>
    <Navbar/>
      <h1>Welcome to:</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : rick ? ( 
        <div className='rick-viewmore-container-wrapper'> 
        <span className='main-name-wrapper'> {rick.name}</span>
        <div className='rick-viewmore-container' key={rick.id}>
          <img className='rick-image-viewmore' src={rick.img} alt={rick.name} />
          <div className='rick-info'>
          <span>ID: {rick.id}</span>
          <span>Specie: {rick.species}</span>
          <span>Origin: {rick.origin.name}</span>
          <span>Location: {rick.location.name}</span>
          <span>
                {/* Asigna la clase CSS según el estado */}
                <div
                  className={`circle ${
                    rick.status === 'Alive'
                      ? 'green-circle'
                      : rick.status === 'Dead'
                      ? 'red-circle'
                      : 'grey-circle'
                  }`}
                ></div>
                Status: {rick.status}
              </span>
          </div>
        </div>
          <button onClick={handleSeeMore} >Return</button>
        </div>
      ) : (
        <p>No se encontró ningún personaje</p>
      )}
    </>
  );
}

export default Viewmore