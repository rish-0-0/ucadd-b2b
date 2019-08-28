import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../Actions/auth/auth';
import back from '../Images/login_side.svg';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: 'url('+back+')',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY:'100px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'transparent',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign:'center',
  },
  submit: {
    width:'50%',
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignInSide(props) {
  const classes = useStyles();
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  if(props.loggedIn) {
    return <Redirect to='/' />
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h2">
            Ucadd
          </Typography>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {(e)=> {
                e.preventDefault();
                props.login(email,password);
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/forgot'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link to='/register'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                {props.loginStarted
                ? <CircularProgress />
                : null}
              </Grid>
              <Grid item xs={12}>
                {props.loginError
                ? <Typography variant="body1">
                    {props.loginError}
                </Typography>
                : null}
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) => {
  const { loggedIn,loginStarted,loginError } = state.user;
  return {
    loggedIn,
    loginStarted,
    loginError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email,password) => {dispatch(login(email,password))},
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(SignInSide);
