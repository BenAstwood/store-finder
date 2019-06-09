import React from "react";

import "./LayoutContainer.css";

const LayoutContainer = props => {
  return (
    <div
      className="layout-container"
      style={
        props.backgroundColor
          ? {
              backgroundColor: props.backgroundColor
            }
          : {}
      }
    >
      {props.children}
    </div>
  );
};

export default LayoutContainer;
