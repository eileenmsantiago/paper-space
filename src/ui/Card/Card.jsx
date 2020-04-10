import React from 'react';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import {journals} from '../../journals';


const Card = () => {
    return (
        <div className="ps-container">
             {journals.map((item,i )=> {
                 const hasEntries = item.entries.length;  
                //  console.log(item,i);
                 return <div key={i}>
                     <a href={`/entries/${item.id}`}>
                         <div className="ps-card"><div className="card-colors" >
                            {item.entries.map((item2,j)=>{                           
                                return <div key={j} className={`c c-${item2.mood}`}></div>   
                            })}  
                            </div> 
                        </div> 
                     </a> 
                     <div className="ps-card__wrapper">
                         <div className="ps-card__heading" id="heading-date">
                             <Text size="large" weight="bold" color="light-black">
                                 {item.dateRange}
                             </Text>
                         </div>
                         <div className="p__sub-heading" id="heading-detail-date">
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
            } )}  
        </div>
    )
}


Card.defaultProps = {
    entries: []
}

export default Card;