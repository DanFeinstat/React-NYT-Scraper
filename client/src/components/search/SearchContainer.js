import React, { Component, Fragment } from "react";
import Input from "./Input";

export default class SearchContainer extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    <Fragment>
      <Input
        value={this.state.topic}
        onChange={this.handleInputChange}
        name="topic"
        placeholder="Topic"
      />
      <Input
        value={this.state.topic}
        onChange={this.handleInputChange}
        name="startYear"
        placeholder="Earliest year of search"
      />
      <Input
        value={this.state.topic}
        onChange={this.handleInputChange}
        name="endYear"
        placeholder="Most recent year of search"
      />
    </Fragment>;
  }
}
