import React from "react";
import axios from "axios";
// import MainImage from "./MainImage.jsx";
import Image from "./Image.jsx";
// const baseURL =
//   "http://mainimage-env.atbwqah4uj.us-east-2.elasticbeanstalk.com/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      heart: false,
      currentIndex: 0,
      mainImg: "",
      listingId: 651186954
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  componentDidMount() {
    this.getImages();
    window.addEventListener("itemChanged", event => {
      this.setState({ listingId: Number(event.detail.listingId) }, () => {
        this.getImages();
      });
    });
  }

  getImages() {
    axios
      .get(`/listing/${this.state.listingId}`)
      /*
      , {
        baseURL
      }*/
      .then(data => {
        this.setState(
          { images: data.data, mainImg: data.data[0].image_url },
          () => {
            console.log(this.state.images[0].image_url);
          }
        );
      });
  }

  handleNextClick(index) {
    if (!this.state.images[this.state.currentIndex + 1]) return;
    this.setState({
      currentIndex: index + 1,
      mainImg: this.state.images[this.state.currentIndex + 1].image_url
    });
  }

  handlePreviousClick(index) {
    if (!this.state.images[this.state.currentIndex - 1]) return;
    this.setState({
      currentIndex: index - 1,
      mainImg: this.state.images[this.state.currentIndex - 1].image_url
    });
  }

  handleHeartClick() {
    this.setState({ heart: !this.state.heart });
  }

  //also handles hover over
  handleClick(imageUrl, index) {
    this.setState({ mainImg: imageUrl, currentIndex: index });
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="big-image">
            <img src={this.state.mainImg}></img>
            <button
              className="change-buttons heart-button"
              onClick={() => this.handleHeartClick()}
            >
              <span
                className={
                  this.state.heart ? "custom-display" : "heart-outline"
                }
              >
                <svg
                  className="agata"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heart-position"
                    d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"
                  ></path>
                </svg>
              </span>
              <span
                className={this.state.heart ? "heart-red" : "custom-display"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path>
                </svg>
              </span>
            </button>
            <div>
              <button
                className="change-buttons prev-button"
                onClick={() => {
                  this.handlePreviousClick(this.state.currentIndex);
                }}
              >
                <span className="arrow-icon">
                  <svg
                    className="agata"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      className="james"
                      d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"
                    ></path>
                  </svg>
                </span>
              </button>
              <button
                className="change-buttons next-button"
                onClick={() => {
                  this.handleNextClick(this.state.currentIndex);
                }}
              >
                <span className="arrow-icon">
                  <svg
                    className="agata"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* need to have the little images not */}
        <ul className="little-images">
          {this.state.images.map((image, index) => {
            return (
              <Image
                className={
                  this.state.currentIndex === index
                    ? "little-image-hover"
                    : "little-image"
                }
                key={index}
                index={index}
                image_url={image.image_url}
                handleClick={this.handleClick}
                handleHoverOver={this.handleHoverOver}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;

//first commit