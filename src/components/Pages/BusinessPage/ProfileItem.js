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
import ProfileItemTop from './ProfileItemTop';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  
    cardContent: {
        flexGrow: 1,
      },
      card: {
        height: '100%',
        width:'80%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '58%',
        flexDirection:'row',
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },

    }));

function ProfileItem({ profile:{
    name,
    email,
    totalCrowd,
    currentCrowd,
    phoneNumber,
    postalCode,
    businessType,
    summary,
    openingHours,
    Appointments,
    treatments,
    imageName,
    imageSrc,
    businessId

}}) 



{
    
 
   
    const classes = useStyles();
  
    
return(
  
    <div>
      

          <Grid item xs={12} component={Paper} square>
      <Container align='center' className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={2}>

        
              <Grid item xs={12}>
                <Card align='left' className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://media.gettyimages.com/photos/doctors-walking-in-clinic-picture-id941762276?s=612x612'
                    
                  />



        <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {name}
                    </Typography>
                    <Typography>{email}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                    <Link to={`/businessproffile/${businessId}`}>
                    More Info
                   </Link> 
                    </Button>
                  </CardActions>
                  
                 
                  </Card>
                  
              </Grid>
            
                  </Grid>     
                 
                  </Container></Grid>
                  </div>
          
        )
      
}




ProfileItem.propTypes = {
profile:PropTypes.object.isRequired,
}



export default ProfileItem