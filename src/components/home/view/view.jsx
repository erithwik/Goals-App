import React, { Component } from "react";
import "./view.css";
import Goal from "../../goals/goals";
import Filter from "../../filter/filter";

class View extends Component {
  state = {
    goals: [
      { id: 0, name: "first-goal", description: "first-description" },
      { id: 1, name: "second-goal", description: "second-description" },
      { id: 2, name: "third-goal", description: "third-description" },
      { id: 3, name: "fourth-goal", description: "fourth-description" },
      { id: 4, name: "fifth-goal", description: "fifth-description" },
      { id: 5, name: "sixth-goal", description: "sixth-description" },
      { id: 6, name: "seventh-goal", description: "seventh-description" }
    ]
  };
  render() {
    return (
      <div className="view-grid">
        <p className="view-filter">
          <Filter />
        </p>
        <div className="view-items j-sans">
          {this.state.goals.map(item => {
            if (item % 3 === 0) {
              return (
                <Goal
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  className="first-block"
                />
              );
            } else if (item % 3 === 1) {
              return (
                <Goal
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  className="second-block"
                />
              );
            }
            return (
              <Goal
                key={item.id}
                name={item.name}
                description={item.description}
                className="fourth-block"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default View;
