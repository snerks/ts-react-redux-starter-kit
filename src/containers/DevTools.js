/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
/* tslint:disable:no-unused-expression */
React;
export default createDevTools(React.createElement(DockMonitor, {"toggleVisibilityKey": 'ctrl-h', "changePositionKey": 'ctrl-q'}, React.createElement(LogMonitor, null)));
