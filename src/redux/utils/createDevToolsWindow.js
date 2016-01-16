import { Provider } from 'react-redux';
import DevTools from '../../containers/DevToolsWindow';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
React;
export default function createDevToolsWindow(store) {
    'use strict';
    const win = window.open(null, 'redux-devtools', `width=400,height=${window.outerHeight},menubar=no,location=no,resizable=yes,scrollbars=no,status=no`);
    win.location.reload();
    setTimeout(() => {
        win.document.write('<div id="react-devtools-root"></div>');
        win.document.body.style.margin = '0';
        ReactDOM.render(React.createElement(Provider, {"store": store}, React.createElement(DevTools, null)), win.document.getElementById('react-devtools-root'));
    }, 10);
}
