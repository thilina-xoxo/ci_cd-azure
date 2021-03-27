import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
      cardContent: {
        flexGrow: 1,
      },
      card: {
        height: '100%',
        width:'100%',  
        display: 'flex',
        flexDirection: 'row',
      },
      cardMedia: {
        paddingTop: '60%',
        flexDirection:'row',
        align:'left'
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },

    }));

function AppointmentItem({profile:{  
    businessId,
    name
}})


{ 

    const classes = useStyles();
    
return(
        <Typography>
  <Grid item xs={12} component={Paper} square>
  <div align='center' className={classes.paper}>

                     <Card className={classes.card} variant="outlined">
                   
                    <CardContent align="left" className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                    </Typography>
                   
                    <Typography> <h8 className="font-sans text-large font-semibold text-blue-900">Business Name: </h8><h8 className="font-sans text-large ">{name}</h8></Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                    <Link to={`/appoint/${businessId}`}>
                   All appointments of the business
                   </Link> 
                    </Button>
                  </CardActions>
                  </Card>
                 
                 </div>
                  </Grid>
                 
                  </Typography>
        )
      
}

AppointmentItem.propTypes = {
appointment:PropTypes.array.isRequired,
}



export default AppointmentItem