import {
  AUTH_USER,
  AUTH_ERROR,
  FETCH_USER,
  AUTH_ERROR_LOGIN,
} from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
  errorLogin: '',
  user: '',
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload || false };
    case FETCH_USER:
      return { ...state, user: action.payload || false };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case AUTH_ERROR_LOGIN:
      return { ...state, errorLogin: action.payload };
    default:
      return state;
  }
};

export default auth;
