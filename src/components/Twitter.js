import React, { Component } from "react";
import axios from "axios";

export default class Twitter extends Component {
  state = {
    query: "angular",
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/twitter`, {
        params: {
          searchQuery: this.state.query,
        },
      })
      .then((response) => console.log(response));
  }
  componentDidUpdate() {
    axios
      .get(`http://localhost:5000/twitter`, {
        params: {
          searchQuery: this.state.query,
        },
      })
      .then((response) => console.log(response));
  }
  render() {
    return (
      <div>
        Twitter js
        <button onClick={() => this.setState({ query: "vue" })}> React </button>
      </div>
    );
  }
}
