import React, { Component } from "react";
import PersistentDrawer from "./components/search";
import ReactDOM from "react-dom";
import SearchContainer from "./components/search/SearchContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchContainer />
      </div>
    );
  }
}

export default App;
