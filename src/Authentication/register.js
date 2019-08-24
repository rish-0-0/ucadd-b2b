import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../Actions/auth/auth';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
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
}));

function SignUp(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Register to Ucadd
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="class"
                label="Class"
                name="class"
                // autoComplete="lname"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
                value={email}
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                name="password"
                // label="Password"
                placeholder="Password"
                type="password"
                id="password"
                // autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {(e) =>{
              e.preventDefault();
              props.signUp(email,password);
            }}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Link to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
            <Grid item xs={12}>
              {props.signUpStarted
              ? <CircularProgress/>
              : null}
              {props.signUpError
              ? <Typography variant="body1">
                  {props.signUpError}
              </Typography>
              :null}
              {props.signUpEmailVerificationSent
              ? <Typography variant="body1">
                  Verifcation Email has been sent.
                  Click <Link to='/'>Here</Link> to continue.                  
              </Typography>
              :null}
              {props.signUpEmailVerificationError
              ? <Typography variant="body1">
                  {props.signUpEmailVerificationError}
              </Typography>
              :null}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => {
  let {
    signUpStarted,
    signUpError,
    signUpEmailVerificationSent,
    signUpEmailVerificationError,
    loggedIn,
    email,
  } = state.user;
  return {
    signUpStarted,
    signUpError,
    signUpEmailVerificationSent,
    signUpEmailVerificationError,
    loggedIn,
    email,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email,password) => {dispatch(signUp(email,password))},
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
