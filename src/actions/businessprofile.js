import axios from 'axios'
import React from 'react'
import { setAlert } from '../actions/alert';


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

export const  getCurrentProfile=()=>async dispatch=>{

try {
    const res= await axios.get('https://localhost:5001/api/auth/business')

    dispatch({
        type:GET_PROFILE,
        payload:res.data
    })
} catch (err) {
    dispatch({
        type:PROFILE_ERROR,
        payload:{msg:err.response.statusText,status:err.response.status}
    })
}

}


//Get all profile

export const  getProfiles=()=>async dispatch=>{
 
  try {
      const res= await axios.get('/api/profile')
  
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

export const  getProfilebyID=(userId)=>async dispatch=>{

  try {
      const res= await axios.get(`/api/profile/user/${userId}`)
  
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


//Create or update a Profile

export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {

    const config={
      headers:{
        'Content-Type':'application/json'
      }
    }
    const res = await axios.post('/api/profile', formData,config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert( edit ? 'Profile Updated': 'Profile Created' ,'success',<i className="material-icons">done</i>));

    if (!edit) {
      history.push('/home');
    }
  } catch (err) {
    const errors =err.response.data.errors;

    if (errors) {
    dispatch(setAlert(errors,'danger',  <i className="material-icons">report</i>));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
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



