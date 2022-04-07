import React, { Component } from "react";
import "../css/styles.css";

class Header extends Component {
  state = {
    keyword: "",
  };

  inputChangeHandler = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <input
          type="text"
          onChange={(e) => {
            this.inputChangeHandler(e);
          }}
        ></input>
      </header>
    );
  }
}

export default Header;
