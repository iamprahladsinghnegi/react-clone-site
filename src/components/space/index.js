import React, { Component } from "react";
import "./index.scss";
import ModalImage from "react-modal-image";

import { Row, Col, Modal } from "antd";
class Space extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  //   showModal = () => {
  //     this.setState({
  //       visible: true
  //     });
  //   };

  render() {
    return (
      <div className="space">
        <div className="space__head">
          <h1 style={{ fontWeight: "bold", fontSize: 40, color: "white" }}>
            SPACES
          </h1>
          <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        </div>
        <div className="space__content">
          <Row gutter={24}>
            <Col className="space__column" span={12} style={{ padding: 0 }}>
              <img
                src="https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg"
                onClick={this.showModal}
              ></img>
            </Col>
            <Col className="space__column" span={12} style={{ padding: 0 }}>
              <img
                src="https://www.cheatsheet.com/wp-content/uploads/2019/04/Planet-Earth.jpg"
                onClick={this.showModal}
              ></img>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col className="space__column" span={12} style={{ padding: 0 }}>
              <img
                src="https://ntnc.org.np/sites/default/files/styles/slider_1920x1024/public/default_images/default-cover_0.jpg?itok=Tps_3S1F"
                onClick={this.showModal}
              ></img>
            </Col>
            <Col className="space__column" span={12} style={{ padding: 0 }}>
              <img
                src="https://cdn.shopify.com/s/files/1/0037/0956/7076/files/westboundary-photography-chris-gill-60180-unsplash_1200x734.jpg?v=1545660299"
                onClick={this.showModal}
              ></img>
            </Col>
          </Row>
          {/* <Modal title="Basic Modal" visible={this.state.visible}>
            <img src="https://cdn.shopify.com/s/files/1/0037/0956/7076/files/westboundary-photography-chris-gill-60180-unsplash_1200x734.jpg?v=1545660299"></img>
          </Modal> */}
        </div>
        {/* <ModalImage
          small={
            "https://cdn.shopify.com/s/files/1/0037/0956/7076/files/westboundary-photography-chris-gill-60180-unsplash_1200x734.jpg?v=1545660299"
          }
          large={
            "https://cdn.shopify.com/s/files/1/0037/0956/7076/files/westboundary-photography-chris-gill-60180-unsplash_1200x734.jpg?v=1545660299"
          }
          alt="Hello World!"
        /> */}
      </div>
    );
  }
}

export default Space;
