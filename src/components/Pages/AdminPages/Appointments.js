import React, {Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {getAppointments} from '../../../actions/appointments'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import AppointmentItem from './AppointmentItem'
import appointment from '../../../reducers/appointment';

const Appointments = ({getAppointments,appointment:{appointments,loading}}) => {
    useEffect(()=>{getAppointments()},[getAppointments])

    return (
        <Fragment>
        {loading ? <h4>Loading...</h4>:
        <Fragment>
          <h1 className='large'> </h1>
          </Fragment>}
          <div className='card' >
               {appointments.length>0 ?(
                       appointments.map(appointment=>(
                           <AppointmentItem key={appointment._id} appointment={appointment}/>
                       ))
                   ):(
                   <h4 className='text-2xl text-danger'>No Profiles found</h4>
                   )}
               </div>
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


