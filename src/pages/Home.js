import React, { Component } from "react";
import Quotes from "../components/Quotes";
import SearchBar from "../components/SearchBar";
import AppContext from "../context/appContext";
import Cities from "../components/Cities";
import cityDetails from "../data/city_details";

export default class Home extends Component {
  state = {
    cities: cityDetails,
    selectedCity: null,
    filter: "",
  };

  handleSearch = (val) => {
    this.setState((state, props) => {
      return {
        filter: val,
      };
    });
  };
  handleSelection = (item) => {
    this.setState((state, props) => {
      return {
        selectedCity: item,
      };
    });
  };

  render() {
    const { selectedCity, cities, filter } = this.state;
    const filteredCities = cities.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <Quotes />
        {selectedCity && (
          <div className="selected_city_wrapper">
            <span> {selectedCity.name} </span>
          </div>
        )}
        <SearchBar onSearch={(val) => this.handleSearch(val)} />
        <AppContext.Provider
          value={{
            cities: filteredCities,
            selectCity: (item) => this.handleSelection(item),
          }}
        >
          <h3 className="main_headings"> Popular Cities</h3>
          <Cities />
        </AppContext.Provider>
      </div>
    );
  }
}
