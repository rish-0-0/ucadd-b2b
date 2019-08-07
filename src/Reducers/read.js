let initialState = {
    loading: false,
    readItems: [],
    readError: null,
};
export function read(state=initialState,action) {
    switch(action.type) {
        case 'GETTING_DATA':
            return {
                ...state,
                loading: true,
            };
        case 'RECEIVED_DATA':
            console.log('READ_REDUCER',action.payload);
            return {
                ...state,
                loading: false,
                readItems: action.payload,
            };
        case 'RECEIVED_ERROR':
            return {
                ...state,
                loading: false,
                readError: action.payload.err,
            };
        default:
            return state;
    }
}