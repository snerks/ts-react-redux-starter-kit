/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
/* tslint:disable:no-unused-expression */
React;
export default class Root extends React.Component {
    get content() {
        return (React.createElement(Router, {"history": this.props.history}, this.props.routes));
    }
    get devTools() {
        if (__DEBUG__) {
            if (__DEBUG_NEW_WINDOW__) {
                if (!(window.devToolsExtension)) {
                    require('../redux/utils/createDevToolsWindow').default(this.props.store);
                }
                else {
                    (window.devToolsExtension).open();
                }
            }
            else if (!(window.devToolsExtension)) {
                const DevTools = require('containers/DevTools').default;
                return React.createElement(DevTools, null);
            }
        }
    }
    render() {
        return (React.createElement(Provider, {"store": this.props.store}, React.createElement("div", {"style": { height: '100%' }}, this.content, this.devTools)));
    }
}
Root.propTypes = {
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired
};
