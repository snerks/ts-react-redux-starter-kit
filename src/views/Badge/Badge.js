/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
export class Badge extends React.Component {
    // static propTypes: any = {
    //    counter: React.PropTypes.number.isRequired,
    //    increment: React.PropTypes.func.isRequired,
    //    doubleAsync: React.PropTypes.func.isRequired
    // };
    render() {
        return (React.createElement("div", null, React.createElement("h1", null, "React Redux Starter Kit - in Typescript"), React.createElement("h2", null, "Sample Counter 5"), React.createElement("button", {"onClick": () => this.props.increment(1)}, "Increment"), React.createElement("button", {"onClick": () => this.props.doubleAsync()}, "Double")));
    }
}
export default Badge;
