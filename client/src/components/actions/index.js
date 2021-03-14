import { AUTH_USER, AUTH_ERROR, AUTH_ERROR_LOGIN, FETCH_USER } from './types';

//////////////////////////////// Authentification //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Signup
export const signupClient = (formProps, callback) => async (dispatch) => {
  const token = formProps.data.signup.token;
  const user = formProps.data.signup.user;
  try {
    localStorage.setItem('token', token);
    dispatch({ type: AUTH_USER, payload: user });
    dispatch({ type: AUTH_ERROR, payload: '' });
    dispatch({ type: AUTH_ERROR_LOGIN, payload: '' });
    callback(); /* history callback */
  } catch (e) {
    console.log(e);
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

// Signin
export const signin = (formProps, callback) => async (dispatch) => {
  const token = formProps.data.login.token;
  const user = formProps.data.login.user;
  try {
    localStorage.setItem('token', token);
    dispatch({ type: AUTH_USER, payload: user });
    dispatch({ type: AUTH_ERROR_LOGIN, payload: '' });
    dispatch({ type: AUTH_ERROR, payload: '' });
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR_LOGIN, payload: 'Invalid login credentials' });
  }
};

// Signout
export const signout = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: AUTH_USER, payload: '' });
  dispatch({ type: FETCH_USER, payload: '' });
};

// fetch User
export const fetchUser = () => async (dispatch) => {
  // const token = { token: localStorage.token };
  // const res = await axios
  //   .post('/api/user', token)
  //   .then(
  //     async (response) => await axios.get(`/api/user/${response.data.sub}`)
  //   );
  // dispatch({ type: FETCH_USER, payload: res.data });
};

////////////////////////////////////////// Cloudinary ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// Cloudinary Delete Image
export const deleteImage = (image) => async () => {
  // await axios.post(`/api/delete/image`, image);
};
