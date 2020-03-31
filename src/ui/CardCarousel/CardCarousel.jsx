import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Card from '../Card/Card';

const CardCarousel = (props) => {
    const {journals} = props;
    const params = {
        spaceBetween: 30,
        slidesPerView: 'auto',
        slidesOffsetBefore: 20
    };
    return (
        <div className="card-carousel">
             <Swiper {...params}>
                {journals.map((journal) => {
                    return (
                        <div>
                            <a href={`/entries/${journal.id}`}>
                                <Card
                                    colorHex="#fff"
                                    date={journal.dateRange}
                                    detail={journal.detail}
                                    entries={journal.entries}
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