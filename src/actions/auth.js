import React from 'react'
import axios from 'axios'

import {
   USER_LOADED,
   AUTH_ERROR,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT,

} from './types'

import setAuthToken from '../utils/setAuthtoken'
//LOAD USER

export const loadUser=()=> async dispatch=>{
if(localStorage.token){
setAuthToken(localStorage.token)
}

try {
    const res =await axios.post('/api/auth/login')
    dispatch({
        type:USER_LOADED,
        payload:res.data
    })
} catch (err) {
    dispatch({
        type:AUTH_ERROR
    })
}

}


//login user

export const login=(email,password)=>async dispatch=>{

    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    const body=JSON.stringify({email,password})

    try {
        const res=await axios.post('api/auth/login',body,config)

        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })

        dispatch(loadUser())
    } catch (err) {
        const errors=err.response.data.errors
        if(errors){
    console.log("fail")
        }

        dispatch({
            type:LOGIN_FAIL
        })
    }

}

//logout
export const logout=()=>dispatch=>{
  
    dispatch({type:LOGOUT})
  
}


