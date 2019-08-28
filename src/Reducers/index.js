import { combineReducers } from 'redux';

import {read} from './read';
import {write} from './write';
import {user} from './auth';
import {data} from './data';
import {forget} from './forgot';

const reducer = combineReducers({
    read,
    write,
    user,
    data,
    forget,
});

export default reducer;