import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
React;
export default createDevTools(React.createElement(LogMonitor, null));
