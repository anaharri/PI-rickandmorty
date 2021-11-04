import {
  GET_CHARACTERS,
  GET_EPISODES,
  POST_CHARACTER,
  GET_CHARACTER_DETAIL,
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
