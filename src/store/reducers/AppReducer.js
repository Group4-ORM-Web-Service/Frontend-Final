import { isNull, isUndefined } from 'lodash';
import {
  AAD_ITEM_TOP_CARD,
  CLEAR_ITEM_FROM_CARD,
  REMOVE_ITEM,
  SET_CURRENT_LOCATION,
  SET_OPEN_SHOP_CARD,
  UPDATE_ITEM,
} from '../actions/AppAction';

// VARIABLE STORE APP STATE ========================================================
export const initialAppState = {
  currentLocation: '/home',
  isOpenCard: false,
  items: [],
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
    case SET_OPEN_SHOP_CARD:
      return { ...state, isOpenCard: action.payload };
    case AAD_ITEM_TOP_CARD:
      return { ...state, items: [...state.items, action.payload] };
    case CLEAR_ITEM_FROM_CARD:
      return { ...state, items: [] };
    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.variant_id !== action.payload.variant_id),
      };
    }
    case UPDATE_ITEM: {
      const updatedItem = state.items.map((item) => {
        if (item.variant_id === action.payload.variant_id) {
          return { ...action.payload };
        }
        return { ...item };
      });
      return {
        ...state,
        items: updatedItem,
      };
    }
    default:
      return { ...state };
  }
};
