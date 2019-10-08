import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Header from "../header";
import Home from "../home";
import About from "../about";
import Community from "../community";
import Space from "../space";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />

        <ScrollableAnchor id={"home"}>
          <Home />
        </ScrollableAnchor>
        <ScrollableAnchor id={"about"}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={"community"}>
          <Community />
        </ScrollableAnchor>
        <ScrollableAnchor id={"space"}>
          <Space />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default MainPage;
