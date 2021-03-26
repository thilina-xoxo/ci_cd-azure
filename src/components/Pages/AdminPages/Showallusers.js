
import React,{Fragment,useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ShowUserItem from './ShowUserItem'
import  {getAllUsers} from '../../../actions/auth'
import Spinner from '../../layouts/Spinner'


const Allusers = ({ getAllUsers,auth,users:{users,loading}}) => {

const [q,setQ]=useState("")

useEffect(()=>{
 getAllUsers()
},[getAllUsers])

function search(rows){
    return rows.filter(row=>row.userName.toLoweCase().indexOf(q)>-1)
}

return( 
    <Fragment >
        { loading ? (
   <h4><Spinner/></h4>
    ):(


  
    <Fragment  >  


        
{( <div className=' container mx-auto'>


<div>
    <input type='text' value={q} onChange={(e)=>setQ(e.target.value)}>
    </input>
</div>
  
    <div className='w-full bg-white rounded  mt-5' >
      
    

      <ShowUserItem users={search(users)}/>
        </div>

        

</div>


   
)}
         </Fragment>
         )}
         

    </Fragment>
     )}
    
    

Allusers.propTypes = {
auth:PropTypes.object.isRequired,
getAllUsers:PropTypes.func.isRequired,
users:PropTypes.array.isRequired,

}

const mapStateToProps=state=>({
auth:state.auth,
users:state.users
   
})

export default connect(mapStateToProps,{getAllUsers}) (Allusers)
