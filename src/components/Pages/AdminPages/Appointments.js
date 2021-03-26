import React, {Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {getAppointments} from '../../../actions/appointments'
import {connect} from 'react-redux'
import AppointmentItem from './AppointmentItem'
import Spinner from '../../layouts/Spinner'
import {getProfiles} from '../../../actions/businessprofile'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { lightBlue } from '@material-ui/core/colors';

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
        width: '55%',
        marginTop: theme.spacing(1),
      },
    }));

const Appointments = ({getProfiles,auth,profile:{profiles,loading}}) => {
    
    useEffect(()=>{
      getProfiles()
      },[getProfiles])

      const classes = useStyles();

    return (

        <div className={classes.paper}>
          
        <Box mt={5}></Box>
        <Typography component="h1" variant="h5">
          Appointments of the Business
        </Typography>
        <Box mt={2}></Box>

        <form className={classes.form} noValidate>
        <Fragment>
        {loading ? <Spinner/>:
              <Fragment>
              <h1 className='large'> </h1>
              </Fragment>}
          <div className='card' >
        {profiles.length>0 ?(
                profiles.map(profile=>(
                    <AppointmentItem key={profile._id} profile={profile}/>
                ))
            ):(
            <h4 className='text-2xl text-danger'>No Profiles found</h4>
            )}
        </div>
</Fragment>
<Box mt={5}></Box>
          </form>
        </div>
                     
    )
}

Appointments.propTypes = {
    getProfiles:PropTypes.func.isRequired,
    profile:PropTypes.array.isRequired,
}

const mapStateToProps=state=>({
    profile:state.profile
})

export default connect(mapStateToProps,{getProfiles}) (Appointments)