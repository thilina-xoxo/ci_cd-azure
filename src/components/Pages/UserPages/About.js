import React from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

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
    height: '125vh',
  },
  image: {
    backgroundImage: 'url(https://image.shutterstock.com/image-photo/doctor-writing-on-medical-health-260nw-578137630.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    height: '63vh',
    position:'relative',
    fontFamily:'Arial',
    fontSize:'3rem',
    justifyContent:'center',
    alignItems:'center',
  },
  paper: {
    margin: theme.spacing(0,0),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: blue[400],
  },
  
  form: {
    width: '60%',
    height: '100%',
    marginTop: theme.spacing(0),
    backgroundColor: blue[400],
    color: blue[50],
  },

  typo:{
  color: blue[50],
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
    
      <Grid item xs={12} className={classes.image}>About Us</Grid>

      <Grid item xs={12} component={Paper} square>
        <div className={classes.paper}>
        <Box mt={5}></Box>

        <Typography component="h1" variant="h5"  className={classes.typo}>
           - Our Story -
           <Box mt={5}></Box>
          </Typography>
          
          <form className={classes.form} noValidate>

            <Grid container>
            <Typography component="h1" variant="h6"  className={classes.typo}>
            We are 4 undergraduates from faculty of Engineering, University of Ruhuna, who are trying to find a way to get rid of the infection threat of current pandamic situation. NoQueue is an application designed focusing on medical centers to provide an easy to use solution to avoid unnecessary exposure to crowds in waiting rooms. It facilitates an effective and convenient way to channel your doctor and reach your doctor just on time.  Our aim is to provide a significant way to minimize the infection threat of Covid-19 as well as to save your valuable time.  Our main outlook is to control the dynamic queues in medical centers while minimizing the risk of Covid -19 infection by limiting the patients per time.
            </Typography>
            </Grid>
            
            <Box mt={5}>
              <Copyright />
            </Box>
            <Box mt={5}></Box>
          </form>
        </div>
      </Grid>
    </Grid>
    
  );
}