import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Card from '../Card/Card';

const CardCarousel = () => {
    const params = {
        spaceBetween: 0,
        slidesPerView: 'auto',
        slidesOffsetBefore: 20
    };
    return (
        <div className="card-carousel">
             <Swiper {...params}>
                <Card
                />
            </Swiper>
        </div>
    )
}

export default CardCarousel;