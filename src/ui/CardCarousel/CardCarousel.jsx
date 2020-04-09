import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Card from '../Card/Card';

const CardCarousel = (props) => {
    const {journals} = props;
    const params = {
        spaceBetween: 0,
        slidesPerView: 'auto',
        slidesOffsetBefore: 20
    };
    return (
        <div className="card-carousel">
             <Swiper {...params}>
                {journals.map((journal,i) => {
                    return (
                        <div key={i}>
                            <a href={`/entries/${journal.id}`}>
                                <Card/>
                            </a>
                        </div>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default CardCarousel;