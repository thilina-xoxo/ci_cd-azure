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
import axios from 'axios';
// redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='primary' href='#'>
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
    backgroundImage:
      'url(https://invention.si.edu/sites/default/files/styles/story_banner_image/public/blog-guest-fox-susannah-2017-03-09-shutterstock_189632216-banner-edit.jpg?itok=eNxGJoO4)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
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
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = ({ setAlert, register }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    UserName: '',
    email: '',
    password: '',
    ConfirmPassword: '',
  });

  const { UserName, email, password, ConfirmPassword } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password != ConfirmPassword) {
      setAlert('Password do not match', 'danger');
    } else {
      register(UserName, email, password, ConfirmPassword);
    }
  };

  return (
    <Grid container component='main' className={classes.root}>
      <Grid it em xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>

          <form
            className={classes.form}
            className={classes.submit}
            onSubmit={(e) => onSubmit(e)}
          >
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              id='fullname'
              label='Full Name'
              name='UserName'
              value={UserName}
              onChange={(e) => onChange(e)}
            />

            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              name='email'
              label='Email'
              type='eamil'
              id='email'
              value={email}
              onChange={(e) => onChange(e)}
            />

            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              value={password}
              onChange={(e) => onChange(e)}
            />

            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              name='ConfirmPassword'
              label='Confirm Password'
              type='password'
              id='confirm'
              value={ConfirmPassword}
              onChange={(e) => onChange(e)}
            />

            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='I agree all statements in terms of service'
            />

            <Button type='submit' fullWidth variant='contained' color='primary'>
              Sign Up
            </Button>

            <Grid container>
              <Grid item>
                {'Already have an account? '}
                <Link href='http://localhost:3000/signin' variant='body2'>
                  {'Login here'}
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
};

SignUp.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(SignUp);
