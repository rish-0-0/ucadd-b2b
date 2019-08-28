import { firebaseAuth } from '../../firebase';

const passwordResetEmailSent = (email) => {
    return {
        type: 'PASSWORD_RESET_EMAIL_SENT',
        payload: {
            email,
        },
    };
};
const errorSendingPasswordResetEmail = (err) => {
    return {
        type: 'ERROR_SENDING_PASSWORD_RESET_EMAIL',
        payload: {
            err,
        },
    };
};
export const sendPasswordResetEmail = (email) => {
    return dispatch => {
        firebaseAuth.sendPasswordResetEmail(email)
        .then(() => {
            dispatch(passwordResetEmailSent(email));
        })   
        .catch(err => {
            console.log('ERROR SENDING PASSWORD RESET EMAIL');
            dispatch(errorSendingPasswordResetEmail(err.message));
        });
    };
};