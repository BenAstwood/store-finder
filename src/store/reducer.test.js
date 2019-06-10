import reducer from "./reducer";
import { FETCH_STORE_LIST, GET_GEOLOCATION } from "./actions";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      storesList: [],
      location: {
        name: null,
        long: null,
        lat: null
      },
      error: null
    });
  });

  it("GET_GEOLOCATION", () => {
    expect(
      reducer(
        {
          storeList: [],
          location: {
            name: null,
            long: null,
            lat: null
          },
          error: null
        },
        {
          type: GET_GEOLOCATION,
          payload: {
            location: [
              {
                place_name: "test",
                center: [0, 0]
              }
            ]
          }
        }
      )
    ).toEqual({
      storeList: [],
      location: {
        name: "test",
        long: 0,
        lat: 0
      },
      error: null
    });
  });

  it("FETCH_STORE_LIST", () => {
    expect(
      reducer(
        {
          storeList: [],
          location: {
            name: "test",
            long: 0,
            lat: 0
          },
          error: null
        },
        {
          type: FETCH_STORE_LIST,
          payload: {
            storeList: { stores: [0] }
          }
        }
      )
    ).toEqual({
      storeList: [0],
      location: {
        name: "test",
        long: 0,
        lat: 0
      },
      error: null
    });
  });
});
