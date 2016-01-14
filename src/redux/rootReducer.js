import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import counter from './modules/counter';
/* tslint:disable:no-unused-expression */
counter;
export default combineReducers({
    counter,
    router
});
