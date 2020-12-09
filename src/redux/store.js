import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { reducers } from './reducer';

const middleware = [thunk];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger())
}
export const store  = createStore(
    reducers,
    applyMiddleware(...middleware)
)
