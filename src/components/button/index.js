import React, { Component } from "react";
import "./index.scss";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        className="button"
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        {this.props.value}
      </button>
    );
  }
}

export default MyButton;
