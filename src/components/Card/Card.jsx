// import React from 'react';
// import Heading from '../Heading/Heading';
// import Text from '../Text/Text';

// const Card = (props) => {

//     const {colorHex, date, detail, entries} = props;    
//     const hasEntries = entries.length > 0 ? true : false;

//     return (
//         <div className="ps-card" style={{background: colorHex}}>
//             <div className="ps-card__wrapper">
//                 <div className="ps-card__heading" id="heading-date">
//                     <Text size="large" weight="bold" color="light-black">
//                         {date}
//                     </Text>
//                 </div>
//                 <div className="ps-card__sub-heading" id="heading-detail-date">
//                     <Text size="small" weight="regular" color="light-black">
//                         {detail}
//                     </Text>
//                 </div>
//                 <div className="ps-card__entry-count" id="entry-count">
//                     <Text size="small" weight="regular" color="light-black">
//                         {hasEntries ? `${entries.length} entries` : 'No entry entry'}
//                         {/* {props.cardEntries} */}
//                     </Text>
//                 </div>
//             </div>
//         </div>
//     )
// }

// Card.defaultProps = {
//     entries: []
// }

// export default Card;

import React from 'react';
import Text from '../Text/Text';
import {journals} from '../../api/journals';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
console.log(journals);

const Card = () => {
    const params = {
        spaceBetween: 0,
        slidesPerView: 'auto',
        slidesOffsetBefore: 20,
    };
    return (
        <div className="card-carousel">
            <Swiper {...params}>
                {journals.map((item,i )=> {
                    const hasEntries = item.entries.length 
                    return <div key={i}>
                            <a href={`/entries/${item.id}`}>
                                <div className="ps-card">
                                    <div className="card-colors" >
                                        {item.entries.map((item2,j)=>{                      
                                            return <div key={j} className={`card-colors__blob card-colors__blob--${item2.mood}`}></div>   
                                        })}  
                                </div> 
                                <div className="ps-card__wrapper">
                                    <div className="ps-card__heading" id="heading-date">
                                        <Text size="large" weight="bold" color="light-black">
                                            {item.dateRange}
                                        </Text>
                                    </div>
                                    <div className="ps__sub-heading" id="heading-detail-date">
                                        <Text size="small" weight="regular" color="light-black">
                                            {item.detail}
                                        </Text>
                                    </div>
                                    <div className="ps-card__entry-count" id="entry-count">
                                        <Text size="small" weight="regular" color="light-black">
                                            {hasEntries > 0 ? `${hasEntries} entries` : 'No journal entry'}
                                            {/* {props.cardEntries} */}
                                        </Text>
                                    </div>
                                </div>
                            </div>      
                        </a> 
                    </div> 
                } )}  
            </Swiper>
        </div>
    )
}


Card.defaultProps = {
    entries: []
}

export default Card;