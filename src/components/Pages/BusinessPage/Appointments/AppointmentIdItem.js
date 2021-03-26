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


const useStyles = makeStyles((theme) => ({
  root: {
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
   
  businessId,
  firstName,
  lastName,
  phoneNumber,
  treatmentId,

}}) 

{

  const classes = useStyles();

  return (
    <Grid align='center'>
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Appointment Number: {renderRow}
      </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            First Name: {firstName}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Last Name: {lastName}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Phone Number: {phoneNumber}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Treatment ID: {treatmentId}
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
    </Grid>
  );
}

AppointmentIdItem.propTypes = {
  appointment:PropTypes.array.isRequired,
  }
  
  
  export default AppointmentIdItem