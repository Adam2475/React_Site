// CardCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Button } from "react-bootstrap";

import img1 from '../../assets/cam1.png';
import img2 from '../../assets/cam2.jpg';
import img4 from '../../assets/cam4.jpg';
import img5 from '../../assets/cam5.jpg';
import img6 from '../../assets/cam6.jpg';
import img7 from '../../assets/cam7.jpg';

const images = [img1, img2, img4, img5, img6, img7];

function CardCarousel() {
  const [showModal, setShowModal] = useState(false);
  const whatsappNumber = '+39 353 398 3131';

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div id="stanze"
      style={{
        maxWidth: '1900px',
        margin: '0 auto',
        padding: '2rem 2rem',
      }}
      className="stanze"
    >
      <h1>Esplora le nostre camere</h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        style={{ padding: '20px 0' }}
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={img}
              alt={`Camera ${index + 1}`}
              style={{
                width: '100%',
                height: '50vh', // fixed height so all are equal
                borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

            <Button
              variant="success"
              onClick={handleOpenModal}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                // backgroundColor: 'green',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
            >
              Prenota Ora
            </Button>

      {showModal && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              maxWidth: '400px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            }}
          >
            <h2>Prenota la tua camera</h2>
            <p>Chiama o scrivi su WhatsApp per prenotare:</p>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                margin: '10px 0',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                textDecoration: 'none',
              }}
            >
              {whatsappNumber}
            </a>
            <br />
            <button
              onClick={handleCloseModal}
              style={{
                marginTop: '15px',
                padding: '8px 16px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardCarousel;
