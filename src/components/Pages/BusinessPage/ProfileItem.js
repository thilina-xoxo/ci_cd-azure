import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Appointments from '../../layouts/AdminDashboard/Appointments'

function ProfileItem({ profile:{
    businessId,
    name,
    email,
    totalCrowd,
    currentCrowd,
    phoneNumber,
    postalCode,
    businessType,
    summary,
    openingHours,
    Appointments,
    treatments,
    imageName,
    imageFile,
    imageSrc,

}}) {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{email}</h2>


            <Link to={`/businessproffile/${businessId}`}>
                View Profile
            </Link>
        </div>
    )
}

ProfileItem.propTypes = {
profile:PropTypes.object.isRequired,
}

export default ProfileItem

