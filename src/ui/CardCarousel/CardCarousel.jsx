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
                <div>
                    <Card 
                        colorHex="#fff"
                        cardDate="Jan 16-21"
                        cardDetail="Journal one"
                        cardEntries="1 entry"
                    />
                </div>
                <div>
                    <Card 
                        colorHex="#fff"
                        cardDate="Jan 16-21"
                        cardDetail="Journal two"
                        cardEntries="1 entry"
                    />
                </div>
                <div>
                    <Card 
                        colorHex="#fff"
                        cardDate="Jan 16-21"
                        cardDetail="Journal three"
                        cardEntries="1 entry"
                    />
                </div>
            </Swiper>
        </div>
    )
}

export default CardCarousel;