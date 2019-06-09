import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import SelectedStoreDetails from "../components/SelectedStoreDetails/SelectedStoreDetails";
import Header from "../components/Header/Header";
import LayoutContainer from "../components/LayoutContainer/LayoutContainer";

import { googleMapsKey } from "../tokens";

class StoreDetails extends Component {
  createSingleMapUrl = center => {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${
      center.latitude
    },${
      center.longitude
    }&zoom=14&size=600x300&maptype=roadmap&markers=color:green%7C${
      center.latitude
    },${center.longitude}&key=${googleMapsKey}`;
  };

  render() {
    let selectedStore = null;

    if (this.props.stores) {
      selectedStore = this.props.stores[this.props.location.state.storeIndex];
    }

    return (
      <div>
        <Header navigateTo={"/"} />
        <LayoutContainer>
          {selectedStore !== null ? (
            <SelectedStoreDetails
              mapUrl={this.createSingleMapUrl(selectedStore.location)}
              storeDetails={selectedStore}
            />
          ) : (
            <Redirect to={"/"} />
          )}
        </LayoutContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchLocation: state.location,
  stores: state.storeList,
  storeMaps: state.storeMaps
});

export default connect(mapStateToProps)(StoreDetails);
