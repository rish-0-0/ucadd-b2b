export const getVideoUrl = (id) => {
    return {
        type:'GET_VIDEO_URL',
        payload: {
            id,
        },
    };
};