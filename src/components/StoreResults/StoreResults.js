import React from "react";
import StoreListItem from "../StoreListItem/StoreListItem";

import "./StoreResults.css";

const StoreResults = props => {
  return (
    <div className="results">
      <h2 className="results__header">Stores near {props.searchLocation}</h2>
      <div className="results__container">
        <div className="results__container__map">
          <img src={props.mapUrl} alt={props.searchLocation} />
        </div>
        <div className="results__container__results">
          <ul>
            {props.stores.map((store, index) => {
              return (
                <StoreListItem
                  key={index}
                  storeIndex={index}
                  storeDetails={store}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StoreResults;
