import React, { Component } from "react";
import MainContainer from "./containers/MainContainer.jsx";
import TopNavbar from './components/TopNavbar';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="header">CacheQL Demo</h1>
        </div>
        <div>
          <TopNavbar />
          <MainContainer className="main-container"/>
        </div>
      </div>
    );
  }
}

export default App;
