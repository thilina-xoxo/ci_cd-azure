
import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ShowUserItem from './ShowUserItem'
import  {getAllUsers} from '../../../actions/users'


const Allusers = ({ getAllUsers,users:{users,loading}}) => {

useEffect(()=>{
 getAllUsers()
},[getAllUsers])


return( 
    <Fragment >
        { loading ? (
   <h4>loading..</h4>
    ):(


  
    <Fragment  >  


        
{( <div className=' grid grid-cols-3 gap-4'>

    <div className=''>
    
    </div>
    <div className='w-full bg-white rounded  p-8 m-4 ' >
        <h1 className='text-3xl text-primary'>Users</h1>
    

        <div className='w-full container' >
        {users.length>0 ?(
                users.map(user=>(
                    <ShowUserItem key={user._id} user={user}/>
                ))
            ):(
            <h4 className='text-2xl text-danger'>No users found</h4>
            )}
        </div>
        </div>

        <div>
    
    </div>


</div>


   
)}
         </Fragment>
         )}
         

    </Fragment>
     )}
    
    

Allusers.propTypes = {
 getAllUsers:PropTypes.func.isRequired,
users:PropTypes.arrayOf().isRequired,
}

const mapStateToProps=state=>({
   users:state.users,
})

export default connect(mapStateToProps,{getAllUsers}) (Allusers)
