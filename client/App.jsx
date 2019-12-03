import React, { Component } from "react";
import MainContainer from './containers/MainContainer.jsx';

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
        <div>
          <MainContainer />
        </div>
      </div>
    );
  }
}

export default App;