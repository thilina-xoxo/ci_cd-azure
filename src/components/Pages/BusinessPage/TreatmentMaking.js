import React, { useState,useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { lightBlue } from '@material-ui/core/colors';
import { blueGrey } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {createTreatments} from '../../../actions/treatment'
import {getProfilebyID} from '../../../actions/businessprofile'
import Paper from '@material-ui/core/Paper';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" href="./">
        NoQueue Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(0,0),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: lightBlue[50],
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: pink.A700,
  },
  form: {
    width: '40%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3,0,2),
  },
  typo:{
    color: blueGrey[700],
    },

}));

const TreatmentMaking = ({setAlert,createTreatments,history,auth,match,getProfilebyID,profile:{profile,loading}}) => {

  const [formData, setFormData] = useState({
   businessId:"",
   specialization:"",
   doctorName:"",
   price:'',
   availability:"",
   day:"",
   date:"",
   timefrom:"",
   timeto:""

  })

  useEffect(() => {

    if (!profile) getProfilebyID(match.params.businessId);
    if (!loading && profile) {
      const profileData = { ...formData };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
     
      setFormData(profileData);
        }
          // eslint-disable-next-line
    }, [loading,getProfilebyID,profile])


const{businessId,specialization,doctorName,price,availability,day,date,timefrom,timeto}=formData; 

const onChange=e=>setFormData(
  {
    ...formData, [e.target.name]:e.target.value
  }
)

const onSubmit=e=>{
  e.preventDefault();
  if (businessId && specialization && doctorName && price && availability && day && date && timefrom && timeto) {

    e.preventDefault()
    createTreatments(formData,history)
  }
        else{
          setAlert('Please fill all the required fileds','warning');
        }
      }

      const [dayDisabled, toggleDisabled] = useState(false);

  const classes = useStyles();

  return (
    
        <div className={classes.paper}>
          
          <Box mt={5}></Box>
          <Typography component="h1" variant="h5">
            Details of the Doctor
          </Typography>
          <Box mt={2}></Box>

          <form onSubmit = { e=>onSubmit(e)} className={classes.form} noValidate>
            <TextField
            onChange={e=>onChange(e)}
        
            margin="normal"
            required
            fullWidth
            id="Business ID"
           
            name="businessId"
            type="hidden"
            value={businessId}
            />       

<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Category"
              name="specialization"
              value={specialization}
            />     



<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Doctor Name"
              label="Doctor's Name"
              name="doctorName"
              value={doctorName}
            />   



<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Price"
              label="Doctor Fee"
              name="price"
              value={price}
            />  
            

<Box mt={2}></Box>

<Grid item xs={12}>
      <InputLabel htmlFor="select" onChange={e=>onChange(e)} value={availability}>Availability</InputLabel>
      <NativeSelect id="select" fullWidth>
      <option value="1">Daily</option>
      <option value="2">Weekdays</option>
      <option value="3">Weekends</option>
      <option value="4">Weekly</option>
      <option value="5"  onChange={e => {
          setFormData({...formData, 5: !5});
          toggleDisabled(!dayDisabled);}}>Monthly</option>

      </NativeSelect>
      </Grid>

      <Box mt={3}></Box>
<Grid item xs={12}>
      <InputLabel htmlFor="select" value={day} onChange={e=>onChange(e)}>If weekly, choose the day</InputLabel>
      <NativeSelect id="select" fullWidth>
      <option value="1">Sunday</option>
      <option value="2">Monday</option>
      <option value="3">Tuesday</option>
      <option value="4">Wednesday</option>
      <option value="5">Thursday</option>
      <option value="6">Friday</option>
      <option value="7">Saturday</option>
      </NativeSelect>
      </Grid>

      <Box mt={2}></Box>
      <InputLabel htmlFor="select" value={date} onChange={e=>onChange(e)}>If monthly, choose the date</InputLabel>
<TextField
 onChange={e=>onChange(e)}
    variant="outlined"
    margin="normal"
    
    fullWidth
    id="date"
    label="Available Date"
    type="date"
    name="date"
    value={date}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />

<Box mt={2}></Box>
<Typography component="h7" variant="h8"  className={classes.typo}>
Available Time
</Typography>

<Grid container>
<Grid item xs={6}>
<TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              fullWidth
              id="timefrom"
              label="From"
              name="timefrom"
              value={timefrom}
            />  
        </Grid>
        <Grid item xs={6}>
        <TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              fullWidth
              id="timeto"
              label="To"
              name="timeto"
              value={timeto}
            />  
        </Grid>
        </Grid>


  <Box mt={1}></Box>

 
        <Box mt={3}></Box>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >  
            Submit Form
            </Button>
            
            <Box mt={4}>
              <Copyright />
            </Box>
            <Box mt={5}></Box>
          </form>
        </div>
  );
}

TreatmentMaking.propTypes={
  setAlert:PropTypes.func.isRequired,
  createTreatments:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  getProfilebyID:PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired
};

const mapStateToProps=state=>({
  auth:state.auth,
 
  profile:state.profile
})

export default connect(mapStateToProps, { setAlert,createTreatments,getProfilebyID })(TreatmentMaking);