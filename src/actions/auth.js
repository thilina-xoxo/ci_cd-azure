import axios from 'axios';
import { setAlert } from './alert';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthtoken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USERS,
  USERS_ERROR,
  LOGOUT,
  CLEAR_PROFILE,
} from './types';

// register user
export const register =
  (UserName, Email, Password, ConfirmPassword) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ UserName, Email, Password, ConfirmPassword });

    try {
      const res = await axios.post('/api/auth/register', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      dispatch(setAlert('Something wrong at your end', 'danger'));

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

//
export const businessRegister =
  (UserName, Email, Password, ConfirmPassword) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ UserName, Email, Password, ConfirmPassword });

    try {
      const res = await axios.post('/api/auth/register-business', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: 'Something wrong at your end',
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      dispatch(setAlert('Something wrong at your end', 'danger'));

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

//LOAD USER

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    var decoded = jwt_decode(localStorage.token);
  }

  try {
    const res = await axios.get(`/api/auth/user/${decoded.userId}`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//login user

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert('Invalid email or password', 'danger'));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//getallusers

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/auth/users');

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: 'errors',
    });
  }
};

//logout
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
