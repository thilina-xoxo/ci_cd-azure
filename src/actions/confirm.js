import React from 'react';
import axios from 'axios';
import { setAlert } from './alert';

import { GET_CONFIRM, CONFIRM_ERROR } from './types';

//create confirm

export const createConfirm =
  (formData, history, appointmentId) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post(`/api/appoinment/confirm`, formData, config);

      dispatch({
        type: GET_CONFIRM,
        payload: res.data,
      });

      dispatch(setAlert('Appointment Successfully Confirmed', 'success'));

      history.push('/index');
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        dispatch(setAlert('Something Went Wrong.Try Again', 'danger'));
      }

      dispatch({
        type: CONFIRM_ERROR,
        payload: 'Something Went Wrong.Try Again',
      });
    }
  };
