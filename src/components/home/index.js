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
          CCO-WORKING IN AN INNOVATIVE ENVIRONMENT
          <Button className="button">BOOK A SPACE</Button>
        </div>
      </div>
    );
  }
}

export default Home;
