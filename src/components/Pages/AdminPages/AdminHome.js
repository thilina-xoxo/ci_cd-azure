import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {getAllUsers} from '../../../actions/auth'
import ShowUserItem from './ShowUserItem'

const AdminHome =({  getAllUsers, auth:{user,loading},users:{users}}) => {

    useEffect(()=>{
        getAllUsers()
       },[getAllUsers])

       const [q,setQ]=useState("")
       function search(rows){
        return rows.filter(row=>
            
        row.userName.toLowerCase().indexOf(q)>-1||
        row.email.toLowerCase().indexOf(q)>-1
        
        )
    }

    return (
        <div>
         <div className="container w-full mx-auto pt-20">
         Welcome {user && user.userName}!
		<div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
			
		
			
			<div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                 
                    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-green-600"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-400"><a href="/businessess">All Businesses</a> </h5>
                                <h3 className="font-bold text-3xl text-gray-600"><span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                  
                </div>
  
                <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                   
                    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-400"><a href="/business/signup">Create New Business User</a></h5>
                                <h3 className="font-bold text-3xl text-gray-600"> <span className="text-yellow-600"><i className="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
               
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                  
                    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-blue-600"><i className="fas fa-briefcase  fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-400"><a href="/business/register">Register New Business</a></h5>
                                <h3 className="font-bold text-3xl text-gray-600"> <span className="text-blue-600"><i className="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                 
                </div>
             
            
            </div>

		
			<hr className="border-b-2 border-gray-600 my-8 mx-4"/>


            <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full '>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='bname'
              >
                Search
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='Search'
                name='q'
                value={q}
                type='text'
                placeholder='Serach'
                onChange={(e)=>setQ(e.target.value)}
              />
            </div>
          </div>



            <div className="container mx-auto">

            
            <ShowUserItem users={search(users)}/>

             

              


            </div>
								
		
					
		</div>
		

	</div> 

	</div>
	
    )
}

AdminHome.propTypes = {
    auth:PropTypes.object.isRequired,
    getAllUsers:PropTypes.func.isRequired
}
const mapStateToProps=state=>({
    auth:state.auth,
    users:state.users
  
    })
export default connect(mapStateToProps,{getAllUsers}) (AdminHome)
