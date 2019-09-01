const videoIdMap = {
    'M12CIRC46':{
        'url':'https://youtu.be/SbISpF0xVD0',
        'title':'Circles 46',
        'practiceQuestion':{
            'title':'For 3 circles, how many radical centers?',
        },
    },
    'M11CMPD08':{
        'url':'https://youtu.be/I_aU6tkpVMw',
        'title':'Compound Angles 8',
        'practiceQuestion':{
            'title':'What is the period of cot(x)?',
        },
    },
    'M11FUNC01':{
        'url':'https://youtu.be/ms5iwbKkaQ0',
        'title':'Introduction to Functions',
        'practiceQuestion':{
            'title':'Is every function a relation?',
        },
    },
};
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
    bar: [
        {
            name:'DPT1', 'physics':50,'chemistry':75,'math':90,amt:215,
        },
        {
            name:'DPT2','physics':65,'chemistry':90,'math':80,amt:235,
        },
        {
            name:'RPCT1','physics':45,'chemistry':45,'math':55,amt:145,
        },
    ],
    loading:false,
    homeworkUrl:null,
    error:null,
    solved:false,
    videoPlaying:null,
    practiceQuestionContent:null,
};
export const data = (state=initialState,action) => {
    switch(action.type) {
        case 'GET_VIDEO_URL':
            const id = action.payload.id;
            const videoInfo = videoIdMap[id];
            return {
                ...state,
                videoPlaying:videoInfo.url,
                practiceQuestionContent:videoInfo.practiceQuestion.title,
            };
        case 'FETCHING_HOMEWORK':
            return {
                ...state,
                loading:true,
            };
        case 'RECEIVED_HOMEWORK':
            localStorage.setItem('homeworkUrl',action.payload.homeworkUrl);
            return {
                ...state,
                loading:false,
                homeworkUrl:action.payload.homeworkUrl,
                error:null,
            };
        case 'RECEIVED_ERROR':
            return {
                ...state,
                loading:false,
                error:action.payload.err,
            };
        default:
            return {
                ...state,
            };
    }
}