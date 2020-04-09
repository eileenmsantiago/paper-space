import React from 'react';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import {journals} from '../../journals';
// console.log(journals);

const Card = (props) => {

    const {date, detail, entries} = props;    
    const hasEntries = entries.length > 0 ? true : false;

    return (
        // <div className={`ps-card c ${this.state.result.document_tone.tones.tone_id}_backGround`}>
        <div className="ps-card">
            {journals.map((item,i )=> {
               return <div className="card-colors" key={i}>
                    {item.entries.map((item2,j)=>{
                        // console.log(item2,j);
                        return <div key={j} className={`c c-${item2.mood}`}></div>   
                    })}      
                </div>  
            } )}  
            <div className="ps-card__wrapper">

                <div className="ps-card__heading" id="heading-date">
                    <Text size="large" weight="bold" color="light-black">
                        {date}
                    </Text>
                </div>
                <div className="p__sub-heading" id="heading-detail-date">
                    <Text size="small" weight="regular" color="light-black">
                        {detail}
                    </Text>
                </div>
                <div className="ps-card__entry-count" id="entry-count">
                    <Text size="small" weight="regular" color="light-black">
                        {hasEntries ? `${entries.length} entries` : 'No journal entry'}
                        {/* {props.cardEntries} */}
                    </Text>
                </div>
            </div>
        </div>
    )
}


Card.defaultProps = {
    entries: []
}

export default Card;