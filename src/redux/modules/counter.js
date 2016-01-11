var redux_actions_1 = require('redux-actions');
// ------------------------------------
// Constants
// ------------------------------------
exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';
// ------------------------------------
// Actions
// ------------------------------------
exports.increment = redux_actions_1.createAction(exports.COUNTER_INCREMENT, function (value) {
    if (value === void 0) { value = 1; }
    return value;
});
// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
exports.doubleAsync = function () {
    return function (dispatch, getState) {
        setTimeout(function () {
            dispatch(exports.increment(getState().counter));
        }, 1000);
    };
};
exports.actions = {
    increment: exports.increment,
    doubleAsync: exports.doubleAsync
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions((_a = {},
    _a[exports.COUNTER_INCREMENT] = function (state, _a) {
        var payload = _a.payload;
        return state + payload;
    },
    _a
), 1);
var _a;
