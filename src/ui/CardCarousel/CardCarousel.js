import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Card from '../Card/Card';

const CardCarousel = (props) => {

    const params = {
        spaceBetween: 30,
        slidesPerView: 'auto'
    };
    return (
        <div className="card-carousel">
             <Swiper {...params}>
                <div><Card colorHex="#fff">Journal Entry 1</Card></div>
                <div><Card colorHex="#fff">Journal Entry 1</Card></div>
                <div><Card colorHex="#fff">Journal Entry 1</Card></div>
                <div><Card colorHex="#fff">Journal Entry 1</Card></div>
                <div><Card colorHex="#fff">Journal Entry 1</Card></div>
            </Swiper>
        </div>
    )
}

export default CardCarousel;