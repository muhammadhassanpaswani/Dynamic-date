import React, { Component } from "react";
import "./Search.css";

import { GoSearch } from "react-icons/go";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      result: {},
      loading: false,
      message: ""
    };
  }

  handleOnInputChange = e => {
    const query = e.target.value;
    this.setState({ query: query, loading: true, message: "" });
  };
  render() {
    const { query } = this.state;
    return (
      <div>
        <label htmlFor="search-input" className="search-label">
          <input
            type="text"
            value={query}
            onChange={this.handleOnInputChange}
            id="search-input"
            placeholder="Search.."
          />
        </label>
        <GoSearch className="search-icon" />
      </div>
    );
  }
}

export default Search;
