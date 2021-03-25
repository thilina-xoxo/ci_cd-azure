import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
    cardContent: {
        flexGrow: 1,
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%',
        flexDirection:'row'
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },

    }));

function AppointmentIdItem({appointment:{
   
    businessId,
    firstName,
    lastName

}}) 


{
     
    const classes = useStyles();
  
    
return(
  <Fragment>
    <div>
        
      <Container className={classes.cardGrid} maxWidth='md'>
          <Typography>Business Id: {businessId}</Typography>
          <Typography>First Name: {firstName}</Typography>
          <Typography>Last Name: {lastName}</Typography>
                 
                  </Container>
                  </div></Fragment>
          
        )
      
}


AppointmentIdItem.propTypes = {
appointment:PropTypes.array.isRequired,
}


export default AppointmentIdItem