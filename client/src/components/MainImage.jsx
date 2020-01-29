import React from "react";
import CarouselTop from "./CarouselTop.jsx";
import CarouselBottom from "./CarouselBottom.jsx";

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CarouselTop />
        <CarouselBottom />
      </div>
    );
  }
}
export default MainImage;
