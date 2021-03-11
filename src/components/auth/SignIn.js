import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth'
import { Redirect } from 'react-router-dom'

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
  image: {
    backgroundImage: 'url(https://invention.si.edu/sites/default/files/styles/story_banner_image/public/blog-guest-fox-susannah-2017-03-09-shutterstock_189632216-banner-edit.jpg?itok=eNxGJoO4)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: pink.A700,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3,0,2),
  },

}));

const SignIn = ({setAlert,login,isAuthenticated}) => {

  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })

const{email,password}=formData; 

const onChange=e=>setFormData(
  {
    ...formData, [e.target.name]:e.target.value
  }
)

const onSubmit=e=>{

  e.preventDefault();
  if (email && password) {
    login(email,password)
  
  }
        else{
          setAlert('Please fill all the fileds','warning');
        }
      }

     

  const classes = useStyles();
  if(isAuthenticated){
    return <Redirect to="/business"/>
  }
  return (
    <Grid container component="main" className={classes.root}>
     
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <div className={classes.paper}>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form onSubmit = { e=>onSubmit(e)} className={classes.form} noValidate>
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
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="Primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>

                <Link href="signup" variant="body2">
                  {"Not a member? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            
            <Box mt={5}>
              <Copyright />
            </Box>

          </form>
        </div>
      </Grid>
    </Grid>
  );
}

SignIn.propTypes={
  login:PropTypes.func.isRequired,
  setAlert:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
};

const mapStateToProps=state=>({
  isAuthenticated:state.auth.isAuthenticated
})


export default connect(mapStateToProps,{login,setAlert})(SignIn);
