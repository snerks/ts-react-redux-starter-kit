var redux_1 = require('redux');
var redux_simple_router_1 = require('redux-simple-router');
var counter_1 = require('./modules/counter');
/* tslint:disable:no-unused-expression */
counter_1.default;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    counter: counter_1.default,
    router: redux_simple_router_1.routeReducer
});
