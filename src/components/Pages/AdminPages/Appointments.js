import React, {Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {getAppointments} from '../../../actions/appointments'
import {connect} from 'react-redux'
import AppointmentItem from './AppointmentItem'
import Spinner from '../../layouts/Spinner'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Box from '@material-ui/core/Box';

const Appointments = ({getAppointments,appointment:{appointments,loading}}) => {
    useEffect(()=>{getAppointments()},[getAppointments])

    return (
        <Fragment>
        {loading ? <Spinner/>:
        <Fragment>
            <section>
                    <Typography>
                    <Button size='small' color='primary'>
                    <Link to={``}>
                    
                   </Link> 
                    </Button></Typography>
                    </section>
         
          </Fragment>}
          <Fragment>
          <div className='card' >
               {appointments.length>0 ?(
                       appointments.map(appointment=>(
                           <AppointmentItem key={appointment._id} appointment={appointment}/>
                       ))
                   ):(
                   <h4 className='text-2xl text-danger'>No appointments found</h4>
                   )}
               </div>  </Fragment>
                      
             </Fragment>
    )
}

Appointments.propTypes = {
    getAppointments:PropTypes.func.isRequired,
    appointment:PropTypes.array.isRequired,
}

const mapStateToProps=state=>({
    appointment:state.appointment
})

export default connect(mapStateToProps,{getAppointments}) (Appointments)