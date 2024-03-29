import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import FindStores from "./containers/FindStores";
import StoreDetails from "./containers/StoreDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={FindStores} />
            <Route path="/store-details" exact component={StoreDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  searchLocation: state.location,
  stores: state.storeList,
  storeMaps: state.storeMaps,
  error: state.error
});

export default connect(mapStateToProps)(App);
