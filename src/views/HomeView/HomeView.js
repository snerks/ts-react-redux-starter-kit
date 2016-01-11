var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../../typings/tsd.d.ts" />
var React = require('react');
var react_redux_1 = require('react-redux');
var react_router_1 = require('react-router');
var counter_1 = require('../../redux/modules/counter');
// import classes from './HomeView.scss';
var classes = require('./HomeView.scss');
// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
var mapStateToProps = function (state) { return ({
    counter: state.counter
}); };
var HomeView = (function (_super) {
    __extends(HomeView, _super);
    function HomeView() {
        _super.apply(this, arguments);
    }
    // static propTypes = {
    //  counter: React.PropTypes.number.isRequired,
    //  doubleAsync: React.PropTypes.func.isRequired,
    //  increment: React.PropTypes.func.isRequired
    // };
    HomeView.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {"className": 'container text-center'}, React.createElement("h1", null, 'React Redux Starter Kit - in Typescript'), React.createElement("h2", null, "Sample Counter: ", React.createElement("span", {"className": classes['counter--green']}, this.props.counter)), React.createElement("button", {"className": 'btn btn-default', "onClick": function () { return _this.props.increment(1); }}, "Increment"), React.createElement("button", {"className": 'btn btn-default', "onClick": this.props.doubleAsync}, "Double (Async)"), React.createElement("hr", null), React.createElement(react_router_1.Link, {"to": '/404'}, "Go to 404 Page")));
    };
    return HomeView;
})(React.Component);
exports.HomeView = HomeView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, counter_1.actions)(HomeView);
