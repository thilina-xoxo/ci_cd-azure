import axios from 'axios'
import React from 'react'
import { setAlert } from './alert';
import jwt_decode from "jwt-decode";
import setAuthToken from '../utils/setAuthtoken';

import {
 GET_PROFILE,
 PROFILE_ERROR,
 UPDATE_PROFILE,
 CLEAR_PROFILE,
 DELETE_ACCOUNT,
 GET_PROFILES,
CLEAR_PHOTO
} from './types'


//gET THE CURRENT USERS PROFILE

export const  getCurrentProfile=(businessId)=>async dispatch=>{

try {
    const res= await axios.get(`https://localhost:5001/api/business/${businessId}`)

    dispatch({
        type:GET_PROFILE,
        payload:res.data
    })
} catch (err) {
    dispatch({
        type:PROFILE_ERROR,
        payload:'errors'
    })
}

}


//Get all profile

export const  getProfiles=()=>async dispatch=>{
 
  try {
      const res= await axios.get('https://localhost:5001/api/business')
  
      dispatch({
          type:GET_PROFILES,
          payload:res.data
      })
  } catch (err) {
      dispatch({
          type:PROFILE_ERROR,
          payload:{msg:err.response.statusText,status:err.response.status}
      })
  }
  
  }


//Get  profile by id

export const  getProfilebyID=(businessId)=>async dispatch=>{

  

  try {
      const res= await axios.get(`https://localhost:5001/api/business/${businessId}`)
  
      dispatch({
          type:GET_PROFILE,
          payload:res.data
      })
  } catch (err) {
      dispatch({
          type:PROFILE_ERROR,
          payload:'error'
      })
  }
  
  }


//update a Profile

export const editProfile = (
  businessId,
  formData,
  history,
  edit=false
 

) => async dispatch => {
  try {

    const config={
      headers:{
        'Content-Type':'application/json'
      }
    }
    const res = await axios.put(`https://localhost:5001/api/business/${businessId}/`, formData,config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    
    if (!edit) {
      history.push('/appointment');
    }
  } catch (err) {
    const errors =err.response.data.errors;

    if (errors) {
      dispatch(setAlert('Something wrong at your end', 'danger'));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: "somthing went wrong"
    });
  }
};


//Delete account and Profile



export const deleteAccount=()=>async dispatch=>{
  if(window.confirm('Are you sure?')){
    try {
     await axios.delete('api/profile/')

     
      dispatch({type:CLEAR_PROFILE})
      dispatch({type:DELETE_ACCOUNT})
  
      dispatch(setAlert('Account has been deleted','success',<i className="material-icons">done</i> ));
    } catch (err) {
      dispatch({
        type:PROFILE_ERROR,
        payload:{ msg: err.response.statusText, status: err.response.status}
      })
    }
  }
 
}


//create profile


export const createProfile = (
  formData,
  history,
) => async dispatch => {
  try {

    const config={
      headers:{
        'Content-Type':'application/json'
      }
    }
    const res = await axios.post('https://localhost:5001/api/business', formData,config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert( 'Profile Created' ,'success',<i className="material-icons">done</i>));

  } catch (err) {
    const errors =err.response.data.errors;

    if (errors) {
    dispatch(setAlert(errors,'danger',  <i className="material-icons">report</i>));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: "somthing went wrong"
    });
  }
};
