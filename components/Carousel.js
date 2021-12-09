import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../images/slider/slide01.jpg";
import image2 from "../images/slider/slide02.jpg";
import image3 from "../images/slider/slide03.jpg";
import Image from 'next/image';


const CarouselOK = () => {
  return (
    <div>
      <Carousel interval={3000} indicators={false} nextLabel="" prevLabel="">
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselOK;
