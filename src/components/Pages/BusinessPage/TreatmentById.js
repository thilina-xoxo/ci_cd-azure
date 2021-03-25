import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Spinner from '../../layouts/Spinner'
import TreatmentIdItem from './TreatmentIdItem'
import {getTreatmentbyID} from '../../../actions/treatment'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const TreatmentById = ({ match,getTreatmentbyID,user,auth,treatment:{ treatment, loading}}) => {

useEffect(()=>{
    getTreatmentbyID(match.params.businessId)
},[getTreatmentbyID])




    return( 
     

        <Fragment>

        {treatment === null || loading ? <Spinner/>:<Fragment>
         <div> <Grid item><Link to='/appointment' className="bg-green-500 hover:bg-blue-800 text-xs text-white font-bold py-1 px-4 rounded">
          Back to Business</Link></Grid>      
        </div>
         
      
        <div className='card' >
        {treatment.length>0 ?(
                       treatment.map(treatment=>(
                           <TreatmentIdItem key={treatment._id} treatment={treatment}/>
                       ))
                   ):(
                   <h4 className='text-2xl text-danger'>No treatments found</h4>
                   )}
        </div>
              
        
          </Fragment>}
         </Fragment>
 
         );
         };
         

    

TreatmentById.propTypes = {
getTreatmentbyID:PropTypes.func.isRequired,
treatment:PropTypes.object.isRequired,
auth:PropTypes.object.isRequired,
user: PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    treatment:state.treatment,
    auth:state.auth,   
    user: state.auth.user,
})

export default connect(mapStateToProps,{ getTreatmentbyID}) (TreatmentById)