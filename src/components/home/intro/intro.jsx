import React, { Component } from "react";
import "./intro.css";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div className="intro-main-wrapper j-sans">
        <h1 className="intro-title">Local Goals</h1>
        <p className="intro-text">
          Scroll to see goals from locals in your area
        </p>
      </div>
    );
  }
}

export default Intro;
