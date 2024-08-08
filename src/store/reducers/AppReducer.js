import { isNull, isUndefined } from 'lodash';
import { SET_CURRENT_LOCATION } from '../actions/AppAction';

// VARIABLE STORE APP STATE ========================================================
export const initialAppState = {
  currentLocation: '/home',
};

// SET APP STATE ===================================================================
export const appReducer = (state, action) => {
  console.log('action.type==>', action.type, action.payload);
  if (isNull(action) || isUndefined(action)) {
    console.log('appReducer.js, error with action is null');
    return {
      ...state,
    };
  }
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    default:
      return { ...state };
  }
};
