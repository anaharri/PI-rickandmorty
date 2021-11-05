import {
  GET_CHARACTERS,
  GET_EPISODES,
  GET_CHARACTER_DETAIL,
  FILTER_ORIGIN,
  CLEAR_PAGE
} from './actionTypes';
import constantes from '../../constantes';
import axios from 'axios';

export const getCharacters = () => {
  return (dispatch) => {
    axios.get(`${constantes.CHARACTER_URL}`).then((res) => {
      dispatch({
        type: GET_CHARACTERS,
        payload: res.data,
      });
    });
  };
};

export const getEpisodes = () => {
  return async (dispatch) => {
    const episodes = await axios.get(`${constantes.EPISODES_URL}`);
    return dispatch({ type: GET_EPISODES, payload: episodes.data });
  };
};

export const filterOrigin = (payload) => {
  console.log(payload) // all , created , api
  return {
    type: FILTER_ORIGIN,
    payload
  }
}

export const getCharacterDetail = (id) => {
  console.log(id, 'SOY ID DE ACTIONS')
  return async dispatch => {
    const character = await axios.get(`${constantes.CHARACTER_URL}${id}`)
    return dispatch({type: GET_CHARACTER_DETAIL , payload: character.data})
  }
}

export const clearPage =() => {
  return{
    type: CLEAR_PAGE,
    
  }
}