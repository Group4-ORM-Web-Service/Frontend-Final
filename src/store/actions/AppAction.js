// KEY SET APP STATE ============================================================
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';
export const SET_OPEN_SHOP_CARD = 'SET_OPEN_SHOP_CARD';
export const AAD_ITEM_TOP_CARD = 'AAD_ITEM_TOP_CARD';
export const CLEAR_ITEM_FROM_CARD = 'CLEAR_ITEM_FROM_CARD';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

// SET APP PAYLOAD ===========================================================
export const setCurrentLocation = (payload) => ({
  type: SET_CURRENT_LOCATION,
  payload,
});
export const setOpenShopCard = (payload) => ({
  type: SET_OPEN_SHOP_CARD,
  payload,
});
export const addItemToCard = (payload) => ({
  type: AAD_ITEM_TOP_CARD,
  payload,
});

export const clearItems = (payload) => ({
  type: CLEAR_ITEM_FROM_CARD,
  payload,
});
export const removeItem = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});
export const updateItem = (payload) => ({
  type: UPDATE_ITEM,
  payload,
});
