import React, { Component } from "react";
// import contacts from "./contacts.json";


class Filter extends Component {
  state = {
    filter: "",
  };

  handleFilter() {}
  render() {
    return (
      <>
        <label>
          <input  type="text" />
        </label>
      </>
    );
  }
}

export default Filter;
