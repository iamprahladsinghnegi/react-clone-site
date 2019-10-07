import React, { Component } from "react";
import "./index.scss";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "https://image.shutterstock.com/image-photo/spring-blossom-background-beautiful-nature-260nw-1033292395.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg",
  "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              height: "55vh"
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              height: "55vh"
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              height: "55vh"
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
};

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
        <div className="community__content">{Slideshow()}</div>
      </div>
    );
  }
}

export default Community;
