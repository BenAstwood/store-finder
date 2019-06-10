import React from "react";

import { OpenThisWeek, OpenToday } from "../OpeningTimes/OpeningTimes";
import "./SelectedStoreDetails.css";

const SelectedStoreDetails = props => {
  const { mapUrl, storeDetails } = props;

  return (
    <div className="details-container">
      <h2 className="details-container__header">{storeDetails.storeName}</h2>
      <div className="details-container__content">
        <div className="details-container__content__data">
          <address>
            {Object.keys(storeDetails.address)
              .map(addressLine => storeDetails.address[addressLine])
              .join(", ")}
          </address>
          <OpenToday openingHours={storeDetails.openingTimes} />
          <OpenThisWeek openingTimes={storeDetails.openingTimes} />
        </div>
        <div className="details-container__content__image">
          <img src={mapUrl} alt={storeDetails.storeName} />
        </div>
      </div>
    </div>
  );
};

export default SelectedStoreDetails;
