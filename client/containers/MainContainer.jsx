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
      cacheTime: 0.76,
      noCacheTime: 0.43,
    };
    this.queryPost = this.queryPost.bind(this);
  }

  queryPost(event) {
    event.preventDefault();
    console.log("in queryPost");
    fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{ 
          name {
            message
          } 
        }`
      })
    })
      .then(res => res.json())
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <React.Fragment>
        <QueryContainer queryPost={this.queryPost} />
        <CompareContainer
          cacheResult={this.state.cacheResult}
          noCacheResult={this.state.noCacheResult}
          cacheTime={this.state.cacheTime}
          noCacheTime={this.state.noCacheTime}
        />
        <BarContainer 
          cacheTime={this.state.cacheTime}
          noCacheTime={this.state.noCacheTime}
        />
      </React.Fragment>
    );
  }
}

export default MainContainer;
