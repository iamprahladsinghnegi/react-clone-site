import React, { Component } from "react";
import { Row, Col, Button, Modal, Avatar } from "antd";
import "antd/dist/antd.css";
import "./index.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   renderHeader = () => {
  //     let header = [];
  //         row =[];
  //     for (let i = 0; i < 8; i++) {
  //       <Col span={3}>

  //       </Col>
  //     }

  //     return header;
  //   };

  render() {
    return (
      <div className="header">
        <Row gutter={24}>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("the annex.")}
          >
            The Annex.
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("Home")}
          >
            Home
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("about")}
          >
            About
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("community")}
          >
            Community
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("space")}
          >
            Space
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("mem")}
          >
            Membership
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("contact")}
          >
            Contact
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("log in")}
          >
            <Avatar
              icon="user"
              style={{ color: "black", backgroundColor: "#35f0a2" }}
            />
            Log In
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
