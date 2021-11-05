import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import constantes from '../constantes';
import style from './CreateCharacter.module.css';

const CreateCharacter = () => {
  /* objeto al back = {
        name,
        image,
        episodes []
    }

        */

  const episodes = useSelector((state) => state.episodes);

  const [button, setButton] = useState(true);
  const [character, setCharacter] = useState({
    name: '',
    image: '',
    episodes: [], // [1, 5, 3 ]
  });

  // Para verificar errores deben crear un estado de errores
  // Y para modificar ese estado de errores deben hacer una función validadora de errores.

  useEffect(() => {
    character.name && character.image && character.episodes.length > 0
      ? setButton(false)
      : setButton(true);
  }, [character]);

  const handleChange = (e) => {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    //hacer un push de cada value al array de mi estado episodes
    let episodeId = e.target.value;
    episodeId = Number(episodeId);

    setCharacter({
      ...character,
      episodes: [...character.episodes, episodeId],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${constantes.CHARACTER_URL}`, character);
    setCharacter({
      name: '',
      image: '',
      episodes: [],
    });
  };

  const filterEpisodes = (id) => {
    console.log(id);
    let filteredEpisodes = character.episodes.filter(
      (episode) => episode !== id,
    );
    setCharacter({
      ...character,
      episodes: filteredEpisodes,
    });
  };

  return (
    <>
      <NavBar />
      <div className={style.mainContainer}>
        <h1>Create your character</h1>

        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type='text'
            value={character.name}
            name='name'
            onChange={handleChange}
          />
          <label>Imagen:</label>
          <input
            type='text'
            value={character.image}
            name='image'
            onChange={handleChange}
          />

          <label>Episodes:</label>
          <select onChange={handleSelect} name='episodes'>
            {episodes?.map((episode) => (
              <option value={episode.id}>{episode.name}</option>
            ))}
          </select>
          <button disabled={button} type='submit'>
            Create Character
          </button>
        </form>
      </div>
      
      <div className={style.displayContainer}>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: '10%' }}
        />
        <div className={style.infoContainer}>

        <h2>Name: {character.name}</h2>
        <p>
          Appears on{' '}
          {character.episodes.length <= 1 ? (
            <span>episode</span>
          ) : (
            <span>episodes</span>
          )}
          :
        </p>
        <ul>
          {character.episodes.map((el) => (
            <div key={el} className={style.li}
              
            >
              <li>{el}</li>
              <button className={style.deleteButton} onClick={() => filterEpisodes(el)}>x</button>
            </div>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
};

export default CreateCharacter;
