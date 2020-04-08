import React from 'react';
import Text from '../../components/Text/Text';
import PSContainer from '../../components/PSContainer/PSContainer';
import TextArea from '../../components/TextArea/TextArea';
import Icon from '../../components/Icon/Icon';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const NewEntry = (props) => {
    const {closeLink} = props;
    const history = useHistory();
    const [prompt, setPrompt] = useState();
    const goBack = () => {
        history.goBack();
    }

    const addPrompt = () => {
        setPrompt('How are you feeling today? Is there anything encouraging or holding you back this week?');
    }
    return (
        <PSContainer>
            <div className="entry">
                <div className="entry__wrapper">
                    <div className="entry__header">
                        <a href="/"><img src="assets/icon-prompts-cards.svg"/></a>
                        <div onClick={addPrompt} className="entry__header-heading">
                            <Text  size="small" weight="light" color="light-black">USE PROMPTS</Text>
                        </div>
                        
                        <div onClick={goBack} className="entry__header-icon" href={closeLink}>
                            <Icon name="close"/>
                        </div>
                    </div>
                        <div className="entry__prompt">
                            <Text size="regular" weight="regular" color="light-grey">{prompt}</Text>
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