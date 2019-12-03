import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="header">CacheQL</h1>
        </div>
        <div className="infoBox">
          <h1 id="header">{"Some stuff"}</h1>
        </div>
      </div>
    );
  }
}

export default App;