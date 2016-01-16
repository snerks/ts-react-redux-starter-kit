import { combineReducers } from 'redux';
// import { routeReducer as router } from 'redux-simple-router';
let reduxSimpleRouter = require('redux-simple-router');
let router = reduxSimpleRouter.routeReducer;
import counter from './modules/counter';
/* tslint:disable:no-unused-expression */
counter;
export default combineReducers({
    counter,
    router
});
