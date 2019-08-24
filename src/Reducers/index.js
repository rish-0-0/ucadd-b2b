import { combineReducers } from 'redux';

import {read} from './read';
import {write} from './write';
import {user} from './auth';
import {data} from './data';

const reducer = combineReducers({
    read,
    write,
    user,
    data,
});

export default reducer;