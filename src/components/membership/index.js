import React, { Component } from "react";
import "./index.scss";

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="membership">
        <div className="membership__content">
          <h1>MEMBERSHIP</h1>
          <p> Become a member!</p>
        </div>
      </div>
    );
  }
}

export default Membership;
