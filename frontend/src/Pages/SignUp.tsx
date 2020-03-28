import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Navbar } from '../Components/Navbar';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  containerTitle: {
    margin: 'auto',
    display: 'inline-block',
    'margin-top': '180px',
    position: 'relative',
    color: '#3d3f70',
    'font-weight': 'bold',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <div>
      <Navbar mainPage={ false } />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className='container'>
          <Typography
            component='h1'
            variant='h2'
            className={ classes.containerTitle }
          >
            Welcome to Ping!
          </Typography>
          <Typography variant='h6'>
            Fill out the information below to get started.
          </Typography>
          <form className={ classes.form } noValidate>
            <Grid container spacing={ 2 }>
              <Grid item xs={ 12 }>
                <TextField
                  autoComplete='name'
                  name='Name'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password2'
                  label='Re-enter password'
                  type='password'
                  id='password2'
                  autoComplete='new-password'
                />
              </Grid>

              <Typography variant='subtitle2'>
                We need your Zip Code to get stores near you
              </Typography>
              <Grid item xs={ 12 }>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='zipCode'
                  label='Zip Code'
                  type='zipCode'
                  id='zipCode'
                  autoComplete='postal-code'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={ classes.submit }
            >
              Sign Up
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link to='/login'>Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
