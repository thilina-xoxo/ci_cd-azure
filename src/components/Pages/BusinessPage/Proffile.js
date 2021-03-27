import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Spinner from '../../layouts/Spinner'
import ProfileTop from './ProfileTop'
import { getProfilebyID,getCurrentProfile} from '../../../actions/businessprofile'


const Profile = ({ match,getProfilebyID,user,auth,profile:{ profile, loading}}) => {

useEffect(()=>{
  getProfilebyID(match.params.businessId)
},[getProfilebyID])

useEffect(()=>{
  getCurrentProfile(match.params.businessId)
},[getCurrentProfile])

    return( 
     
<Fragment>
{profile === null || loading ? <Spinner/>:<Fragment>
  <div className='mt-4 ml-1'><Link to='/businessess' className="bg-green-500 hover:bg-blue-400 text-xs text-white font-bold py-2 px-4 rounded mt-5">
  Back to Businesses</Link>
  

</div>
  <div class="profile-grid my-5">
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