import React, { Component } from "react";
import { connect } from "react-redux";
import { getGeolocation } from "../store/actions";

import { googleMapsKey } from "../tokens";

import SearchForm from "./SearchForm";

import Header from "../components/Header/Header";
import StoreResults from "../components/StoreResults/StoreResults";
import LayoutContainer from "../components/LayoutContainer/LayoutContainer";

export class FindStores extends Component {
  createMapUrl = (searchLocation, markers) => {
    const markerCheck =
      markers[0].location && markers[0].location.latitude
        ? markers
            .map(
              ({ location }, index) =>
                `&markers=color:green%7Clabel:${index + 1}%7C${
                  location.latitude
                },${location.longitude}`
            )
            .join("")
        : "";

    return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
      searchLocation
    )}&zoom=11&size=600x600&maptype=roadmap${markerCheck}&key=${googleMapsKey}`;
  };

  formSubmitHandler = searchString => {
    this.props.dispatch(getGeolocation(searchString));
  };

  render() {
    let mapUrl = null;
    const { stores, searchLocation, error } = this.props;

    if (
      searchLocation &&
      searchLocation.name &&
      Array.isArray(stores) &&
      stores.length > 0
    ) {
      mapUrl = this.createMapUrl(searchLocation.name, stores);
    }

    return (
      <div>
        <Header />
        <LayoutContainer backgroundColor={"#f0f7ed"}>
          <h2 className="header__description">
            Find your local store and its opening times
          </h2>
          <SearchForm updateOnSubmit={this.formSubmitHandler} />
        </LayoutContainer>
        <LayoutContainer>
          {error !== null ? <p className="error-message">{error}</p> : ""}
          {error === null && mapUrl !== null ? (
            <StoreResults
              mapUrl={mapUrl}
              stores={stores}
              searchLocation={searchLocation.name}
            />
          ) : (
            ""
          )}
        </LayoutContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchLocation: state.location,
  stores: state.storeList,
  storeMaps: state.storeMaps,
  error: state.error
});

export default connect(mapStateToProps)(FindStores);
