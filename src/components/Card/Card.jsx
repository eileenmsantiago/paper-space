import React, {useState} from 'react';
import Text from '../Text/Text';
import useEntries from '../../hoc/useEntries';
import { useEffect } from 'react';

const Card = (props) => {
    const {from, to, detail} = props;
    const [active, setActive] = useState(false);
    const entries = useEntries(from.format('YYYYMMDD'), to.format('YYYYMMDD')) || [];

    useEffect(() => {
        if(props.active) {
            setActive(true);
        }
    }, [props.active]);

    return (
        <a href={`/entries?from=${from.format('YYYYMMDD')}&to=${to.format('YYYYMMDD')}`}>
            <div className="ps-card">
                <div className="card-colors">
                    {active ? entries.map((entry,j)=> {                
                        let tone;
                        if(entry.tones.length) {
                            tone = entry.tones[0].tone_id;
                        }
                        return (
                            <div
                                key={j}
                                className={`card-colors__blob card-colors__blob--${tone}`}
                            />
                        )
                    }):null}  
                </div> 
                <div className="ps-card__wrapper">
                    <div className="ps-card__heading" id="heading-date">
                        <Text size="large" weight="bold" color="light-black">
                            {`${from.format('MMM-DD')} - ${to.format('DD')}`}
                        </Text>
                    </div>
                    <div className="ps__sub-heading" id="heading-detail-date">
                        <Text size="small" weight="regular" color="light-black">
                            {detail}
                        </Text>
                    </div>
                    <div className="ps-card__entry-count" id="entry-count">
                        <Text size="small" weight="regular" color="light-black">
                            {entries.length > 0 ? `${entries.length} entries` : 'No journal entries'}
                        </Text>
                    </div>
                </div>
            </div>      
        </a> 
    )
}

Card.defaultProps = {
    entries: []
}

export default Card;