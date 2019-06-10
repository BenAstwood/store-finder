import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import "./StoreListItem.css";

import { OpenToday } from "../OpeningTimes/OpeningTimes";

const StoreListItem = props => {
  const { address, storeName, openingTimes, telephone } = props.storeDetails;

  return (
    <li>
      <div className="store-list-item">
        <div className="store-list-item__details">
          <h3 className="store-list-item__header">{storeName}</h3>
          <address>
            <p>{address.addressLine1}</p>
            <p>{address.postcode}</p>
          </address>
          <OpenToday openingHours={openingTimes} />
          <p>{telephone}</p>
        </div>
        <div className="store-list-item__cta">
          <Link
            to={{
              pathname: "/store-details",
              state: {
                storeIndex: props.storeIndex
              }
            }}
          >
            <Button text={"View more information"} />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default StoreListItem;
