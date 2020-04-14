import React, {useState} from 'react';
import moment from 'moment';
import user from '../../api/user';
import withAuth from '../../hoc/withAuth';
import PSContainer from '../../components/PSContainer/PSContainer';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { useEffect } from 'react';

const Dashboard = (props) => {

    const weeks = [];
    const [swiper, setSwiper] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    
    const first = moment().startOf('month');
    weeks.push(first.clone());
    for(let i = 0; i < 4; i++) {
        const currFirst = weeks[i].clone();
        weeks.push(currFirst.add(7, 'days'));
    }

    const journals = [];

    for(let i = 0; i < weeks.length - 1; i++) {
        journals.push({
            from: weeks[i],
            to: weeks[i+1],
            detail: `Week ${i + 1}`,
        })
    }

    const swiperParams = {
        spaceBetween: 0,
        slidesPerView: 1.5,
        slidesOffsetBefore: 20,
    };

    if(swiper !== null) {
        swiper.on('slideChange', (i) => {
            setActiveSlide(swiper.activeIndex);
        })
    }

    return(
        <div className="dashboard">
            <PSContainer>
                <div className="dashboard__wrapper">
                    <Header
                        title={`${user.getName()}'s PaperSpace`}
                        subtitle="Welcome to your PaperSpace, click “+” to add an entry.">
                    </Header>
                </div>
            </PSContainer>
            <div className="card-carousel">
                <Swiper {...swiperParams} getSwiper={setSwiper}>
                    {journals.map((item, i) => (
                        <div className="" key={i}>
                            <Card {...item} active={i === activeSlide}/>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default withAuth(Dashboard);