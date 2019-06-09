import {mapBoxKey, morrisonsApiKey} from "../tokens";

export const GET_GEOLOCATION = 'GET_GEOLOCATION';
export const FETCH_STORE_LIST = 'FETCH_STORE_LIST';
export const SELECT_STORE = 'SELECT_STORE';

export const fetchStoreList = (long, lat) => {
  return dispatch => {

    if (long === null || lat === null) {
      return dispatch(fetchListError(`Geolcocation not supplied correctly. Longtitude: ${long}, latitude: ${lat}`))
    }

    return fetch(`https://api.morrisons.com/location/v2/stores?apikey=${morrisonsApiKey}&distance=50000&offset=0&storeformat=supermarket&lat=${lat}&lon=${long}&limit=5`)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchListSuccess(json));
        return json;
      })
      .catch(err => fetchListError(err));
  };
}

export const fetchListSuccess = stores => ({
  type: FETCH_STORE_LIST,
  payload: {
    storeList: stores
  }
});

export const fetchListError = err => ({
  type: FETCH_STORE_LIST,
  payload: {
    error: err
  }
});

export const getGeolocation = inputedLocation => {
  return dispatch => {

    return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(inputedLocation)}.json?access_token=${mapBoxKey}&limit=5`)
      .then(response => response.json())
      .then(json => {
        dispatch(getGeolocationSuccess(json));
        return json;
      })
      .then(jsonData => {

        // TODO: Currently only first item of returned locations array is used. Extend
        // so that if there are multiple options then the user has a choice.
        return dispatch(fetchStoreList(jsonData.features[0].center[0], jsonData.features[0].center[1]))
      })
      .catch(err => getGeolocationError(err));

  };
};

export const getGeolocationSuccess = location => ({
  type: GET_GEOLOCATION,
  payload: {
    location: location.features
  }
});

export const getGeolocationError = err => ({
  type: GET_GEOLOCATION,
  payload: {
    error: err
  }
});