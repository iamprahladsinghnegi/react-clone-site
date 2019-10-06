import React, { Component } from "react";
import "./index.scss";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="community">
        <div className="community__header">
          <p style={{ fontWeight: "bold", fontSize: 40 }}>OUR COMMUNITY</p>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
        <div className="community__content"></div>
      </div>
    );
  }
}

export default Community;
