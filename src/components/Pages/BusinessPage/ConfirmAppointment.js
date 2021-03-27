import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import {getAppointmentbyID} from '../../../actions/appointments'
import {createConfirm} from '../../../actions/confirm'


function Copyright() {
  return (

    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='primary' href='./'>
        NoQueue Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: pink.A700,
  },
  form: {
    width: '40%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ConfirmAppointment = ({setAlert,createConfirm,history,auth,match,getAppointmentbyID,appointment:{appointment,loading}}) => {

  const [formData, setFormData] = useState({
    phone:'',
    message:"",
  })

  useEffect(() => {

    if (!appointment) getAppointmentbyID(match.params.appointmentId);
    if (!loading && appointment) {
      const appointmentData = { ...formData };
      for (const key in appointment) {
        if (key in appointmentData) appointmentData[key] = appointment[key];
      }
     
      setFormData(appointmentData);
        }
          // eslint-disable-next-line
        }, [loading,getAppointmentbyID,appointment])




const{phone,message}=formData; 

const onChange=e=>setFormData(
  {
    ...formData, [e.target.name]:e.target.value
  }
)

const onSubmit=e=>{
  e.preventDefault();
  if (phone && message) {
    e.preventDefault()
    createConfirm(formData,history)
  }
        else{
          setAlert('Please fill all the required fileds','warning');
        }
      }
      
  const classes = useStyles();

  return (
    <div className={classes.paper}>

      <Typography component='h1' variant='h5'>
      Confirm Appointment
      </Typography>

      <Box mt={4}></Box>

    
     
      <form onSubmit = { e=>onSubmit(e)} className={classes.form} noValidate>
      <label
                className=' tracking-wide font-semibold text-grey-200 text-xs mb-2'
                htmlFor='grid-location'
              >
                Phone Number
              </label>
      <input
                className='appearance-none block w-full bg-lightblue-50 text-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='text'
                name='phone'
                label='Phone Number'
                value={phone}
                onChange={(e) => onChange(e)}
                placeholder='phone'
              />

        <TextField
        onChange={e=>onChange(e)}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='message'
          label='Message for our team'
          type='message'
          id='message'
          multiline
          rows={4}
          value={message}
        />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Send
        </Button>
       

        <Box mt={4}>
          <Copyright />
        </Box>
      </form>

    </div>
  );
}

ConfirmAppointment.propTypes={
  setAlert:PropTypes.func.isRequired,
  createConfirm:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  getAppointmentbyID:PropTypes.object.isRequired,
  appointment:PropTypes.object.isRequired
};


const mapStateToProps=state=>({
    auth:state.auth,  
    appointment:state.appointment
  })

export default connect(mapStateToProps, { setAlert,createConfirm,getAppointmentbyID })(ConfirmAppointment);

