import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    search: "",
  };
  updateSearch = (val) => {
    console.log(val);
    this.setState(
      (state, props) => {
        return { search: val };
      },
      () => {
        this.props.onSearch(val);
      }
    );
  };

  render() {
    return (
      <form>
        <div className="search_bar">
          <label htmlFor="search">Search For Cities</label>
          <i className="fa fa-search search_icon"></i>
          <input
            value={this.state.search}
            type="text"
            id="search"
            placeholder="Eg: London.."
            onChange={(e) => this.updateSearch(e.target.value)}
          />
        </div>
      </form>
    );
  }
}
