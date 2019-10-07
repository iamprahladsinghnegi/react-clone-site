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
            style={{ cursor: "pointer", fontSize: "20px", fontWeight: "bold" }}
            onClick={() => console.log("the annex.")}
          >
            The Annex.
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("home")}
          >
            <a href="#home">Home</a>
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("about")}
          >
            <a href="#about">About</a>
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("community")}
          >
            <a href="#community">Community</a>
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("space")}
          >
            <a href="#space">Space</a>
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("mem")}
          >
            <a href="#membership">Membership</a>
          </Col>
          <Col
            span={3}
            align="center"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("contact")}
          >
            <a href="#contact">Contact</a>
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
