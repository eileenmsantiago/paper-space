import React from 'react';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

const Card = (props) => {

    const {colorHex, date, detail, entries} = props;    
    const hasEntries = entries.length > 0 ? true : false;

    return (
        // <div className={`ps-card c ${this.state.result.document_tone.tones.tone_id}_backGround`}>
        <div className="ps-card" style={{background: colorHex}}>
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