import React from 'react';
import Text from '../Text/Text';

const EntryCard = (props) => {
    const {date, time, brief, id} = props;
    return (
        <a className="entry-card" href={`/entry/${id}`}>
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
                    <Text size="tab" color="grey2">{brief.substring(0, 100)}</Text>
                </div>
            </div>
        </a>
    )
}
export default EntryCard;