import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../assets/banner1.jpg";
import Banner1Small from "../../assets/banner1_small.jpg"; // tiny version
import Banner2 from "../../assets/banner2.jpg";
import Banner2Small from "../../assets/banner2_small.jpg"; // tiny version

import ProgressiveImage from "../progressiveImage/ProgressiveImage";

function HeaderCarousel() {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-text">
        <h1>Hotel Montemorello</h1>
        <p>Benvenuti all'Hotel Montemorello, un'oasi di tranquillità immersa</p>
        <p>
          nel verde del Parco Naturale di Monte Morello, a pochi chilometri da
          Firenze.
        </p>
      </div>

      <Carousel
        className="imageTop"
        fade
        interval={3000}
        wrap={true}
        pause={false}
        controls={false}
      >
        <Carousel.Item>
          <ProgressiveImage
            src={Banner1}
            placeholder={Banner1Small}
            alt="Banner 1"
            className="banner"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ProgressiveImage
            src={Banner2}
            placeholder={Banner2Small}
            alt="Banner 2"
            className="banner"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeaderCarousel;
