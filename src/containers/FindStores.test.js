import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { FindStores } from "./FindStores";
import StoreResults from "../components/StoreResults/StoreResults";

configure({ adapter: new Adapter() });

describe("<FindStores />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FindStores />);
  });

  it("If error prop is provided then the error message should appear", () => {
    wrapper.setProps({
      stores: [],
      searchLocation: {
        name: null,
        long: null,
        lat: null
      },
      error: true
    });
    expect(wrapper.find(".error-message"));
  });

  it("If a store prop is provided then StoreResults component should render", () => {
    wrapper.setProps({
      stores: [
        {
          address: "",
          category: "",
          distance: 1,
          location: "",
          name: 1,
          openingTimes: "",
          region: "",
          satnav: "",
          storeFormat: "",
          storeName: "",
          telephone: ""
        }
      ],
      searchLocation: {
        name: "test",
        long: 0,
        lat: 0
      },
      error: null
    });
    expect(wrapper.find(StoreResults));
  });
});
