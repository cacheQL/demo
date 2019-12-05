import React, { Component } from "react";
import QueryContainer from "./QueryContainer.jsx";
import CompareContainer from "./CompareContainer.jsx";
import BarContainer from "./BarContainer.jsx";

import axios from "axios";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cacheResult: "cql result rendered HERE",
      noCacheResult: "db result rendered HERE",
      cacheTime: 0.76,
      noCacheTime: 0.43,
      name: "",
      message: "",
      nameGet: ""
    };
    this.queryPost = this.queryPost.bind(this);
    this.queryGet = this.queryGet.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.nameGetChangeHandler = this.nameGetChangeHandler.bind(this);
    this.messageChangeHandler = this.messageChangeHandler.bind(this);
  }

  nameChangeHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  nameGetChangeHandler(event) {
    this.setState({
      nameGet: event.target.value
    });
  }

  messageChangeHandler(event) {
    this.setState({
      message: event.target.value
    });
  }

  queryPost(event) {
    event.preventDefault();
    console.log("in queryPost");

    axios
      .post(
        "/addPerson",
        {
          name: this.state.name,
          message: this.state.message
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log("frontend");
        console.log(res);
        console.log(res.data);
        // if (res.status === 200) return this.props.history.push('/login');
        // return this.props.history.push('/signup');
      })
      .catch(err => {
        console.log("error axios");
        console.log(err);
      })
      .finally(() => {
        this.setState({
          name: "",
          message: ""
        });
      });
  }

  queryGet(event) {
    event.preventDefault();
    console.log("in queryGet");

    axios
      .post(
        "/getPerson",
        {
          query: this.state.nameGet
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log("frontend");
        console.log(res);
        console.log(res.data);

        this.setState({
          cacheResult: JSON.stringify(res.data)
        });
        // if (res.status === 200) return this.props.history.push('/login');
        // return this.props.history.push('/signup');
      })
      .catch(err => {
        console.log("error axios");
        console.log(err);
      });

    axios
      .post(
        "/getPersonDB",
        {
          query: this.state.nameGet
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log("frontend");
        console.log(res);
        console.log(res.data);

        this.setState({
          noCacheResult: JSON.stringify(res.data)
        });
        // if (res.status === 200) return this.props.history.push('/login');
        // return this.props.history.push('/signup');
      })
      .catch(err => {
        console.log("error axios");
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <QueryContainer
          name={this.state.name}
          message={this.state.message}
          nameHandler={this.nameChangeHandler}
          messageHandler={this.messageChangeHandler}
          queryPost={this.queryPost}
          nameGet={this.state.nameGet}
          nameGetHandler={this.nameGetChangeHandler}
          queryGet={this.queryGet}
        />
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
