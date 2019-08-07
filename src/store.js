import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';

import thunkMiddleWare from 'redux-thunk';

import reducer from './Reducers';

const loggerMiddleWare = createLogger();

export const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleWare,
        loggerMiddleWare
    )
);