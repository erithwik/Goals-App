import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="main-navbar-wrapper">
        <img
          src="https://static1.squarespace.com/static/58402c31ebbd1adb9cdc46e3/t/58402ccef5e23155fea19d2c/1469729761345/hero_pattern.png?format=1000w"
          className="navbar-image"
        />
        <button className=" j-sans navbar-home">SwoleGoals</button>
        <img
          src="https://static1.squarespace.com/static/58402c31ebbd1adb9cdc46e3/t/58402ccef5e23155fea19d2c/1469729761345/hero_pattern.png?format=1000w"
          className="navbar-user-image"
        />
        <p className="j-sans navbar-username">Username</p>
        <button className="j-sans navbar-login">Login</button>
      </div>
    );
  }
}

export default NavBar;
