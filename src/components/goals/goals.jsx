import React, { Component } from "react";
import "./goals.css";

class Goal extends Component {
  state = {};
  render() {
    return (
      <div className="goal-wrapper">
        <p className="j-sans goal-name">{this.props.name}</p>
        <p className="j-slab goal-description">{this.props.description}</p>
        <p className="j-slab">{this.props.supporters}</p>
        <button className="more-info-button">
          <i className="fas fa-plus" />
        </button>
        <button className="upvote-button">
          <i className="fas fa-thumbs-up" />
        </button>
      </div>
    );
  }
}

export default Goal;
