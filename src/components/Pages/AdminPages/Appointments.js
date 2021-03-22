import React, {Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {getAppointments} from '../../../actions/appointments'
import {connect} from 'react-redux'

const Appointments = ({getAppointments,appointment:{appointments,loading}}) => {
    useEffect(()=>{getAppointments()},[getAppointments])

    return (
       <div>Kavindya</div>
    )
}

Appointments.propTypes = {
    getAppointments:PropTypes.func.isRequired,
    appointment:PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    appointment:state.appointment
})

export default connect(mapStateToProps,{getAppointments}) (Appointments)


