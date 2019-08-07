let initialState = {
    stillWriting: false,
    wroteDocumentId: null,
    writeError: null,
};
export function write(state=initialState,action) {
    switch(action.type) {
        case 'WRITING_DATA':
            return {
                ...state,
                stillWriting: true,
            };
        case 'WROTE_DATA':
            return {
                ...state,
                stillWriting: false,
                wroteDocumentId: action.payload.docId
            };
        case 'WRITE_ERROR':
            return {
                ...state,
                stillWriting: false,
                writeError: action.payload.err,
            };
        default:
            return state;
    }
}