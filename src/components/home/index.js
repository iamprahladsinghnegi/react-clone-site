import "./index.scss";
import React, { Component } from "react";
import MyButton from "../button";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="home__content">
          <p style={{ fontSize: 100, fontWeight: "bold" }}>CO-WORKING</p>
          IN AN INNOVATIVE ENVIRONMENT
          <br />
          <MyButton value={"BOOK A SPACE"} backgroundColor={"aqua"} />
        </div>
      </div>
    );
  }
}

export default Home;
