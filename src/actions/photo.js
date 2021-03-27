import axios from 'axios'
import { setAlert } from './alert'
import React from 'react'

import {
    GET_PHOTO,
 PHOTO_ERROR,
 UPDATE_PHOTO
} from './types'


//gET THE CURRENT USERS PROFILE

export const  getCurrentPhoto=()=>async dispatch=>{

    try {
        const res= await axios.get('')
    
        dispatch({
            type:GET_PHOTO,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:PHOTO_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        })
    }
    
    }

    export const imageUpload = (
        formData,
        history,
        edit = false
      ) => async dispatch => {
        try {
      
        
          const res = await axios.post('/api/profile/upload', formData);
      
          dispatch({
            type: UPDATE_PHOTO,
            payload: res.data
          });
      
          dispatch(setAlert( 'Image Uploaded Sucessfully' ,'success',<i className="material-icons">done</i>));
      
          if (edit) {
            history.push('/index');
          }
        } catch (err) {
          const errors =err.response.data.errors;
      
          if (errors) {
          dispatch(setAlert('Error happening','danger',  <i className="material-icons">report</i>));
          }
      
          dispatch({
            type: PHOTO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
        }
      };
      