var thunk = require('redux-thunk');
var rootReducer_1 = require('./rootReducer');
var redux_1 = require('redux');
function configureStore(initialState) {
    var createStoreWithMiddleware;
    var middleware = redux_1.applyMiddleware(thunk);
    if (__DEBUG__) {
        createStoreWithMiddleware = redux_1.compose(middleware, window.devToolsExtension
            ? window.devToolsExtension()
            : require('containers/DevTools').default.instrument());
    }
    else {
        createStoreWithMiddleware = redux_1.compose(middleware);
    }
    var store = createStoreWithMiddleware(redux_1.createStore)(rootReducer_1.default, initialState);
    if (module.hot) {
        module.hot.accept('./rootReducer', function () {
            var nextRootReducer = require('./rootReducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
