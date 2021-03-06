import { Provider } from 'react-redux';
import DevTools from '../../containers/DevToolsWindow';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* tslint:disable:no-unused-expression */
React;
/* tslint:enable:no-unused-expression */
export default function createDevToolsWindow(store) {
    'use strict';
    const win = window.open(null, 'redux-devtools', // give it a name so it reuses the same window
    `width=400,height=${window.outerHeight},menubar=no,location=no,resizable=yes,scrollbars=no,status=no`);
    // reload in case it's reusing the same window with the old content
    win.location.reload();
    // wait a little bit for it to reload, then render
    setTimeout(() => {
        // Wait for the reload to prevent:
        // "Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element."
        win.document.write('<div id="react-devtools-root"></div>');
        win.document.body.style.margin = '0';
        ReactDOM.render(React.createElement(Provider, {"store": store}, React.createElement(DevTools, null)), win.document.getElementById('react-devtools-root'));
    }, 10);
}
