
import axios from 'axios';
import { setAlert } from './alert';
import jwt_decode from "jwt-decode";
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
} from './types';

// register user
export const register = (UserName, Email, Password, ConfirmPassword) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ UserName, Email, Password, ConfirmPassword });

  try {
    const res = await axios.post(
      'https://localhost:5001/api/auth/register',
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser())
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch(setAlert('Something wrong at your end', 'danger'));

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// REGISTER BUSINESS

export const registerBusiness = (
  BusinessType,
  BusinessName,
  TotalCrowd,
  CurrentCrowd,
  PostalCode,
  PhoneNumber,
  Email,
  Summary
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    BusinessType,
    BusinessName,
    TotalCrowd,
    CurrentCrowd,
    PostalCode,
    PhoneNumber,
    Email,
    Summary,
  });

  try {
    const res = await axios.post(
      'https://localhost:5001/api/business',
      body,
      config,
      console.log('Thilina')
    );
    dispatch({
      type: REGISTER_SUCCESS,
      //payload: res.data,
    });
  } catch (err) {
    //const errors = err.response.data.errors;
    //console.log(errors);
    dispatch(setAlert('Something wrong at your end', 'danger'));

    //dispatch({
    //type: REGISTER_FAIL,
    //});
  }
};

//LOAD USER


export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    var decoded = jwt_decode(localStorage.token);
   
}

  try {
   const res = await axios.get(`https://localhost:5001/api/auth/user/${decoded.userId}`);
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
    const res = await axios.post(
      'https://localhost:5001/api/auth/login',
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser())
  } catch (err) {
    dispatch(setAlert('Invalid email or password', 'danger'));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//getallusers

export const  getAllUsers=()=>async dispatch=>{

try {
    const res= await axios.get('https://localhost:5001/api/auth/users')

    dispatch({
        type:GET_USERS,
        payload:res.data
    })
} catch (err) {
    dispatch({
        type:USERS_ERROR,
        payload:'errors'
    })
}

}


//logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
