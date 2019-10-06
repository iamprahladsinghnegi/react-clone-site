import "./index.scss";
import React, { Component } from "react";
import { Button } from "antd/lib/radio";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="home__content">
          <p>CCO-WORKING</p>
          IN AN INNOVATIVE ENVIRONMENT
          <br />
          <Button className="button">BOOK A SPACE</Button>
        </div>
      </div>
    );
  }
}

export default Home;
