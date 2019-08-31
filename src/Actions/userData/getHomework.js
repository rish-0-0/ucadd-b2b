import { storageRef } from '../../firebase';
const fetchingHomework = () => {
    return {
        type:'FETCHING_HOMEWORK',
    };
};
const receivedHomeworkUrl = (homeworkUrl) => {
    return {
        type:'RECEIVED_HOMEWORK',
        payload: {
            homeworkUrl,
        },
    };
};
const receivedError = (err) => {
    return {
        type:'RECEIVED_ERROR',
        payload: {
            err,
        },
    };
};
export const getHomeworkUrl = (folder,filename) => {
    return dispatch => {
        dispatch(fetchingHomework());
        storageRef.child(folder+'/'+filename).getDownloadURL()
        .then(url => {
            dispatch(receivedHomeworkUrl(url));
        })
        .catch(err => {
            console.log("FAILURE TO GET DOWNLOAD URL",err.message);
            dispatch(receivedError(err.message));
        });
    };
};
