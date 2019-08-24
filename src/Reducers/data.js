const initialState = {
    // Pie chart
    pie: [
        {
            'name':'Math',
            value:500,
        },
        {
            'name':'Physics',
            value:400,
        },
        {
            'name':'Chemistry',
            value:700,
        },
    ],
    // Line
};
export const data = (state=initialState,action) => {
    switch(action.type) {
        default:
            return {
                ...state,
            };
    }
}