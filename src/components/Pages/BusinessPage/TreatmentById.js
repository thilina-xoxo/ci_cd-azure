import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../../layouts/Spinner'
import TreatmentIdItem from './TreatmentIdItem'
import {getTreatmentbyID} from '../../../actions/treatment'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { lightBlue } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    paper: {
      margin: theme.spacing(0,0),
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      backgroundColor: green.A100,
    },
    form: {
        width: '50%',
        marginTop: theme.spacing(1),
      },
    }));


const TreatmentById = ({ match,getTreatmentbyID,user,auth,treatment:{ treatment, loading}}) => {

useEffect(()=>{
    getTreatmentbyID(match.params.businessId)
},[getTreatmentbyID])


const classes = useStyles();

    return( 

        <div className={classes.paper}>
          
          <Box mt={5}></Box>
          <Typography component="h1" variant="h4">
          <h6 className="font-sans text-xl font-semibold text-3xl text-blue-900">Find Your Doctor</h6>
          </Typography>
          <Box mt={2}></Box>

          <form className={classes.form} noValidate>
     

        <Fragment>

        {treatment === null || loading ? <Spinner/>:<Fragment>
         
        <div className='card' >
        {treatment.length>0 ?(
                       treatment.map(treatment=>(
                           <TreatmentIdItem key={treatment._id} treatment={treatment}/>
                       ))
                   ):(
                    
                        <div className=''><h4 className='text-2xl text-red-600 text-center'>No treatments found</h4></div>

                   
                   )}
        </div>
              
        
          </Fragment>}
         </Fragment>
         <Box mt={5}></Box>
          </form>
        </div>
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