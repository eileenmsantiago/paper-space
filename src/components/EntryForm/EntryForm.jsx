import React, { useState, useEffect } from 'react';
import Text from '../../components/Text/Text';
import PSContainer from '../../components/PSContainer/PSContainer';
import TextArea from '../../components/TextArea/TextArea';
import Icon from '../../components/Icon/Icon';
import { useHistory } from 'react-router-dom';

const EntryForm = (props) => {
    const { submitText, deleteEntry, onSubmit, onDelete }  = props;
    const history = useHistory();
    const [entry, setEntry] = useState(props.entry);

    useEffect(
        () => {
            setEntry(props.entry);
        },
        [props.entry]
    );

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
    };
    
    const goBack = () => {
        history.push('/');
    }

    const submit = () => {
        onSubmit(entry);
    }
    const submitDelete = () => {
        onDelete(entry);
    }
    console.log(entry)
    const date = entry.createdAt ? new Date(entry.createdAt) : new Date()

    return (
        <PSContainer>
            <div className="entry">
                <div className="entry__wrapper">
                    <div className="entry__header">
                        <div onClick={addPrompt} className="entry__header-heading">
                            {/* <img src="assets/icon-prompts-cards.svg"/> */}
                            <Icon name="cards"/>
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
                    <div className="entry__footer">
                        <div onClick={submitDelete}>
                            <Icon name="bin">{deleteEntry}</Icon>
                        </div>
                        <div className="entry__footer-cta" onClick={submit}>
                            {submitText}
                        </div>
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
