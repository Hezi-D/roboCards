import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  //Constructor:
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchFiels: ""
    };
  }
  render() {
    return (
      <div className="tc .bg-dark-green">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots} />;
      </div>
    );
  }
}

export default App;
