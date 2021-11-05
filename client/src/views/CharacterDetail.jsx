import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import NavBar from '../components/NavBar';
import { getCharacterDetail ,  clearPage} from '../redux/actions';

const CharacterDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const character = useSelector((state) => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    dispatch(clearPage())
  }, [dispatch, id]);

  console.log(id);
  return (
    <>
    <NavBar/>
    {
        character ? (
<div>

      <h1>{character?.name}</h1>
      <img src={character?.image} alt={character?.name} />

      <h2>Episodes:</h2>
      <ul>
        {character?.episodes.map((episode) => (
          <li>
            Episode {episode.id} : {episode.name}
          </li>
        ))}
      </ul>
    </div>
        ) :
        (<h1>Loading...</h1>)
    }
    
    

    </>
  );
};

export default CharacterDetail;
