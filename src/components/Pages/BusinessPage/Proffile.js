import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Spinner from '../../layouts/Spinner'
import ProfileTop from './ProfileTop'
import { getProfilebyID} from '../../../actions/businessprofile'


const Profile = ({ match,getProfilebyID,user,auth,profile:{ profile, loading}}) => {

useEffect(()=>{
  getProfilebyID(match.params.email)
},[getProfilebyID])


    return( 
     
<Fragment>
{profile === null || loading ? <Spinner/>:<Fragment>
  <div><Link to='/appointment' className="bg-green-500 hover:bg-blue-800 text-xs text-white font-bold py-1 px-4 rounded">
  Back to Businesses</Link>
  
  {auth.isAuthenticated &&
  auth.loading === false &&
 (
    <Link to='/AppointmentMaking' className="bg-green-500 hover:bg-blue-800 text-xs text-white font-bold py-1 px-4 rounded">
      Make Your Appointment
    </Link>
  )}</div>
  <div class="profile-grid my-1">
    <ProfileTop profile={profile}/>
  </div>
  </Fragment>}
 </Fragment>
         );
         };
         

    

Profile.propTypes = {
  getProfilebyID:PropTypes.func.isRequired,
profile:PropTypes.object.isRequired,
auth:PropTypes.object.isRequired,
user: PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    profile:state.profile,
    auth:state.auth,
    
    user: state.auth.user,
})

export default connect(mapStateToProps,{ getProfilebyID}) (Profile)