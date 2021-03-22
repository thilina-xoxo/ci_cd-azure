import React,{useState,Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createAppointments} from '../../../actions/appointments'
import {withRouter, Link} from 'react-router-dom'
import AppointmentMaking from '../UserPages/AppointmentMaking'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';





const ProfileTop =({createAppointments,history,profile: {
    name,
    email,
    phoneNumber,
    postalCode,
    logo,
businessId,
    summary,
    imageName,
  
}}) => {

  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    businessId:''
   
   })
 
 const [displayAppointment, toggleAppointments] = useState(false) 
 
 
 const{
  firstname,
  lastname,
 }=formData; 

  
const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})

  const onSubmit=e=>{
      e.preventDefault()
      createAppointments(formData,history)
  }

    return (
      <Fragment>
<div className='container-around'>
        <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
         
        </div>

        <div className=" mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              
                {imageName}
            
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className=" max-w-full col-6 rounded-lg">
                  <img>{logo}</img>
                </div>
                <h3 className="text-3xl font-semibold">
                  {name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                 {summary}
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                        <i class="far fa-envelope"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          {email}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                        <i class="fas fa-phone"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">{phoneNumber}</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                        <i class="fas fa-search-location"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">{postalCode}</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Link to= {`/editProfile/${businessId}`}className="bg-green-500 hover:bg-blue-800 text-xs text-white font-bold py-1 px-4 rounded">
     Edit Profile
    </Link>
      </section>


<button onClick={()=>toggleAppointments(!displayAppointment)} type="button"
                  className='btn btn-sm rounded shadow-none bg-blue-900 py-3 ml-3 px-2'
                
                >
                
                  <span className='center text-white'>Make Appointments</span>
                </button>

{
  displayAppointment && <Fragment>


<form onSubmit = { e=>onSubmit(e)}  noValidate>
            <TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="First Name"
              label="First Name"
              name="firstname"
              value={firstname}
            />       

<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Last Name"
              label="Last Name"
              name="lastname"
              value={lastname}
            />     



<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Business ID"
              label="Business ID"
              name="businessId"
              value={businessId}
            />   



            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            
            >  
            Submit Form
            </Button>
         
          </form>


  </Fragment>
}










        </div>

        </Fragment>
    )
}

ProfileTop.propTypes = {
profile: PropTypes.object.isRequired,
createAppointments:PropTypes.func.isRequired,
}

export default  connect(null,{createAppointments})((ProfileTop))