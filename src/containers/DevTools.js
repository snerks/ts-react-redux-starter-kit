/// <reference path="../../typings/tsd.d.ts" />
var React = require('react');
var redux_devtools_1 = require('redux-devtools');
var redux_devtools_log_monitor_1 = require('redux-devtools-log-monitor');
var redux_devtools_dock_monitor_1 = require('redux-devtools-dock-monitor');
/* tslint:disable:no-unused-expression */
React;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_devtools_1.createDevTools(React.createElement(redux_devtools_dock_monitor_1.default, {"toggleVisibilityKey": 'ctrl-h', "changePositionKey": 'ctrl-q'}, React.createElement(redux_devtools_log_monitor_1.default, null)));
