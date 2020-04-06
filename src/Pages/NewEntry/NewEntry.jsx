import React from 'react';
import Text from '../../components/Text/Text';
import PSContainer from '../../components/PSContainer/PSContainer';
import TextArea from '../../components/TextArea/TextArea';
import Icon from '../../components/Icon/Icon';

const NewEntry = (props) => {
    const {closeLink} = props;
    return (
        <PSContainer>
            <div className="entry">
                <div className="entry__wrapper">
                    <div className="entry__header">
                        <a href="/"><img src="assets/icon-prompts-cards.svg"/></a>
                        <div className="entry__header-heading">
                            <Text size="small" weight="light" color="light-black">USE PROMPTS</Text>
                        </div>
                        <a className="entry__header-icon" href={closeLink}>
                            <Icon name="close"/>
                        </a>
                        {/* <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button> */}
                    </div>
                    <div className="entry__body">
                        <div className="entry__body-header">
                            <Text size="labels" weight="semi" color="light-grey">
                                {/* {props.entryDate} */}
                                2nd Apr, 2020
                            </Text>
                        </div>
                        <div className="entry__body-content">
                            <TextArea></TextArea>
                        </div>
                    </div>
                </div>
            </div>
        </PSContainer>
    )
}

export default NewEntry;