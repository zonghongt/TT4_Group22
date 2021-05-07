import React, { Component, ReactDom, IndexRoute } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./Components/Login.js";
import Mainpage from "./Components/MainPage.js";

class App extends Component {//ES6 class to define component

  constructor(props) {
    super(props);
    this.state = {
      username: "Group22",
      password: "xkQL1UGIO3mPUw",
      open: false,
      loading: false,
      accountInfo: {}
    };
  }
  handleUsername = (event) => {
    this.setState({ username: event.target.value })
  }
  handlePassword = (event) => {
    this.setState({ password: event.target.value })
  }
  handleAccountInfo = (event) => {
    this.setState({ accountInfo: event})
  }
  render() {
    return (
      <Router>
        <Route path="/" render={(props) => (
          <Login {...props} mystate={{ ...this.state }} handleUsername={this.handleUsername} handlePassword={this.handlePassword} handleAccountInfo={this.handleAccountInfo}/>)} exact ></Route>
          <Route path="/MainPage" render={(props) => (
          <Mainpage {...props} mystate={{ ...this.state }} />)} exact />
      </Router>
    );
  }
}

export default App;
