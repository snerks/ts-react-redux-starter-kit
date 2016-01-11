/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var react_router_1 = require('react-router');
/* tslint:disable:no-unused-expression */
React;
var Root = (function (_super) {
    __extends(Root, _super);
    function Root() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Root.prototype, "content", {
        // static propTypes = {
        //  history: React.PropTypes.object.isRequired,
        //  routes: React.PropTypes.element.isRequired,
        //  store: React.PropTypes.object.isRequired
        // };
        get: function () {
            return (React.createElement(react_router_1.Router, {"history": this.props.history}, this.props.routes));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Root.prototype, "devTools", {
        get: function () {
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
                    var DevTools = require('containers/DevTools').default;
                    return React.createElement(DevTools, null);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Root.prototype.render = function () {
        return (React.createElement(react_redux_1.Provider, {"store": this.props.store}, React.createElement("div", {"style": { height: '100%' }}, this.content, this.devTools)));
    };
    return Root;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
