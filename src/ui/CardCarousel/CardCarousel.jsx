import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Card from '../Card/Card';

const CardCarousel = (props) => {
    const params = {
        spaceBetween: 30,
        slidesPerView: 'auto',
        slidesOffsetBefore: 20
    };
    return (
        <div className="card-carousel">
             <Swiper {...params}>
                {props.weeks.map((week) => {
                    return (
                        <div>
                            <Card 
                                colorHex="#fff"
                                date={week.dateRange}
                                detail={week.detail}
                                entries={week.entries}
                            />
                        </div>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default CardCarousel;