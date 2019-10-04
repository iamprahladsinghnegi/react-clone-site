import React, { Component } from "react";
import Header from "../header";
import Home from "../home";
import About from "../about";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
      </div>
    );
  }
}

export default MainPage;
