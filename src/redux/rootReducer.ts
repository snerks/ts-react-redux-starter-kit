import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import counter from './modules/counter';

/* tslint:disable:no-unused-expression */
counter;
/* tslint:enable:no-unused-expression */

export default combineReducers({
  counter,
  router
});
