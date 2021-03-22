import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Spinner from '../../../layouts/Spinner'
import ProfileTop from '../ProfileTop'
import {getAppointmentbyID, getCurrentAppointment} from '../../../../actions/appointments'


const AppointmentById = ({ match,getAppointmentbyID,user,auth,appointment:{ appointment, loading}}) => {

useEffect(()=>{
    getAppointmentbyID(match.params.businessId)
},[getAppointmentbyID])

useEffect(()=>{
    getCurrentAppointment(match.params.businessId)
},[getCurrentAppointment])


    return( 
     


  <div>

  Kav
  </div>
 
         );
         };
         

    

AppointmentById.propTypes = {
getAppointmentbyID:PropTypes.func.isRequired,
appointment:PropTypes.arrayOf().isRequired,
auth:PropTypes.object.isRequired,
user: PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    appointment:state.appointment,
    auth:state.auth,
    
    user: state.auth.user,
})

export default connect(mapStateToProps,{ getAppointmentbyID}) (AppointmentById)