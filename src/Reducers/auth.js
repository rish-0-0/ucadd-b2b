const loggedIn = window.sessionStorage.getItem('loggedIn');
const name = window.sessionStorage.getItem('name');
const email = window.sessionStorage.getItem('email');
const photoUrl = window.sessionStorage.getItem('photoUrl');
const uid = window.sessionStorage.getItem('uid');
const emailVerified = window.sessionStorage.getItem('emailVerified');
const firebaseUser = JSON.parse(sessionStorage.getItem('firebaseUser'));
const initialState = {
  loginStarted:false,
  loginError:null,

  signUpStarted:false,
  signUpError:null,
  signUpEmailVerificationSent:false,
  signUpEmailVerificationError:null,

  loggedIn:loggedIn,
  user:firebaseUser,
  email:email,
  emailVerified:emailVerified,
  uid:uid,
  name:name,
  class:null,
  batch:null,
  photoUrl:photoUrl,
  
  logoutError:null,
};
export const user = (state=initialState,action) => {
  switch(action.type) {
    // HANDLE LOGIN ACTIONS OF AUTHENTICATION
    case 'LOGIN_STARTED':
      return {
        ...state,
        loginStarted:true,
        loggedIn:false,
        loginError:null,
      };
    case 'GET_FIREBASE_USER':
      window.sessionStorage.setItem('firebaseUser',JSON.stringify(action.payload.user));
      return {
        ...state,
        user:action.payload.user,
      };
    case 'LOGIN_SUCCESSFUL':
      window.sessionStorage.setItem('loggedIn',true);
      window.sessionStorage.setItem('name',action.payload.name);
      window.sessionStorage.setItem('email',action.payload.email);
      window.sessionStorage.setItem('photoUrl',action.payload.photoUrl);
      window.sessionStorage.setItem('uid',action.payload.uid);
      window.sessionStorage.setItem('emailVerified',action.payload.emailVerified);
      return {
        ...state,
        loginStarted:false,
        loginError:null,
        loggedIn:true,
        name:action.payload.name,
        email:action.payload.email,
        photoUrl:action.payload.photoUrl,
        uid:action.payload.uid,
        emailVerified:action.payload.emailVerified,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginStarted:false,
        loggedIn:false,
        loginError:action.payload.err,
      };
    // HANDLE SIGNUP ACTIONS OF AUTHENTICATION
    case 'SIGN_UP_EMAIL_VERIFICATION_ERROR':
      return {
        ...state,
        signUpEmailVerificationError:action.payload.err,
        signUpStarted:false,
      };
    case 'SIGN_UP_EMAIL_VERIFICATION_SENT':
      return {
        ...state,
        signUpEmailVerificationSent:true,
        signUpStarted:false,
        signUpError:null,
        loggedIn:true,
      };
    case 'SIGN_UP_ERROR':
      return {
        ...state,
        signUpStarted:false,
        signUpError:action.payload.err,
        loggedIn:false,
      };
    case 'SIGN_UP_SUCCESSFUL':
      window.sessionStorage.setItem('loggedIn',true);
      window.sessionStorage.setItem('name',action.payload.name);
      window.sessionStorage.setItem('email',action.payload.email);
      window.sessionStorage.setItem('photoUrl',action.payload.photoUrl);
      window.sessionStorage.setItem('uid',action.payload.uid);
      window.sessionStorage.setItem('emailVerified',action.payload.emailVerified);
      return {
        ...state,
        loggedIn:true,
        signUpStarted:false,
        name:action.payload.name,
        email:action.payload.email,
        photoUrl:action.payload.photoUrl,
        uid:action.payload.uid,
        emailVerified:action.payload.emailVerified,
      };
    case 'SIGN_UP_STARTED':
      return {
        ...state,
        signUpStarted:true,
      };

    // LOGOUT HANDLING OF AUTHENTICATION
    case 'LOGOUT_ERROR':
      return {
        ...state,
        logoutError:action.payload.err,
        email:state.email,
        name:state.name,
        class:state.class,
        batch:state.batch,
        loggedIn:state.loggedIn,
      };
    case 'LOGOUT_SUCCESSFUL':
        window.sessionStorage.removeItem('loggedIn');
        window.sessionStorage.removeItem('name');
        window.sessionStorage.removeItem('email');
        window.sessionStorage.removeItem('photoUrl');
        window.sessionStorage.removeItem('uid');
        window.sessionStorage.removeItem('emailVerified');
        window.sessionStorage.removeItem('firebaseUser');
      return {
        ...state,
        loggedIn:false,
        email:null,
        name:null,
        class:null,
        batch:null,
      };
    default:
      return {
        ...state,
      };
  }
};