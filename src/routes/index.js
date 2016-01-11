/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../layouts/corelayout/corelayout.tsx" />
var React = require('react');
var react_router_1 = require('react-router');
/* tslint:disable:no-unused-expression */
React;
/* tslint:enable:no-unused-expression */
// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
//
// Re-introduced ../ prefix. All tests continue to pass
var CoreLayout_1 = require('../layouts/CoreLayout/CoreLayout');
var HomeView_1 = require('../views/HomeView/HomeView');
var NotFoundView_1 = require('../views/NotFoundView/NotFoundView');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Route, {"path": '/', "component": CoreLayout_1.default}, React.createElement(react_router_1.IndexRoute, {"component": HomeView_1.default}), React.createElement(react_router_1.Route, {"path": '/404', "component": NotFoundView_1.default}), React.createElement(react_router_1.Redirect, {"from": '*', "to": '/404'})));
