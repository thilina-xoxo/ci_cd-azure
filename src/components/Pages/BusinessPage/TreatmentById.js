import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Spinner from '../../layouts/Spinner'
import ProfileTop from './ProfileTop'
import {getTreatmentbyID} from '../../../actions/treatment'


const TreatmentById = ({ match,getTreatmentbyID,user,auth,treatment:{ treatment, loading}}) => {

useEffect(()=>{
    getTreatmentbyID(match.params.businessId)
},[getTreatmentbyID])




    return( 
     


  <div>

  Kav
  </div>
 
         );
         };
         

    

TreatmentById.propTypes = {
getTreatmentbyID:PropTypes.func.isRequired,
treatment:PropTypes.object.isRequired,
auth:PropTypes.object.isRequired,
user: PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    treatment:state.treatment,
    auth:state.auth,   
    user: state.auth.user,
})

export default connect(mapStateToProps,{ getTreatmentbyID}) (TreatmentById)