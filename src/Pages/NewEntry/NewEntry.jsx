import React from 'react';
import Text from '../../components/Text/Text';
import PSContainer from '../../components/PSContainer/PSContainer';
import TextArea from '../../components/TextArea/TextArea';
import Icon from '../../components/Icon/Icon';

const NewEntry = (props) => {
    const {closeLink} = props;
    return (
        <PSContainer>
            <div className="journal">
                <div className="journal__wrapper">
                    <div className="journal__header">
                        <a href="/"><img src="assets/icon-prompts-cards.svg"/></a>
                        <div className="journal__header-heading">
                            <Text size="small" weight="light" color="light-black">USE PROMPTS</Text>
                        </div>
                        <a className="journal__header-icon" href={closeLink}>
                            <Icon name="close"/>
                        </a>
                        {/* <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button> */}
                    </div>
                    <div className="journal__body">
                        <div className="journal__body-header">
                            <Text size="labels" weight="semi" color="light-grey">
                                {/* {props.journalDate} */}
                                2nd Apr, 2020
                            </Text>
                        </div>
                        <div className="journal__body-content">
                            {/* <Text size="regular" color="light-grey2">
                                Start Writing...
                            </Text>  */}
                            <TextArea></TextArea>
                        </div>
                    </div>
                </div>
            </div>
        </PSContainer>
    )
}

export default NewEntry;