import React from 'react'
import {Link} from 'react-router-dom'
 const BusinessDashboaradActions = () => {
    return (
        <div className='container-between' >
        <Link to='edit-profile' className='btn  text-white shadow-none rounded bg-yellow-800'> <i className='fas fa-user-circle text-white fa-1x'></i>  Edit Profile</Link>
        <Link to='add-experience' className='btn  text-white shadow-none rounded bg-yellow-800'> <i className='fab fa-black-tie text-white fa-1x'></i>  Add Experience</Link>
        <Link to='add-education' className='btn  text-white shadow-none rounded bg-yellow-800'> <i className='fas fa-graduation-cap text-white fa-1x'></i>  Add Education</Link>
        
        </div>
    )
}

export default BusinessDashboaradActions