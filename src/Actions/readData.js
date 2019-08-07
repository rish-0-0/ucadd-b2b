// import API from '../api';
import DB from '../firebase';
const gettingData = () => {
    return {
        type: 'GETTING_DATA',
    };
};
const receivedData = (stuff) => {
    return {
        type: 'RECEIVED_DATA',
        payload: {
            ...stuff,
        }
    };
};
const receivedError = (err) => {
    return {
        type: 'RECEIVED_ERROR',
        payload: {
            err,
        },
    };
};
export const readData = (collection,document) => {
    return dispatch => {
        dispatch(gettingData());
        if(document) {
            // IF A SPECIFIC DOCUMENT IS REQUESTED
            let docRef = DB.collection(collection).doc(document);
            docRef.get()
            .then(doc => {
                let documents = [];
                documents.push(doc.data());
                let parcel = {
                    'items': documents,
                };
                dispatch(receivedData(parcel));
            })
            .catch(err => {
                dispatch(receivedError(err.message));
            });
        } else {
            // THE WHOLE COLLECTION IS REQUESTED
            DB.collection(collection).get()
            .then((querySnapshot) => {
                let documents = [];
                querySnapshot.forEach((doc) => {
                    documents.push(doc.data());
                });
                let parcel = {
                    'items': documents,
                };
                dispatch(receivedData(parcel));
            })
            .catch(err => {
               dispatch(receivedError(err.message)); 
            });
        }
    };
};