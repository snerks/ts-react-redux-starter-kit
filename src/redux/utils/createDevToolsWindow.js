/// <reference path="../../../typings/tsd.d.ts" />
var react_redux_1 = require('react-redux');
var DevToolsWindow_1 = require('../../containers/DevToolsWindow');
var React = require('react');
var ReactDOM = require('react-dom');
/* tslint:disable:no-unused-expression */
React;
/* tslint:enable:no-unused-expression */
function createDevToolsWindow(store) {
    'use strict';
    var win = window.open(null, 'redux-devtools', // give it a name so it reuses the same window
    "width=400,height=" + window.outerHeight + ",menubar=no,location=no,resizable=yes,scrollbars=no,status=no");
    // reload in case it's reusing the same window with the old content
    win.location.reload();
    // wait a little bit for it to reload, then render
    setTimeout(function () {
        // Wait for the reload to prevent:
        // "Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element."
        win.document.write('<div id="react-devtools-root"></div>');
        win.document.body.style.margin = '0';
        ReactDOM.render(React.createElement(react_redux_1.Provider, {"store": store}, React.createElement(DevToolsWindow_1.default, null)), win.document.getElementById('react-devtools-root'));
    }, 10);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createDevToolsWindow;
