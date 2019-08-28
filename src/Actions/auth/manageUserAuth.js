import { logout } from './auth';

// const user = firebaseAuth.currentUser;
const emailVerificationSent = () => {
    return {
        type: 'EMAIL_VERIFICATION_SENT',
    };
};
const emailVerificationError = (err) => {
    return {
        type:'EMAIL_VERIFICATION_ERROR',
        payload: {
            err,
        },
    };
};
// send a verification email
export const verifyEmail = (user) => {
    return dispatch => {
        user.sendEmailVerification()
        .then(() => {
            dispatch(emailVerificationSent());
            dispatch(logout());
        })
        .catch(err => {
            console.log("ERROR OCURRED WHILE SENDING EMAIL VERIFICATION TO LOGGED IN USER",err.message);
            dispatch(emailVerificationError(err.message));
        });
    };
};






// EMAIL UPDATION
const emailUpdated = () => {
    return {
        type: 'EMAIL_UPDATED',
    };
};
const updateEmailError = (err) => {
    return {
        type: 'UPDATE_EMAIL_ERROR',
        payload: {
            err,
        },
    };
};
export const updateEmail = (email,user) => {
    return dispatch => {
        user.updateEmail(email)
        .then(() => {
            dispatch(emailUpdated());
            dispatch(logout());
        })
        .catch(err => {
            console.log("EMAIL_UPDATION_ERR",err.message);
            dispatch(updateEmailError(err.message));
        });
    };
};



// UPDATE FIREBASE AUTH PROFILE
const profileUpdated = () => {
    return {
        type: 'PROFILE_UPDATION',
    };
};
const profileUpdationError = (err) => {
    return {
        type: 'PROFILE_UPDATION_ERROR',
        payload: {
            err,
        },
    };
};
export const updateProfile = (profile,user) => {
    return dispatch => {
        user.updateProfile(profile)
        .then(() => {
            dispatch(profileUpdated());
            dispatch(logout());
        })
        .catch(err => {
            console.log("ERROR WHILE UPDATING PROFILE",err.message);
            dispatch(profileUpdationError(err.message));
        });
    };
};

// UPDATE PASSWORD
const passwordUpdated = () => {
    return {
        type: 'PASSWORD_UPDATED',
    };
};
const passwordUpdationError = (err) => {
    return {
        type: 'PASSWORD_UPDATION_ERROR',
        payload: {
            err,
        },
    };
};
export const updatePassword = (password,user) => {
    return dispatch => {
        user.updatePassword(password)
        .then(() => {
            dispatch(passwordUpdated());
            dispatch(logout());
        })
        .catch(err => {
            console.log("ERROR WHILE UPDATING PASSWORD",err.message);
            dispatch(passwordUpdationError(err.message));
        });
    };
};