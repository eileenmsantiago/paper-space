import React from 'react';
import Text from '../../ui/Text/Text';

const Journal = (props) => {
    return (
        <div className="journal">
            <div className="journal__wrapper">
                <div className="journal__header">
                    <div className="journal__header-bar">
                        <a href="index.html"><img src="assets/icon-prompts-cards.svg"/></a>
                        <Text size="large" weight="light" color="light-grey">USE PROMPTS</Text>
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journal;