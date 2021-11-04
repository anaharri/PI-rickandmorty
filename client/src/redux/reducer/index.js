import {
  GET_CHARACTER_DETAIL,
  GET_CHARACTERS,
  GET_EPISODES,
  POST_CHARACTER,
} from '../actions/actionTypes';

const initialState = {
  characters: [],
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

    default:
      return state;
  }
};

export default rootReducer;
