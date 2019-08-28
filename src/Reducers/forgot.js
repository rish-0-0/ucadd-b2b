const initialState = {
    emailVerificationSent:false,
    emailVerificationError:null,
    emailUpdated:false,
    emailUpdationError:null,
    profileUpdated:false,
    profileUpdationError:null,
    resetEmailSent: false,
    resetEmailSentTo:null,
    resetEmailError: null,
};
export const forget = (state=initialState,action) => {
    switch(action.type) {
        case 'EMAIL_VERIFICATION_ERROR':
            return {
                ...state,
                emailVerificationError:action.payload.err,
                emailVerificationSent:false,
            };
        case 'EMAIL_VERIFICATION_SENT':
            return {
                ...state,
                emailVerificationSent:true,
                emailVerificationError:null,
            };
        case 'UPDATE_EMAIL_ERROR':
            return {
                ...state,
                emailUpdated:false,
                emailUpdationError:action.payload.err,
            };
        case 'EMAIL_UPDATED':
            return {
                ...state,
                emailUpdated:true,
                emailUpdationError:null,
            };
        case 'PROFILE_UPDATION':
            return {
                ...state,
                profileUpdated:true,
                profileUpdationError:null,
            };
        case 'PROFILE_UPDATION_ERROR':
            return {
                ...state,
                profileUpdated:false,
                profileUpdationError:action.payload.err,
            };
        case 'PASSWORD_RESET_EMAIL_SENT':
            return {
                ...state,
                resetEmailError:null,
                resetEmailSent:true,
                resetEmailSentTo:action.payload.email,
            };
        case 'ERROR_SENDING_PASSWORD_RESET_EMAIL':
            return {
                ...state,
                resetEmailSent:false,
                resetEmailError:action.payload.err,
            };
        default:
            return {
                ...state,
            };
    }
};