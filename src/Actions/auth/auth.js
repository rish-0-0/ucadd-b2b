import { firebaseAuth } from '../../firebase';


/*

  LOGIN DISPATCHERS

*/
const loginStarted = () => {
  return {
    type:'LOGIN_STARTED',
  };
};
const loginSuccessful = (parcel) => {
  return {
    type:'LOGIN_SUCCESSFUL',
    payload: {
      ...parcel,
    },
  };
};
const loginError = (err) => {
  return {
    type:'LOGIN_ERROR',
    payload: {
      err
    },
  };
};

export const login = (email,password) => {
  return dispatch => {
    dispatch(loginStarted());
    firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(() => {
      let user = firebaseAuth.currentUser;
      console.log(user);
      let parcel = {
        'name':user.displayName,
        'email':user.email,
        'photoUrl':user.photoURL,
        'emailVerified':user.emailVerified,
        'uid':user.uid, //Do not use this to authenticate backend server
      };
      dispatch(loginSuccessful(parcel));
    })
    .catch(err => {
      console.log("ERROR OCURRED WHILE LOGGING IN",err.message);
      dispatch(loginError(err.message));
    });
  };
};


/*


SIGNUP DISPATCHERS



*/

// SIGNUP DISPATCHERS
const signUpStarted = () => {
  return {
    type:'SIGN_UP_STARTED',
  };
};
const signUpSuccessful = (parcel) => {
  return {
    type:'SIGN_UP_SUCCESSFUL',
    payload: {
      ...parcel,
    },
  };
};
const signUpError = (err) => {
  return {
    type:'SIGN_UP_ERROR',
    payload: {
      err,
    },
  };
};
const signUpEmailVerificationSent = () => {
  return {
    type:'SIGN_UP_EMAIL_VERIFICATION_SENT',
  };
};
const signUpEmailVerificationError = (err) => {
  return {
    type: 'SIGN_UP_EMAIL_VERIFICATION_ERROR',
    payload: {
      err,
    },
  };
};


export const signUp = (email,password) => {
  return dispatch => {
    dispatch(signUpStarted());
    firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(() => {
      let user = firebaseAuth.currentUser;
      let parcel = {
        'name':user.displayName,
        'email':user.email,
        'photoUrl':user.photoURL,
        'emailVerified':user.emailVerified,
        'uid':user.uid, //Do not use this to authenticate backend server
      };
      dispatch(signUpSuccessful(parcel));
      user.sendEmailVerification()
      .then(() => {
        dispatch(signUpEmailVerificationSent());
      })
      .catch(err => {
        console.log("Error ocurred while sending verification email",err.message);
        dispatch(signUpEmailVerificationError(err.message));
      });

    })
    .catch(err => {
      console.log('Error ocurred while registration',err.message);
      dispatch(signUpError(err.message));
    });
  };
};

/*

LOGOUT DISPATCHERS


*/





// LOGOUT DISAPTCHERS
const logoutSuccessful = () => {
  return {
    type:'LOGOUT_SUCCESSFUL',
  };
};
const logoutError = (err) => {
  return {
    type:'LOGOUT_ERROR',
    payload: {
      err,
    },
  };
};

export const logout = () => {
  return dispatch => {
    firebaseAuth.signOut()
    .then(() => {
      dispatch(logoutSuccessful());
    })
    .catch(err => {
      console.log('Error ocurred while logging out',err.message);
      dispatch(logoutError(err.message));
    });
  };
};

