import React, { useState } from 'react';
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

const AppointmentMaking = ({setAlert}) => {

  const [formData, setFormData] = useState({
    name:"",
    age:"",
    phonenumber:'',
    email:"",
    date:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
    zip:"",
    docname:"",
    appdate:"",
  })

const{name,age,phonenumber,email,date,line1,line2,city,state,zip,docname,appdate}=formData; 

const onChange=e=>setFormData(
  {
    ...formData, [e.target.name]:e.target.value
  }
)

const onSubmit=e=>{
  e.preventDefault();
  if (name && age && phonenumber && email && date && line1 && city && state && zip && docname && appdate) {
    console.log('SUCCESS');}
        else{
          setAlert('Please fill all the required fileds','warning');
        }
      }

  const classes = useStyles();

  return (
    
        <div className={classes.paper}>
          
          <Box mt={5}></Box>
          <Typography component="h1" variant="h5">
            Personal details of patient
          </Typography>
          <Box mt={2}></Box>

          <form onSubmit = { e=>onSubmit(e)} className={classes.form} noValidate>
            <TextField
             onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullname"
              label="Full Name"
              name="name"
              value={name}
            />       

<Box mt={1}></Box>
<Grid item xs={12}>
      <InputLabel htmlFor="select">Gender</InputLabel>
      <NativeSelect id="select" fullWidth>
      <option value="1">Male</option>
      <option value="2">Female</option>
      </NativeSelect>
      </Grid>

      <TextField
       onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="age"
              label="Age"
              type="number"
              id="age"
              value={age}
            />
     
              <TextField
               onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phonenumber"
              label="Telephone Number"
              type="phonenumber"
              id="phonenumber"
              value={phonenumber}
            />

           <TextField
            onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
            /> 

<TextField
 onChange={e=>onChange(e)}
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="date"
    label="Birthday"
    type="date"
    name="date"
    value={date}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <Box mt={1}></Box>

  <Typography component="h7" variant="h7"  className={classes.typo}>
Address
</Typography>

<Box mt={2}></Box>
<Grid item xs={12}>
          <TextField
           onChange={e=>onChange(e)}
            required
            variant="outlined"
            id="line1"
            name="line1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            value={line1}
          />
           <Box mt={1}></Box>
        
          <TextField
           onChange={e=>onChange(e)}
          variant="outlined"
            id="line2"
            name="line2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            value={line2}
          />
           <Box mt={1}></Box>
        
          <TextField 
           onChange={e=>onChange(e)}
            required
            variant="outlined"
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value={city}
          />
           <Box mt={1}></Box>
       
          <TextField 
           onChange={e=>onChange(e)}
          required
          variant="outlined"
          id="state" 
          name="state"
          label="State/Province/Region"
          value={state}
          fullWidth />
           <Box mt={1}></Box>
       
          <TextField
           onChange={e=>onChange(e)}
            required
            variant="outlined"
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value={zip}
          />
        </Grid>
        <Box mt={3}></Box>

        <Typography component="h7" variant="h7"  className={classes.typo}>
            Have you previously attended our facility?
            </Typography>
            
              <FormGroup row>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="Yes"
                color="primary"
              />

               <FormControlLabel
        control={
          <Checkbox
            name="checkedB"/>}
            label="No"
            color="primary"
          />
           </FormGroup>
           <Box mt={1}></Box>
           <Typography component="h7" variant="h7"  className={classes.typo}>
           If yes, state on which condition and when?
           </Typography>

           <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="text"
              name="text"
            /> 

           <TextField
            onChange={e=>onChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="docname"
              label="Doctor's Name"
              name="docname"
              value={docname}
            /> 

    <TextField
     onChange={e=>onChange(e)}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="appdate"
      label="Appointment Date"
      type="appdate"
      name="appdate"
      value={appdate}
      className={classes.textField}
      InputLabelProps={{
      shrink: true,
    }}
  />

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

AppointmentMaking.propTypes={
  setAlert:PropTypes.func.isRequired
};

export default connect(null, { setAlert })(AppointmentMaking);