import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Card from '../Card/Card';

const CardCarousel = (props) => {
    const { entries } = props;
    const params = {
        spaceBetween: 30,
        slidesPerView: 'auto',
        slidesOffsetBefore: 20
    };
    return (
        <div className="card-carousel">
            <Swiper {...params}>
                {entries.map((entry) => {
                    return (
                        <div>
                            <a href={`/entries/${entry.id}`}>
                                <Card
                                    colorHex="#fff"
                                    date={entry.dateRange}
                                    detail={entry.detail}
                                    entries={entry.entries}
                                />
                            </a>
                        </div>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default CardCarousel;