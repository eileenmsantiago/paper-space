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

    const { submitText, onSubmit, date }  = props;
    const history = useHistory();
    const [text, setText] = useState(props.text);
    const [prompt, setPrompt] = useState(props.prompt);
    const {closeLink} = props;

    useEffect(() => {
        setText(props.text);
        setPrompt(props.prompt);
    }, [props.text, props.prompt])

    const onTextChange = (e) => {
        setText(e.target.value);
    };

    const goBack = () => {
        history.goBack();
    }

    const addPrompt = () => {
        setPrompt('How are you feeling today? Is there anything encouraging or holding you back this week?');
    }

    const submit = () => {
        onSubmit({
            mood: getMood(text),
            text: text,
            prompt: prompt
        })
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
                                {date ? date.toLocaleDateString('en-US') : ''}
                            </Text>
                        </div>
                        <div className="entry__body-content">
                            <TextArea value={text} onChange={onTextChange}/>
                        </div>
                    </div>
                </div>
                {text && (
                    <div>
                        <Button onClick={submit}>
                            {submitText }
                        </Button>
                    </div>
                )}
            </div>
        </PSContainer>
    )
    
}

EntryForm.defaultProps = {
    date: null,
    prompt: null,
    text: '',
    submitText: 'Add Entry',

}

export default EntryForm;


