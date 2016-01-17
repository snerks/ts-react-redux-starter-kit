/// <reference path="../../../typings/tsd.d.ts" />
import * as React from 'react';
import { Link } from 'react-router';
export class NotFoundView extends React.Component {
    render() {
        return (React.createElement("div", {"className": 'container text-center'}, React.createElement("h1", null, "This is a demo 404 page!"), React.createElement("hr", null), React.createElement(Link, {"to": '/'}, "Back To Home View")));
    }
}
export default NotFoundView;
