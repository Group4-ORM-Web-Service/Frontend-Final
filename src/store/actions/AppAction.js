// KEY SET APP STATE ============================================================
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';

// SET APP PAYLOAD ===========================================================
export const setCurrentLocation = (payload) => ({
  type: SET_CURRENT_LOCATION,
  payload,
});
