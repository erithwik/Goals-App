import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="profile-wrapper">
        <img
          src="https://static1.squarespace.com/static/58402c31ebbd1adb9cdc46e3/t/58402ccef5e23155fea19d2c/1469729761345/hero_pattern.png?format=1000w"
          className="profile-image"
        />
        <h1 className="profile-header j-sans">Name of User</h1>
        <p className="profile-description j-slab">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="supporters j-sans">
          tokens: 56 <i class="fas fa-thumbs-up" />
        </p>
        <p className="age j-sans">
          Age: 2 years <i class="fas fa-clock" />
        </p>
        <p className="goals-accomplished j-sans">
          Goals: 32 <i class="fas fa-check" />
        </p>
      </div>
    );
  }
}

export default Profile;
