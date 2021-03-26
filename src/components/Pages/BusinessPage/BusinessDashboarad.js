import React, { useEffect, Fragment } from 'react'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getProfilebyID,getCurrentProfile} from '../../../actions/businessprofile'
import Spinner from '../../layouts/Spinner'
import { Link } from 'react-router-dom'
import BusinessDashboaradActions from './BusinessDashboardActions'


const BusinessDashboarad=({
    match,
    getCurrentProfile,
    auth:{user},
    profile:{profile,loading}})=> {



        
    useEffect(()=>{
              getCurrentProfile(match.params.businessId)
                // eslint-disable-next-line
            },[getCurrentProfile])
    return (

        loading && profile ===null ? <Spinner/>:
        <Fragment>
        
          <div className='container'>
        
               <h1 className='text-2xl xl:text-5xl font-extrabold  text-orange-500 text-center  '>Dashboard</h1>
              <h2 className='w-full flex-1 mt-8 text-2xl font-weight-bolder text-black'>Welcome {user && user.userName}</h2> 
           
               {profile !== null ?(
               <Fragment className='container'>
        
         
          <BusinessDashboaradActions profile={profile}/>
               </Fragment>
               ):(
               <Fragment>
                   <p>You have not yet setup a profile</p>
                   <div className='flex flex-col items-center'>
                        <Link
                          className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
                   bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                         to='/business'
                         
                        >
                          <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
                          <span className='ml-4'>Create Profile</span>
                        </Link>
                      </div>
                   
                   </Fragment>
               )}
               
               </div>
     
        
            </Fragment>
        
    )
}

BusinessDashboarad.propTypes = {
    auth:PropTypes.object.isRequired,
    getCurrentProfile:PropTypes.func.isRequired,
   
    profile:PropTypes.object.isRequired,
}


const mapStateToProps=state=>({
    auth:state.auth,
    profile:state.profile,
  
    })
    export default connect(mapStateToProps,{getCurrentProfile})(BusinessDashboarad);


