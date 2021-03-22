import React from 'react';
import axios from 'axios';
import { setAlert } from './alert';
import jwt_decode from "jwt-decode";
import setAuthToken from '../utils/setAuthtoken';

import {
 GET_TREATMENT,
 TREATMENT_ERROR,
 UPDATE_TREATMENT,
 CLEAR_TREATMENT,
 DELETE_TREATMENT,
 GET_TREATMENTS,
} from './types'

//Get all treatments

export const  getTreatments=()=>async dispatch=>{
 
    try {
        const res= await axios.get('https://localhost:5001/api/threatment')
    
        dispatch({
            type:GET_TREATMENTS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:TREATMENT_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        })
    }
    
    }

    //Get  treatment by id

export const  getTreatmentbyID=(businessId)=>async dispatch=>{

  

    try {
        const res= await axios.get(`https://localhost:5001/api/threatment/${businessId}`)
    
        dispatch({
            type:GET_TREATMENT,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:TREATMENT_ERROR,
            payload:'error'
        })
    }
    
    }
