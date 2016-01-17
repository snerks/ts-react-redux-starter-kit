import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
/* tslint:disable:no-unused-expression */
React;
export default createDevTools(React.createElement(LogMonitor, null));
