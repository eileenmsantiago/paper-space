import React from 'react';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

const Card = (props) => {
    return (
        <div className="ps-card" style={{background: props.colorHex}}>
            <div className="ps-card__wrapper">
                <div className="ps-card__heading" id="heading-date">
                    <Text size="large" weight="bold" color="light-black">
                        {props.cardDate}
                    </Text>
                </div>
                <div className="ps-card__sub-heading" id="heading-detail-date">
                    <Text size="small" weight="regular" color="light-black">
                        {props.cardDetail}
                    </Text>
                </div>
                <div className="ps-card__entry-count" id="entry-count">
                    <Text size="small" weight="regular" color="light-black">
                        {props.cardEntries}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Card;