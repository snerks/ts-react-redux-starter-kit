import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions as counterActions } from '../../redux/modules/counter';
// import classes from './HomeView.scss';
var classes = require('./HomeView.scss');
// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
    counter: state.counter
});
export class HomeView extends React.Component {
    // static propTypes = {
    //  counter: React.PropTypes.number.isRequired,
    //  doubleAsync: React.PropTypes.func.isRequired,
    //  increment: React.PropTypes.func.isRequired
    // };
    // constructor(props) {
    //   super(props);
    // }
    render() {
        return (React.createElement("div", {"className": 'container text-center'}, React.createElement("h1", null, 'React Redux Starter Kit - in Typescript'), React.createElement("h2", null, "Sample Counter: ", React.createElement("span", {"className": classes['counter--green']}, this.props.counter)), React.createElement("button", {"className": 'btn btn-default', "onClick": () => this.props.increment(1)}, "Increment"), React.createElement("button", {"className": 'btn btn-default', "onClick": this.props.doubleAsync}, "Double (Async)"), React.createElement("hr", null), React.createElement(Link, {"to": '/404'}, "Go to 404 Page")));
    }
}
export default connect(mapStateToProps, counterActions)(HomeView);
