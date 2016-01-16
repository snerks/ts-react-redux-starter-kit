import * as React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
React;
import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import HomeView from '../views/HomeView/HomeView';
import NotFoundView from '../views/NotFoundView/NotFoundView';
export default (React.createElement(Route, {"path": '/', "component": CoreLayout}, React.createElement(IndexRoute, {"component": HomeView}), React.createElement(Route, {"path": '/404', "component": NotFoundView}), React.createElement(Redirect, {"from": '*', "to": '/404'})));
