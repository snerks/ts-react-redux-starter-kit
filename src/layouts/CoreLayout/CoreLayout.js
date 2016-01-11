var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../../typings/tsd.d.ts" />
var React = require('react');
require('../../styles/core.scss');
var CoreLayout = (function (_super) {
    __extends(CoreLayout, _super);
    function CoreLayout() {
        _super.apply(this, arguments);
    }
    CoreLayout.prototype.render = function () {
        return (React.createElement("div", {"className": 'page-container'}, React.createElement("div", {"className": 'view-container'}, this.props.children)));
    };
    return CoreLayout;
})(React.Component);
exports.CoreLayout = CoreLayout;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CoreLayout;
