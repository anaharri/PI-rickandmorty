import {
  GET_CHARACTER_DETAIL,
  GET_CHARACTERS,
  GET_EPISODES,
  FILTER_ORIGIN,
  CLEAR_PAGE,
} from '../actions/actionTypes';

const initialState = {
  characters: [], //ESTADO ORIGINAL, NUNCA VA A MUTAR
  filteredCharacters: [], //ESTADO QUE FILTRAMOS, MUTA
  episodes: [],
  characterDetail: undefined,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };

    case GET_EPISODES:
      return {
        ...state,
        episodes: payload,
      };

    case GET_CHARACTER_DETAIL:
      console.log(payload, 'SOY PAYLOAD');
      return {
        ...state,
        characterDetail: payload,
      };

    case FILTER_ORIGIN:
      const allCharacters = state.characters;
      const originFilteredCharacters =
        payload === 'created'
          ? allCharacters.filter((character) => character.created) //VIENE POR BASE DE DATOS
          : allCharacters.filter((character) => !character.created); //VIENE DESDE LA API

      return {
        ...state,
        filteredCharacters:
          payload === 'all' ? allCharacters : originFilteredCharacters,
      };

    case CLEAR_PAGE:
      return {
        ...state,
        characterDetail: undefined,
      };

    default:
      return state;
  }
};

export default rootReducer;
