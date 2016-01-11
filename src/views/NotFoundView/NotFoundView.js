/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_router_1 = require('react-router');
var NotFoundView = (function (_super) {
    __extends(NotFoundView, _super);
    function NotFoundView() {
        _super.apply(this, arguments);
    }
    NotFoundView.prototype.render = function () {
        return (React.createElement("div", {"className": 'container text-center'}, React.createElement("h1", null, "This is a demo 404 page!"), React.createElement("hr", null), React.createElement(react_router_1.Link, {"to": '/'}, "Back To Home View")));
    };
    return NotFoundView;
})(React.Component);
exports.NotFoundView = NotFoundView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFoundView;
