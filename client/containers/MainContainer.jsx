import React, { Component } from "react";
import QueryContainer from "./QueryContainer.jsx";
import CompareContainer from "./CompareContainer.jsx";
import BarContainer from "./BarContainer.jsx";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cacheResult: "cql result rendered HERE",
      noCacheResult: "db result rendered HERE",
      cacheTime: "good time rendered HERE",
      noCacheTime: "worse time rendered HERE"
    };
  }
  render() {
    return (
      <React.Fragment>
        <QueryContainer />
        <CompareContainer
          cacheResult={this.state.cacheResult}
          noCacheResult={this.state.noCacheResult}
          cacheTime={this.state.cacheTime}
          noCacheTime={this.state.noCacheTime}
        />
        <BarContainer />
      </React.Fragment>
    );
  }
}

export default MainContainer;
