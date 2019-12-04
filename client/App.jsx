import React, { Component } from "react";
import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  queryPost(event) {
    fetch('/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        query: `{ 
          name {
            message
          } 
        }`
      })
    })
    .then(res => res.json())
    .then(res => console.log(res.data))
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