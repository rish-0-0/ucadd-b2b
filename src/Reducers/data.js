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
    line: [
        {
            name: 'Test1', 'physics':300, 'chemistry':400, 'math':500,
        },
        {
            name:'Test2','physics':500,'chemistry':200,'math':600,
        },
        {
            name:'Test3','physics':550,'chemistry':375,'math':200,
        },
    ],
    table: [
        ["Suryateja Ratakumtla","RPCT2",80,7,800,90,10,2500,40,25,5000,11,2350],
        ["Chinmay Gupta","RPCT2",40,15,2400,95,2,900,80,2,50,9,1900],
        ["Chinmay Chiplunkar","RPCT2",90,2,40,80,14,3500,70,5,150,3,900],
        ["Rishabh Anand","RPCT2",88,3, 100,90,10, 2500,60,10,2500,4,1200],
        ["Avi Shrivastava","RPCT2",92,1,50,90,10,2500,50,15,3500,6,1800],
        
    ],
};
export const data = (state=initialState,action) => {
    switch(action.type) {
        default:
            return {
                ...state,
            };
    }
}