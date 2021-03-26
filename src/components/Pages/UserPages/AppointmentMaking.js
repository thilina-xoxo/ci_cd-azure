import React, { useState,useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { lightBlue } from '@material-ui/core/colors';
import { blueGrey } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {createAppointments} from '../../../actions/appointments'
import {getProfilebyID} from '../../../actions/businessprofile'
import { Hidden } from '@material-ui/core';
import {getTreatmentbyID} from '../../../actions/treatment'
import  TreatmentIdItem from '../BusinessPage/TreatmentIdItem'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}));

const AppointmentMaking = ({setAlert
  ,getTreatmentbyID,
  createAppointments,
  history,auth,match,
  getProfilebyID,
  profile:{profile,loading},
  treatment:{treatment}}) => {

  const [formData, setFormData] = useState({
   firstname:"",
   lastname:"",
   businessId:"",
    phonenumber:'',
    treatmentId:'',
    age:'',
    gender:''

  })

  useEffect(() => {

    getTreatmentbyID(match.params.businessId); 

    if (!profile) getProfilebyID(match.params.businessId);
    if (!loading && profile) {
      const profileData = { ...formData };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
     
      setFormData(profileData);
        }
          // eslint-disable-next-line
    }, [loading,getProfilebyID,profile])


const{firstname,lastname,businessId,age,phonenumber,treatmentId,gender}=formData; 

const onChange=e=>setFormData(
  {
    ...formData, [e.target.name]:e.target.value
  }
)

const onSubmit=e=>{
  e.preventDefault();
  if (firstname && lastname && businessId && treatmentId && phonenumber ) {

    e.preventDefault()
    createAppointments(formData,history)
  }
        else{
          setAlert('Please fill all the required fileds','warning');
        }
      }

  const classes = useStyles();

  return (
    
    
          <div className='w-full bg-white rounded  p-8 m-4 '>

        <h1 className='text-2xl xl:text-2xl font-extrabold text-orange-500 text-center '>
        Make Your Appointment
        </h1>

        <form
          className='mb-6 mx-3'
          //className={classes.submit}
          onSubmit={e=>onSubmit(e)}
        >
          <p className='text-red-500 text-xs italic mb-2'>
            **Please fill out all the fields.
          </p>

         
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >

              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='HIDDEN'
                name='businessId'
                value={businessId}
                hid
                onChange={(e) => onChange(e)}
                placeholder='Postal Code'
              />
              
            </div>
          </div>


          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full '>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='bname'
              >
                First Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='BusinessName'
                name='firstname'
                value={firstname}
                type='text'
                placeholder='First Name'
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full '>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='bname'
              >
              Last Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='BusinessName'
                name='lastname'
                value={lastname}
                type='text'
                placeholder='Last Name'
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>


         


          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >
              Treatment Id
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='string'
                name='treatmentId'
                value={treatmentId}
                onChange={(e) => onChange(e)}
                placeholder='Postal Code'
              />
             
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >
                Phone Number
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='tel'
                name='phonenumber'
                value={phonenumber}
            
                onChange={(e) => onChange(e)}
                placeholder='Phone'
              />
             
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >
                Age
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='int'
                name='age'
                value={age}
                onChange={(e) => onChange(e)}
                placeholder='Age'
              />
          
            </div>
          </div>

          <div className='w-full  mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-state'
            >
             Gender
            </label>
            <div className='relative'>
              <select
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-state'
                name='gender'
                value={gender}
                onChange={(e) => onChange(e)}
              >
              
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>



<div className='grid grid-cols-3 gap-4'>
  <div className='w-1/3' ></div>
  <div className='w-full' >
  <button
            type='submit'
            className=' items-center mt-5 w-full  font-semibold bg-blue-700 text-gray-100  py-4 rounded-sm hover:bg-blue-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
          >
            <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
            <span className='ml-3'>Submit</span>
          </button>

  </div>
          
          <div className='w-1/3' ></div>
          </div>
        </form>
      </div>
  );
}

AppointmentMaking.propTypes={
  setAlert:PropTypes.func.isRequired,
  createAppointments:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  getProfilebyID:PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired,
  getTreatmentbyID:PropTypes.func.isRequired,
  treatment:PropTypes.object.isRequired,
};

const mapStateToProps=state=>({
  auth:state.auth,
 treatment:state.treatment,
  profile:state.profile
})

export default connect(mapStateToProps, { setAlert,createAppointments,getProfilebyID,getTreatmentbyID })(AppointmentMaking);