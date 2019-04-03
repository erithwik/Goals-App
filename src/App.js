import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Goal from "./components/goals/goals";
import NavBar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";

class App extends Component {
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
      <React.Fragment>
        <NavBar />
        <Profile />
        <div className="heading">
          <h1 className="j-sans">My Goals</h1>
        </div>
        <div className="main-wrapper">
          {this.state.goals.map(item => {
            if (item % 4 === 0) {
              return (
                <Goal
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  className="first-block"
                />
              );
            } else if (item % 4 === 1) {
              return (
                <Goal
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  className="second-block"
                />
              );
            } else if (item % 4 == 2) {
              return (
                <Goal
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  className="third-block"
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
      </React.Fragment>
    );
  }
}

export default App;
