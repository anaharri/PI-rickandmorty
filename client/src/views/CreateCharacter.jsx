import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import constantes from '../constantes';

const CreateCharacter = () => {
  /* objeto al back = {
        name,
        image,
        episodes []
    }

        */

  const episodes = useSelector((state) => state.episodes);

  const [character, setCharacter] = useState({
    name: '',
    image: '',
    episodes: [], // [1, 5, 3 ]
  });

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
  };

  return (
    <div>
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
        <button type='submit'>Create Character</button>
      </form>
    </div>
  );
};

export default CreateCharacter;
