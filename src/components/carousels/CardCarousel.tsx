// CardCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import img1 from '../../assets/cam1.png';
import img2 from '../../assets/cam2.jpg';
import img4 from '../../assets/cam4.jpg';
import img5 from '../../assets/cam5.jpg';
import img6 from '../../assets/cam6.jpg';
import img7 from '../../assets/cam7.jpg';
import Banner2 from '../../assets/banner2.jpg';

import { useState } from 'react';

import MyCard from '../cards/Card';

const cardsData = [
  { title: 'Card 1', text: 'Quick example text 1', img: img1, link: '#1' },
  { title: 'Card 2', text: 'Quick example text 2', img: img2, link: '#2' },
  { title: 'Card 4', text: 'Quick example text 4', img: img4, link: '#4' },
  { title: 'Card 5', text: 'Quick example text 5', img: img5, link: '#5' },
  { title: 'Card 6', text: 'Quick example text 6', img: img6, link: '#6' },
  { title: 'Card 6', text: 'Quick example text 7', img: img7, link: '#7' },
];

function CardCarousel() {
  const [showModal, setShowModal] = useState(false);
   const whatsappNumber = "+39 353 398 3131";
   const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div style={{
        maxWidth: '1900px',
        margin: '0 auto',
        padding: '2rem 2rem', }}

      className='stanze'>
      <h1>Esplora le nostre camere</h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50} // less gap between cards
        slidesPerView={3}
        centeredSlides={true} // keep centered
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
        style={{
          padding: '20px 0',
        }}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MyCard {...card} onBookClick={handleOpenModal} />
          </SwiperSlide>
        ))}
      </Swiper>

        {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Prenota la tua camera</h2>
            <p>Chiama o scrivi su WhatsApp per prenotare:</p>
            <a href={`https://wa.me/${whatsappNumber.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer">
              {whatsappNumber}
            </a>
            <button onClick={handleCloseModal}>Chiudi</button>
          </div>
        </div>
      )}
    </div>
  );
}


export default CardCarousel;