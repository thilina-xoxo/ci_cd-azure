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
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';



function AppointmentItem({appointment:{  
    businessId,
    firstname,
    lastname
}})


{ 
    
return(
  
    <div>
      
                    <Typography>{businessId}</Typography>
                    <Typography>{firstname}</Typography>
                    <Typography>{lastname}</Typography>
                 
                  </div>
          
        )
      
}

AppointmentItem.propTypes = {
appointment:PropTypes.array.isRequired,
}



export default AppointmentItem