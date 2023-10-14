import React, { useEffect, useState } from 'react';
import '../Estilos/Profile.css'
import { useNavigate } from 'react-router-dom';


function Profile() {
  const [rick, setRick] = useState(null); // Cambiar a null para indicar que aún no se ha obtenido ningún personaje
  const [loading, setLoading] = useState(true); // Estado de carga
  const navigate = useNavigate();

  useEffect(() => {
    const getRandomCharacterId = () => Math.floor(Math.random() * 671) + 1;

    const getRick = async () => {
      try {
        const characterId = getRandomCharacterId();
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        const rickData = await response.json();

        // Verificar si se obtuvieron datos del personaje
        if (rickData) {
          // Formatear los datos del personaje
          const rickFormatted = {
            id: rickData.id,
            name: rickData.name,
            status: rickData.status,
            img: rickData.image
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
  }, []);

  const handleSeeMore= (characterId) => {
    navigate(`/viewmore/${characterId}`);
  }

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : rick ? ( 
        <div className='rick-container-wrapper'> 
        <div className='rick-container' key={rick.id}>
          <img className='rick-image' src={rick.img} alt={rick.name} />
          <span className='rick-name-text'> {rick.name}</span>
          <span>ID: {rick.id}</span>
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
          <button className='seemore-button' onClick={()=> handleSeeMore(rick.id)}>See More</button>
        </div>
        </div>
      ) : (
        <p>No se encontró ningún personaje</p>
      )}
    </>
  );
}

export default Profile;
