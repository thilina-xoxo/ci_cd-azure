import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Spinner from '../../../layouts/Spinner'
import {getAppointmentbyID, getCurrentAppointment} from '../../../../actions/appointments'
import AppointmentIdItem from './AppointmentIdItem'
import { getProfilebyID} from '../../../../actions/businessprofile'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { lightBlue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    paper: {
      margin: theme.spacing(0,0),
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      backgroundColor: lightBlue[50],
    },
    form: {
        width: '70%',
        marginTop: theme.spacing(1),
      },
    }));


const AppointmentById = ({ match,getAppointmentbyID,user,auth,appointment:{appointment, loading}, profile}) => {

useEffect(()=>{
    getAppointmentbyID(match.params.businessId)
},[getAppointmentbyID])

useEffect(()=>{
    getCurrentAppointment(match.params.businessId)
},[getCurrentAppointment])

useEffect(()=>{
    getProfilebyID(match.params.businessId)
},[getProfilebyID])

const classes = useStyles();
    return( 
     
        <div className={classes.paper}>
          
          <Box mt={5}></Box>
          <Typography component="h1" variant="h5">
            Appointments of the Business
          </Typography>
          <Box mt={2}></Box>

          <form className={classes.form} noValidate>
     
        <Fragment>

        {appointment === null || loading ? <Spinner/>:<Fragment>
          <div><Link to='/appointments' className="bg-green-500 hover:bg-blue-800 text-xs text-white font-bold py-1 px-4 rounded">
          Back to Appointments</Link>
         
        
        </div>
        <div className='card' >
      
        <div className='card' >
        {appointment.length>0 ?(
                       appointment.map(appointment=>(
                           <AppointmentIdItem key={appointment._id} appointment={appointment}/>
                       ))
                   ):(
                   <h4 className='text-2xl text-danger'>No appointments found</h4>
                   )}
        </div>
              
        </div>
          </Fragment>}
         </Fragment>
         <Box mt={5}></Box>
          </form>
        </div>
 
         );
         };
         

    

AppointmentById.propTypes = {
getAppointmentbyID:PropTypes.func.isRequired,
appointment:PropTypes.array.isRequired,
auth:PropTypes.object.isRequired,
user: PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    appointment:state.appointment,
    auth:state.auth,
    user: state.auth.user,
})

export default connect(mapStateToProps,{ getAppointmentbyID}) (AppointmentById)