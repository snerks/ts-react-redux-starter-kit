/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import { Link } from 'react-router';

export class NotFoundView extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className='container text-center'>
        <h1>This is a demo 404 page!</h1>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  }
}

export default NotFoundView;
