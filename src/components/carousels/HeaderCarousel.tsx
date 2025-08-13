import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../assets/banner1.jpg';
import Banner2 from '../../assets/banner2.jpg';

function HeaderCarousel() {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-text">
        <h1>Hotel Montemorello</h1>
        <p>
          Benvenuti all'Hotel Montemorello, un'oasi di tranquillità immersa
        </p>
        <p> 
          nel verde del Parco Naturale di Monte Morello, a pochi chilometri da Firenze.
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
          <img className="banner" src={Banner1} alt="Description" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={Banner2} alt="Description" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeaderCarousel;