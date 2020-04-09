import React from 'react';
import EntryForm from '../../components/EntryForm/EntryForm';
import { useHistory } from 'react-router-dom';

const NewEntry = () => {
    const history = useHistory();
    const addEntry = ({text, mood, prompt}) => {
        fetch('/entries/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "entryContent": text,
                "mood": mood,
                "prompt": prompt
            })
        })
        .then(res => res.json())
        .then(res => {
            history.push(`/entry/${res._id}`)
        })
        .catch(err => {
            // TODO: handle catch
        })
    }

    return (
        <EntryForm
            date={new Date()}
            submitText="Add Entry"
            onSubmit={addEntry}
        />
    )
    
}

export default NewEntry;


