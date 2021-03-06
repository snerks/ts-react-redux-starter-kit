/// <reference path="../../../typings/tsd.d.ts" />
import * as Redux from 'react-redux';
import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT: string = 'COUNTER_INCREMENT';

// ------------------------------------
// Actions
// ------------------------------------
export const increment: any = createAction(COUNTER_INCREMENT, (value: any = 1) => value);

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync: any = () => {
    return (dispatch: any, getState: any) => {
    setTimeout(() => {
      dispatch(increment(getState().counter));
    }, 1000);
  };
};

export const actions: Redux.MapDispatchToPropsObject = {
  increment,
  doubleAsync
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    [COUNTER_INCREMENT]: (state: any, { payload }: any): any => state + payload
}, 1);
