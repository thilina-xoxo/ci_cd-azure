import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {getAllUsers} from '../../../actions/auth'
import ShowUserItem from './ShowUserItem'
import { getContacts} from '../../../actions/contact'
import ShowContactItem from './ShowContactItem'
const AdminHome =({  getAllUsers, auth:{user,loading},users:{users} ,getContacts,contact:{contacts}}) => {

    useEffect(()=>{
        getAllUsers()
        getContacts()
       },[getAllUsers,getContacts])

       const [q,setQ]=useState("")

const[searchColumns,setSearchColumns]=useState(["userName","userID","email"])

       function search(rows){

      
        return rows.filter((row)=>
            
searchColumns.some(
    (column)=> row[column].toString().toLowerCase().indexOf(q.toLowerCase())>-1
)
        
        )
    }
    const columns=users[0] && Object.keys(users[0])
    return (
        <div>
         <div className="container w-full mx-auto pt-10">
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
                                <div className="rounded p-3 bg-blue-600"><i className="fas fa-briefcase  fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-400"><a href="/business/register">Register New Business</a></h5>
                                <h3 className="font-bold text-3xl text-gray-600"> <span className="text-blue-600"><i className="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                 
                </div>
             
                <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                   
                   <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                       <div className="flex flex-row items-center">
                           <div className="flex-shrink pr-4">
                               <div className="rounded p-3 bg-pink-600"><i className="fas fa-book fa-2x fa-fw fa-inverse"></i></div>
                           </div>
                           <div className="flex-1 text-right md:text-center">
                               <h5 className="font-bold uppercase text-gray-400"><a href="/appointments">All Appointments</a></h5>
                               <h3 className="font-bold text-3xl text-gray-600"> <span className="text-pink-600"><i className="fas fa-caret-up"></i></span></h3>
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
                Search User
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






            <div className="container mx-auto ">  
            <div>
            <div>


{columns && columns.map((column)=> <label>
    
    <input className='m-5' type='checkbox' checked={searchColumns.includes(column)} onChange={(e)=>{
        const checked=searchColumns.includes(column)
        setSearchColumns(prev=>checked?
            prev.filter(sc=>sc!==column):[...prev,column])
    }} />

    {column}

</label>)
}
</div>
            <div>
            <ShowUserItem users={search(users)}/>
            </div>
                
            </div>

            <hr className="border-b-2 border-gray-600 my-8 mx-4"/>
<div>

<ShowContactItem className='m-5' contacts={(contacts)}/>
</div>
   
            </div>
				
					
		</div>
		

	</div> 

	</div>
	
    )
}

AdminHome.propTypes = {
    auth:PropTypes.object.isRequired,
    getAllUsers:PropTypes.func.isRequired,
    getContacts:PropTypes.func.isRequired,
}
const mapStateToProps=state=>({
    auth:state.auth,
    users:state.users,
    contact:state.contact
  
    })
export default connect(mapStateToProps,{getAllUsers,getContacts}) (AdminHome)
