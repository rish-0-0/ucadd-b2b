import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../Actions/auth/auth';
// import justTesting from '../Images/just_testing.svg';
// import firebaseBack from '../Images/firebase_back.svg';
// import retry from '../Images/fuck_firebase.png';
import home_page from '../Images/home_page.svg';
// import LiquidCheeze from '../Images/Liquid-Cheese.svg';
// import back from '../Images/login_side.svg';
// import furtherBack from '../Images/Large-Triangles.svg';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { fade,makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',    
    backgroundImage: 'url('+home_page+')',
    // backgroundPositionX:'150px',
    // // backgroundPositionY:'-100px',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPositionY:'-73px',

    // backgroundAttachment:'fixed',
    // backgroundColor:'#2d9ce4',
  },
  logo: {
    fontFamily:'Roboto',
    fontSize:'3.5rem',
    letterSpacing:'2px',
    // textTransform:'uppercase',
    fontWeight:'bold',
    color:'white',
  },
  links: {
    color:'lightblue',
    fontWeight:'500',
    textDecoration:'none',
    fontSize:'14px',
    fontFamily:'Roboto',
  },
  input: {
    // border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    // backgroundImage:'url('+justTesting+')',
    // backgroundRepeat:'no-repeat',
    // backgroundPositionX:'-2800px',
    // backgroundSize:'cover',
    // backgroundSize:'contain',
    // backgroundSize:'100% 100%',
    // background: 'url('+retry+'),url('+firebaseBack+')',
    // backgroundPositionX:'-1850px',
    // backgroundPositionY:'-100px',
    // backgroundRepeat:'no-repeat',
    // backgroundPosition:'500px -10px,center',
    // backgroundSize:'contain,cover',
    // backgroundAttachment:'fixed',
    height:'100vh',
  },
  typographyText: {
    color:'white',
    fontFamily:'Roboto',
    fontWeight:'bold',
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
  thodaRight: {
    // paddingLeft:'7%',
    // paddingTop:'-15%',
    paddingLeft:'5%',
    // backgroundColor:'#2d9be6',
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
      
      <Grid item xs={12} sm={12} md={4} elevation={6} className={classes.thodaRight}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h2" className={classes.logo}>
            Ucadd
          </Typography>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.typographyText}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              // label="Email Address"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.input}
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
              className={classes.input}
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
              <Grid item xs={12}>
                <Link className={classes.links} to='/forgot'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className={classes.links} to='/register'>
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
      <Grid item xs={false} sm={false} md={8} className={classes.image}>
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
