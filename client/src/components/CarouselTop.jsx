import React from "react";

const CarouselTop = () => {
  return (
    <div className="main">
      <div className="buttons">
        <div className="heart-button"></div>
        <div className="next-button"></div>
        <div className="prev-button"></div>
      </div>
      <div className="big-image">
        <img src="https://i.etsystatic.com/6297064/r/il/dffbb3/1951171310/il_1588xN.1951171310_r9ok.jpg"></img>
      </div>
      <ul className="little-images">
        <li>
          <img
            className="little-image"
            src="https://i.etsystatic.com/6297064/r/il/dffbb3/1951171310/il_1588xN.1951171310_r9ok.jpg"
          ></img>
        </li>
        <li>
          <img
            className="little-image"
            src="https://i.etsystatic.com/6297064/r/il/fcd8ab/1951170830/il_1588xN.1951170830_t34e.jpg"
          ></img>
        </li>
        <li>
          <img
            className="little-image"
            src="https://i.etsystatic.com/6297064/r/il/39d54f/1951170858/il_1588xN.1951170858_hxt9.jpg"
          ></img>
        </li>
        <li>
          <img
            className="little-image"
            src="https://i.etsystatic.com/6297064/r/il/724d02/1951170984/il_1588xN.1951170984_sbhf.jpg"
          ></img>
        </li>
        <li>
          <img
            className="little-image"
            src="https://i.etsystatic.com/6297064/r/il/22ea6d/1998711597/il_1588xN.1998711597_2ocq.jpg"
          ></img>
        </li>
      </ul>
    </div>
  );
};

export default CarouselTop;
