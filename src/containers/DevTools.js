import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
React;
export default createDevTools(React.createElement(DockMonitor, {"toggleVisibilityKey": 'ctrl-h', "changePositionKey": 'ctrl-q'}, React.createElement(LogMonitor, null)));
