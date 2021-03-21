import React from 'react';
import axios from 'axios';
import { setAlert } from '../actions/alert';
import jwt_decode from "jwt-decode";
import setAuthToken from '../utils/setAuthtoken';

import {
 GET_APPOINTMENT,
 APPOINTMENT_ERROR,
 UPDATE_APPOINTMENT,
 CLEAR_APPOINTMENT,
 DELETE_APPOINTMENT,
 GET_APPOINTMENTS,
} from './types'

//Get all profile

export const  getAppointments=()=>async dispatch=>{
 
    try {
        const res= await axios.get('https://localhost:5001/api/Appoinment')
    
        dispatch({
            type:GET_APPOINTMENTS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:APPOINTMENT_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        })
    }
    
    }