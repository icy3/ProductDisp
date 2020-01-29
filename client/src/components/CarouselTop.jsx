import React from "react";

const CarouselTop = () => {
  return (
    <div class="outer">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        {/* map through images*/}
        <div class="carousel-inner">
          <div class="item active">
            <img
              src="https://i.etsystatic.com/6297064/r/il/dffbb3/1951171310/il_1588xN.1951171310_r9ok.jpg"
              alt="Los Angeles"
            />
          </div>

          <div class="item">
            <img
              src="https://i.etsystatic.com/6297064/r/il/fcd8ab/1951170830/il_1588xN.1951170830_t34e.jpg"
              alt="Chicago"
            />
          </div>

          <div class="item">
            <img
              src="https://i.etsystatic.com/6297064/r/il/39d54f/1951170858/il_1588xN.1951170858_hxt9.jpg"
              alt="New York"
            />
          </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselTop;
