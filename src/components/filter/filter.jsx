import React, { Component } from "react";
import "./filter.css";

class Filter extends Component {
  state = {
    classes: [
      { id: 1, name: "Local Project" },
      { id: 2, name: "Maker Project" },
      { id: 3, name: "Art Project" },
      { id: 4, name: "Fitness" },
      { id: 5, name: "Activity" }
    ]
  };
  render() {
    return (
      <div className="filter-wrapper j-sans">
        <h1 className="">Filter By...</h1>
        {this.state.classes.map(item => {
          return (
            <p>
              <label>
                <input class="with-gap" type="radio" />
                <span> {item.name}</span>
              </label>
            </p>
          );
        })}
      </div>
    );
  }
}

export default Filter;
