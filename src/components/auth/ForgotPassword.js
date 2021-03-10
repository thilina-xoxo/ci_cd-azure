import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='primary' href='./'>
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
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: pink.A700,
  },
  form: {
    width: '40%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ForgotPassword = ({setAlert}) => {

  const [formData, setFormData] = useState({
    email:"",
    password:"",
    password2:""
  })

const{email,password,password2}=formData; 

const onChange=e=>setFormData(
  {
    ...formData, [e.target.name]:e.target.value
  }
)

const onSubmit=e=>{
  e.preventDefault();
  if (email && password) {
    if (password !== password2) {
      setAlert('Password do not match' , 'danger');
        }else{
          console.log('SUCCESS');
        }}
        else{
          setAlert('Please fill all the required fileds','warning');
        }
      }

        

  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component='h1' variant='h5'>
        Reset Password
      </Typography>

      <form onSubmit = { e=>onSubmit(e)} className={classes.form} noValidate>
        <TextField
          onChange={e=>onChange(e)}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          value={email}
        />

        <TextField
          onChange={e=>onChange(e)}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='New Password'
          type='password'
          id='password'
          value={password}
        />

        <TextField
          onChange={e=>onChange(e)}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password2'
          label='Confirm Password'
          type='password'
          id='password2'
          value={password2}
        />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Reset
        </Button>
        <Grid container>
          <Grid item>
            <Link href='signup' variant='body2'>
              {'Not a member? Sign Up'}
            </Link>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
}

ForgotPassword.propTypes={
  setAlert:PropTypes.func.isRequired
};

export default connect(null, { setAlert })(ForgotPassword);

