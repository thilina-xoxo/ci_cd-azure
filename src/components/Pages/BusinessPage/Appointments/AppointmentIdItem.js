import React, {useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  base: {
    width: '60%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function renderRow(props) {
  const {index} = props;

  return (
    <ListItem key={index}>
      <ListItemText primary={`${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
};

function AppointmentIdItem({appointment:{
   
  appointmentId,
  businessId,
  firstName,
  lastName,
  phoneNumber,
  treatmentId,
  age,
  gender,
  

}}) 

{

  const classes = useStyles();

  return (
    <Grid align='center'>
    <div align='center' className={classes.base}>
      <Accordion align='center'>
        <AccordionSummary align='center'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Typography className={classes.heading} component="h4" variant="h4">
          <h8 className="font-sans text-large font-bold text-blue-900">Appointment Number: {appointmentId}</h8>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {firstName}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {lastName}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {gender}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {age}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Telephone &nbsp;&nbsp;&nbsp;&nbsp;: {phoneNumber}
          </Typography>
        </AccordionDetails>
       
        
          
        <div><Link to={`/confirm/appoint/${appointmentId}`} className="bg-green-500 hover:bg-blue-800 text-xs text-white font-bold py-1 px-4 rounded">
          Confirm Appointment</Link>
         
        
        </div>
       
      </Accordion> 
    </div>
    </Grid>
  );
}

AppointmentIdItem.propTypes = {
  appointment:PropTypes.array.isRequired,
  }
  
  
  export default AppointmentIdItem