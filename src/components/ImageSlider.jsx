import React from "react";
import Carousel from "react-bootstrap/Carousel";
import car01 from "./../assets/spring-01.jpg";
import car02 from "./../assets/exp-3.webp";
import car03 from "./../assets/mysql-02.png";
import car04 from "./../assets/carr-04.jpg";

const ImageSlider = () => {
  return (
    <div className="carousel-container">
      <Carousel interval={2999} slide={true}>


        <Carousel.Item>
          <img src={car01} className="slide overlay" alt="First slide" />
          <Carousel.Caption>
            <h3 id="bright-content-header" className="header-first">
            API interacting with multiple platoforms 
            </h3>
            <p id="bright-content"></p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img src={car02} className="slide overlay" alt="Third slide" />

          <Carousel.Caption>
            <h3 id="bright-content-header" className="header-second">
              Auto-Scalable cloud native applications
            </h3>
            <p id="bright-content"></p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img src={car03} className="slide overlay" alt="Third slide" />
          <Carousel.Caption>
            <h3 id="bright-content-header" className="header-third">
              Database architecture and management
            </h3>
            <p id="bright-content"></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={car04} className="slide overlay" alt="Fourth slide" />
          <Carousel.Caption>
            <h3 id="bright-content-header" className="header-fourth">
              UI/UX for Web and Mobile Applications
            </h3>
            <p id="bright-content"></p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default ImageSlider;
