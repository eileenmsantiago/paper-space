import React from 'react';
import Text from '../Text/Text';

const EntryCard = (props) => {
    const {date, time, brief} = props;
    return (
        <div className="entry-card">
            <div className="entry-card__highlight">
            </div>
            <div className="entry-card__wrapper">
                <div className="entry-card__header-container">
                    <div className="entry-card__header">
                        <Text size="labels" weight="semi" color="grey2">{date}</Text>
                    </div>
                    <div className="entries-time">
                        <Text size="labels" weight="semi" color="grey2">{time}</Text>
                    </div>
                </div>
                <div className="entries-list__body">
                    <Text size="tab" color="grey2">{brief}</Text>
                </div>
            </div>
        </div>
    )
}
export default EntryCard;