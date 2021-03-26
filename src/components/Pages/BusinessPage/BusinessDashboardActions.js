import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
 const BusinessDashboaradActions = ({profile:{
     businessId
 }}) => {
    return (
        <div className='container-between' >
        <Link to={`/editProfile/${businessId}`} className='btn  text-white shadow-none rounded bg-yellow-800'> <i className='fas fa-user-circle text-white fa-1x'></i>  Edit Profile</Link>
        <Link to={`/createTreatment/${businessId}`} className='btn  text-white shadow-none rounded bg-yellow-800'> <i className='fab fa-black-tie text-white fa-1x'></i>  Add Experience</Link>
        <Link to='add-education' className='btn  text-white shadow-none rounded bg-yellow-800'> <i className='fas fa-graduation-cap text-white fa-1x'></i>  Add Education</Link>
        
        </div>
    )
}
BusinessDashboaradActions.propTypes = {
    profile: PropTypes.object.isRequired,
    }

export default BusinessDashboaradActions