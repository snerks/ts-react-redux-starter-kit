/// <reference path="../typings/tsd.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createHistory, useBasename } from 'history';

// import { syncReduxAndRouter } from 'redux-simple-router';
let reduxSimpleRouter: any = require('redux-simple-router');
let syncReduxAndRouter = reduxSimpleRouter.syncReduxAndRouter;

import routes from './routes/index';
import Root from './containers/Root';
import configureStore from './redux/configureStore';

/* tslint:disable:no-unused-expression */
React;
/* tslint:enable:no-unused-expression */

const history = useBasename(createHistory)({
  basename: __BASENAME__
});

const store = configureStore(window.__INITIAL_STATE__);

syncReduxAndRouter(history, store, (state: any) => state.router);

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
);
