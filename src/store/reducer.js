import {FETCH_STORE_LIST, GET_GEOLOCATION, SELECT_STORE} from './actions'

const initialState = {
  storesList: [],
  location: {
    name: null,
    long: null,
    lat: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_STORE_LIST:

      if (action.payload.err) {
        return {
          ...state,
          getStoreListError: action.payload.err
        }
      } else {
        return {
          ...state,
          storeList: action.payload.storeList.stores
        };
      }

    case GET_GEOLOCATION:

      if (action.payload.err) {
        return {
          ...state,
          getGeolocationError: action.payload.err
        }
      } else {
        return {
          ...state,
          location: {
            name: action.payload.location[0].place_name,
            long: action.payload.location[0].center[0],
            lat: action.payload.location[0].center[1]
          }
        };
      }

    case SELECT_STORE:

      if (action.payload.err) {
        return {
          ...state,
          selectStoreError: action.payload.err
        }
      } else {
        return {
          ...state,
          selectedStore: action.payload.selectedStore
        };
      }

    default:
      return state;
  }
};

export default reducer;