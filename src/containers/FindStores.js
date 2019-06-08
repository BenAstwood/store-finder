import React, {Component} from 'react';
import {connect} from "react-redux";

import {googleMapsKey} from "../tokens";

import Header from '../components/Header';
import SearchForm from '../components/SearchForm'
import Input from '../components/Input'
import StoreResults from '../components/StoreResults'

class FindStores extends Component {

  createMapUrl = (searchLocation, markers) => {
    const markerCheck = markers[0].location && markers[0].location.latitude
      ? markers.map(({
        location
      }, index) => `&markers=color:green%7Clabel:${index + 1}%7C${location.latitude},${location.longitude}`).join('')
      : '';

    return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(searchLocation)}&zoom=11&size=600x300&maptype=roadmap${markerCheck}&key=${googleMapsKey}`
  }

  render() {

    let mapUrl = null;
    const {stores, searchLocation} = this.props;

    if (searchLocation.name && Array.isArray(stores)) {
      const {stores, searchLocation} = this.props;

      mapUrl = this.createMapUrl(searchLocation.name, stores);
    };

    return (
      <div>
        <Header/>
        <SearchForm><Input/></SearchForm>
        {mapUrl !== null
          ? <StoreResults
              mapUrl={mapUrl}
              stores={stores}
              searchLocation={searchLocation.name}/>
          : ''}
      </div>
    )
  }
}

const mapStateToProps = state => ({searchLocation: state.location, stores: state.storeList, storeMaps: state.storeMaps});

export default connect(mapStateToProps)(FindStores);