import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../Actions/auth/auth';
import {
  verifyEmail,
  updateEmail,
  updateProfile,
  updatePassword,
} from '../../../Actions/auth/manageUserAuth';

import {mainListItems} from '../Dashboard/listItems';
import SimpleTable from '../../Layout/SimpleTable';
import SectionTitle from '../../SectionTitle';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// Icon imports
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  gridContainer: {
    marginTop:theme.spacing(4),
    marginBottom:theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 340,
  },
  anotherFixedHeight: {
    height:360,
  },
  button: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign:'center',
  },
  submit: {
    width:'100%',
    margin: theme.spacing(3, 0, 2),
  },
}));

function Profile(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [name,setName] = React.useState('');
    const user = props.user;
    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Dashboard
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={props.notifications} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                {props.loggedIn ? <Button variant="contained" color="secondary" onClick={() => props.logout()}>
                    Logout
                </Button> : null}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={2} className={classes.gridContainer}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={classes.paper}>
                                <SectionTitle>User Information</SectionTitle>
                                <SimpleTable
                                  rows={[
                                  ['Email',props.email],
                                  ['Email Verified',props.emailVerified ? 'Yes' : 'No'],
                                  ['Name',props.name]]}
                                  columns={['User Information','Value']}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                          <form className={classes.form}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="email"
                              label="New Email"
                              name="email"
                              autoComplete="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                              onClick = {(e)=> {
                                e.preventDefault();
                                props.updateEmail(email,user);
                              }}
                            >
                              Update Email
                            </Button>
                          </form>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                          <form className={classes.form}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="name"
                              label="New Name"
                              name="name"
                              autoComplete="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                              onClick = {(e)=> {
                                e.preventDefault();
                                const profile = {
                                  'displayName': name,
                                };
                                props.updateProfile(profile,user);
                              }}
                            >
                              Update Your Name
                            </Button>
                          </form>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                          <form className={classes.form}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              type="password"
                              id="password"
                              label="New Password"
                              name="password"
                              autoComplete="password"
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
                                props.updatePassword(password,user);
                              }}
                            >
                              Update Password
                            </Button>
                          </form>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                          {!props.emailVerified ? <Button color="secondary" onClick={() => props.verifyEmail(props.user)}>Send Verification Email</Button> : null}
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
const mapStateToProps = (state) => {
    const { user,loggedIn,name,email,emailVerified } = state.user;
    return {
        user,
        name,
        email,
        emailVerified,
        loggedIn,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logout())},
        verifyEmail: (user) => {dispatch(verifyEmail(user))},
        updateEmail: (email,user) => {dispatch(updateEmail(email,user))},
        updateProfile: (profile,user) => {dispatch(updateProfile(profile,user))},
        updatePassword: (password,user) => {dispatch(updatePassword(password,user))},
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Profile);