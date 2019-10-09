import React, { Component } from "react";
import "./index.scss";
import ModalImage from "react-modal-image";

import { Row, Col, Modal } from "antd";

const imgArray = [
  "https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg",
  "https://www.cheatsheet.com/wp-content/uploads/2019/04/Planet-Earth.jpg",
  "https://ntnc.org.np/sites/default/files/styles/slider_1920x1024/public/default_images/default-cover_0.jpg?itok=Tps_3S1F",
  "https://cdn.shopify.com/s/files/1/0037/0956/7076/files/westboundary-photography-chris-gill-60180-unsplash_1200x734.jpg?v=1545660299"
];

class Space extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, imgNum: null };
  }

  showModal = num => {
    this.setState({
      visible: true,
      imgNum: num
    });
  };

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
              <img src={imgArray[0]} onClick={() => this.showModal(0)}></img>
            </Col>
            <Col className="space__column" span={12} style={{ padding: 0 }}>
              <img src={imgArray[1]} onClick={() => this.showModal(1)}></img>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col className="space__column" span={12} style={{ padding: 0 }}>
              <img src={imgArray[2]} onClick={() => this.showModal(2)}></img>
            </Col>
            <Col className="space__column" span={12} style={{ padding: 0 }}>
              <img src={imgArray[3]} onClick={() => this.showModal(3)}></img>
            </Col>
          </Row>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            footer={false}
            width={900}
            onCancel={() => {
              this.setState({ visible: false });
            }}
            title={null}
          >
            <img src={imgArray[this.state.imgNum]}></img>
          </Modal>
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
