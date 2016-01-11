/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

/* tslint:disable:no-unused-expression */
React;
/* tslint:enable:no-unused-expression */

export interface RootProps extends React.Props<any> {
    history: any;
    routes: any;
    store: any;
}

export default class Root extends React.Component<RootProps, {}> {
  // static propTypes = {
  //  history: React.PropTypes.object.isRequired,
  //  routes: React.PropTypes.element.isRequired,
  //  store: React.PropTypes.object.isRequired
  // };

  get content(): JSX.Element {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    );
  }

  get devTools(): JSX.Element {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!((window as any).devToolsExtension)) {
          require<any>('../redux/utils/createDevToolsWindow').default(this.props.store);
        } else {
            ((window as any).devToolsExtension).open();
        }
      } else if (!((window as any).devToolsExtension)) {
          const DevTools = require<any>('containers/DevTools').default;
        return <DevTools />;
      }
    }
  }

  render(): JSX.Element {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          {this.content}
          {this.devTools}
        </div>
      </Provider>
    );
  }
}
