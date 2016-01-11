/// <reference path="../typings/tsd.d.ts" />
var React = require('react');
var ReactDOM = require('react-dom');
var history_1 = require('history');
var redux_simple_router_1 = require('redux-simple-router');
var routes_1 = require('./routes');
var Root_1 = require('./containers/Root');
var configureStore_1 = require('./redux/configureStore');
/* tslint:disable:no-unused-expression */
React;
/* tslint:enable:no-unused-expression */
var history = history_1.useBasename(history_1.createHistory)({
    basename: __BASENAME__
});
var store = configureStore_1.default(window.__INITIAL_STATE__);
redux_simple_router_1.syncReduxAndRouter(history, store, function (state) { return state.router; });
// Render the React application to the DOM
ReactDOM.render(React.createElement(Root_1.default, {"history": history, "routes": routes_1.default, "store": store}), document.getElementById('root'));
