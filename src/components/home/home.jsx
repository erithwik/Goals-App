import React, { Component } from "react";
import NavBar from "../navbar/navbar";
import Intro from "./intro/intro";
import View from "./view/view";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Intro />
        <View />
      </div>
    );
  }
}

export default Home;
