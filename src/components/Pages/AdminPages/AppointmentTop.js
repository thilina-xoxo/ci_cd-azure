import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Appointments from '../../layouts/AdminDashboard/Appointments'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
      Paper:{
      height:'100%',
      width:'100%',
      alignContent:'center',
      margin: theme.spacing(0,0),
      display: 'flex',
      flexDirection:'column',
      backgroundColor: blue[100],
      paddingBottom:'20'
     },

    }));

function AppointmentTop({appointment:{  
    businessId,
    
}})


{ 

    const classes = useStyles();
    
return(
      
  <Grid item xs={12} component={Paper} square>
  <div align='center' className={classes.paper}>
  <Typography>
                    <Button size='small' color='primary'>
                    <Link to={`/appoint/${businessId}`}>
                    All Appointments of Business:{businessId}
                   </Link> 
                    </Button></Typography>
                 
                 </div>
                  </Grid>
                 
               
        )
      
}

AppointmentTop.propTypes = {
appointment:PropTypes.array.isRequired,
}



export default AppointmentTop