import { combineReducers } from 'redux';

import {read} from './read';
import {write} from './write';

const reducer = combineReducers({
    read,
    write,
});

export default reducer;