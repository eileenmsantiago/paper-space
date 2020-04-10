import React from 'react';
import Text from '../Text/Text';

const EntryCard = (props) => {
    const {entry} = props;

    if (!entry) {
        return null;
    }
    const tones = entry.tones;
    let toneId;
    if(tones.length > 0) {
        toneId = entry.tones[0].tone_id;
    }


    return (
        <a className="entry-card" href={`/entry/${entry._id}`}>
            <div className={`entry-card__highlight entry-card__highlight--${toneId}`}>
            </div>
            <div className="entry-card__wrapper">
                <div className="entry-card__header-container">
                    <div className="entry-card__header">
                        <Text size="labels" weight="semi" color="grey2">{entry.createdAt}</Text>
                    </div>
                    <div className="entries-time">
                        <Text size="labels" weight="semi" color="grey2">{entry.time}</Text>
                    </div>
                </div>
                <div className="entries-list__body">
                    <Text size="tab" color="grey2">{entry.content.substring(0, 100)}</Text>
                </div>
            </div>
        </a>
    )
}
export default EntryCard;