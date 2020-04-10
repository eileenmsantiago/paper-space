import React, { useState } from 'react';
import Text from '../../components/Text/Text';
import PSContainer from '../../components/PSContainer/PSContainer';
import TextArea from '../../components/TextArea/TextArea';
import Icon from '../../components/Icon/Icon';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useEffect } from 'react';


const getMood = (text) => {
    // TODO: tone analyzer
    return 'happy';
}

const EntryForm = (props) => {
    const { submitText, onSubmit }  = props;
    const history = useHistory();
    const [entry, setEntry] = useState(props.entry);

    useEffect(
        () => {
            setEntry(props.entry);
        },
        [props.entry]
    )

    const onTextChange = (e) => {
        setEntry({
            ...entry,
            content: e.target.value
        })
    };

    const addPrompt = () => {
        setEntry({
            ...entry,
            prompt: 'How are you feeling today? Is there anything encouraging or holding you back this week?'
        })
    }


    const goBack = () => {
        history.goBack();
    }

    const submit = () => {
        const newMood = getMood(entry.text);
        onSubmit({
            ...entry,
            mood: newMood
        });
    }

    const date = entry.createdAt ? new Date(entry.createdAt) : new Date()

    return (
        <PSContainer>
            <div className="entry">
                <div className="entry__wrapper">
                    <div className="entry__header">
                        <a href="/"><img src="assets/icon-prompts-cards.svg"/></a>
                        <div onClick={addPrompt} className="entry__header-heading">
                            <Text  size="small" weight="light" color="light-black">USE PROMPTS</Text>
                        </div>
                        
                        <div onClick={goBack} className="entry__header-icon">
                            <Icon name="close"/>
                        </div>
                    </div>
                        <div className="entry__prompt">
                            <Text size="regular" weight="regular" color="light-grey">{entry.prompt}</Text>
                        </div>
                    <div className="entry__body">
                        <div className="entry__body-header">
                            <Text size="labels" weight="semi" color="light-grey">
                                {date.toLocaleDateString('en-US')}
                            </Text>
                        </div>
                        <div className="entry__body-content">
                            <TextArea value={entry.content} onChange={onTextChange}/>
                        </div>
                    </div>
                </div>
                {entry.content && (
                    <div>
                        <Button onClick={submit}>
                            {submitText}
                        </Button>
                    </div>
                )}
            </div>
        </PSContainer>
    )
}

EntryForm.defaultProps = {
    entry: {
        content: "",
        date: null
    },
    submitText: 'Add Entry',

}

export default EntryForm;


