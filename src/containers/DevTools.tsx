/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

/* tslint:disable:no-unused-expression */
React;
/* tslint:enable:no-unused-expression */

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q' >
    <LogMonitor />
  </DockMonitor>
);
