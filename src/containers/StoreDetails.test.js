import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { StoreDetails } from "./StoreDetails";
import SelectedStoreDetails from "../components/SelectedStoreDetails/SelectedStoreDetails";
import { Redirect } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<StoreDetails />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StoreDetails />);
  });

  it("If selectedStore is data is not provided then page should be redirected", () => {
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });

  it("If selectedStore data is provided then SelectedStoreDetails component should be rendered", () => {
    wrapper.setProps({
      location: { state: { storeIndex: 0 } },
      stores: [{ location: { longitude: 0, latitude: 0 } }]
    });
    expect(wrapper.find(SelectedStoreDetails)).toHaveLength(1);
  });
});
