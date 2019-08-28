import React from 'react';
import { connect } from 'react-redux';
import { sendPasswordResetEmail } from '../Actions/auth/forgot';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// Icons
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';

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
      alignItems: 'center',
      textAlign: 'center',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

function ForgotPassword(props) {
    const classes = useStyles();
    const [email,setEmail] = React.useState('');
    return(
        <Container component="main" maxWidth="lg">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Forgot Password
                </Typography>
                <Avatar className={classes.avatar}>
                    <LockOpenIcon />
                </Avatar>
                <Typography component="h2" variant="h5">
                    Enter your email adress
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                value={email}
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={(e) => {
                                e.preventDefault();
                                props.sendPasswordResetEmail(email);
                            }}
                            >Send Password Reset Email</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="h2" variant="h5">
                                {props.resetEmailSent ? 'Email has been sent for password reset to '+props.resetEmailSentTo : null}
                                {props.resetEmailError ? props.resetEmailError : null}
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
const mapStateToProps = (state) => {
    const { resetEmailSent, resetEmailSentTo, resetEmailError } = state.forget;
    return {
        resetEmailSent,
        resetEmailSentTo,
        resetEmailError,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendPasswordResetEmail: (email) => {dispatch(sendPasswordResetEmail(email))},
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ForgotPassword);
