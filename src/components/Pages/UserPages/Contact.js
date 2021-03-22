import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
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

const Contact = ({setAlert}) => {

  const [formData, setFormData] = useState({
    name:'',
    email:"",
    message:"",
  })

const{name,email,message}=formData; 

const onChange=e=>setFormData(
  {
    ...formData, [e.target.name]:e.target.value
  }
)

const onSubmit=e=>{
  e.preventDefault();
  if (email && message) {
    console.log('SUCCESS');}
        else{
          setAlert('Please fill all the fileds','warning');
        }
      }
      
  const classes = useStyles();

  return (
    <div className={classes.paper}>

      <Typography component='h1' variant='h5'>
        Got a question?
      </Typography>

      <Box mt={4}></Box>

      <Typography component='h1' variant='h7'>
        Contact Us
      </Typography>

      <form onSubmit = { e=>onSubmit(e)} className={classes.form} noValidate>
        <TextField
        onChange={e=>onChange(e)}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='name1'
          label='Full Name'
          name='name'
          value={name}
        />

        <TextField
        onChange={e=>onChange(e)}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='email'
          label='Email Address'
          type='email'
          id='email'
          value={email}
        />

        <TextField
        onChange={e=>onChange(e)}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='message'
          label='Message for our team'
          type='message'
          id='message'
          multiline
          rows={4}
          value={message}
        />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Submit
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

Contact.propTypes={
  setAlert:PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Contact);

