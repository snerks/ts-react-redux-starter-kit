// import * as thunk from 'redux-thunk';
let thunk = require('redux-thunk');
import rootReducer from './rootReducer';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

export default function configureStore(initialState: any): any {
    'use strict';

    let createStoreWithMiddleware;
    const middleware = applyMiddleware(thunk as any);

  if (__DEBUG__) {
    createStoreWithMiddleware = compose(
      middleware,
      (window as any).devToolsExtension
          ? (window as any).devToolsExtension()
        : require<any>('containers/DevTools').default.instrument()
    );
  } else {
    createStoreWithMiddleware = compose(middleware);
  }

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require<any>('./rootReducer').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
