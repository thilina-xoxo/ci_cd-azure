import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Spinner from '../../../layouts/Spinner'
import {getAppointmentbyID, getCurrentAppointment} from '../../../../actions/appointments'
import AppointmentIdItem from './AppointmentIdItem'



const AppointmentById = ({ match,getAppointmentbyID,user,auth,appointment:{appointment, loading}}) => {

useEffect(()=>{
    getAppointmentbyID(match.params.businessId)
},[getAppointmentbyID])

useEffect(()=>{
    getCurrentAppointment(match.params.businessId)
},[getCurrentAppointment])


    return( 
     
     
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