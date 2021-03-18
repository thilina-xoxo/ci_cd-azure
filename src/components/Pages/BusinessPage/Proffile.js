
import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { getProfilebyID} from '../../../actions/businessprofile'


const Profile = ({ match,getProfilebyID,user}) => {

useEffect(()=>{
  getProfilebyID(match.params)
},[getProfilebyID])


    return( 
     
<Fragment>


         </Fragment>
         )}
         

    
    

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
