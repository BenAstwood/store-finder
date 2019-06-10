import { FETCH_STORE_LIST, GET_GEOLOCATION } from "./actions";

const initialState = {
  storeList: [],
  location: {
    name: null,
    long: null,
    lat: null
  },
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORE_LIST:
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error
        };
      } else {
        return {
          ...state,
          storeList: action.payload.storeList.stores,
          error: null
        };
      }

    case GET_GEOLOCATION:
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error
        };
      } else {
        return {
          ...state,
          location: {
            name: action.payload.location[0].place_name,
            long: action.payload.location[0].center[0],
            lat: action.payload.location[0].center[1]
          },
          error: null
        };
      }

    default:
      return state;
  }
};

export default reducer;
