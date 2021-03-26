import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import img from '../../../assests/Doc.jpg'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '55ch',
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
      large: {
        width: theme.spacing(11),
        height: theme.spacing(11),
      },

    }));

function TreatmentIdItem({treatment:{
   
    businessId,
    name,
    price,
    doctorName

}}) 


{
     
    const classes = useStyles();
  
    
return(
    <Grid item xs={12} align='center' square>
    <List className={classes.root}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar><ListItemAvatar>
        <Avatar className={classes.large} alt="Kavindya" src={img} />
      </ListItemAvatar></ListItemAvatar>
      <ListItemText
        primary={<Typography>&nbsp;&nbsp;&nbsp;&nbsp;Doctor's Name: {doctorName}</Typography>}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
             <Typography>&nbsp;&nbsp;&nbsp;&nbsp;Category: {name}</Typography>
            </Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Doctor Fee: {price}
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
  </List> 

 </Grid>
    
          
        )
      
}


TreatmentIdItem.propTypes = {
treatment:PropTypes.array.isRequired,
}


export default TreatmentIdItem