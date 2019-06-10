import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./Header";
import Button from "../Button/Button";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("If no navigateTo prop is provided then the Button component should not appear", () => {
    expect(wrapper.find(Button)).toHaveLength(0);
  });

  it("If navigateTo prop is provided then the Button component should appear", () => {
    wrapper.setProps({ navigateTo: "/" });
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
