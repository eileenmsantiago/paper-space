import React, { useState, useEffect } from 'react';
import EntryForm from '../../components/EntryForm/EntryForm';
import { useRouteMatch } from 'react-router-dom';

const getEntry = async (id) => {
    const res = await fetch(`/entries/${id}`);
    const resJson = await res.json();
    return resJson;
}

const Entry = (props) => {

    const match = useRouteMatch();
    const [entry, setEntry] = useState({
        prompt: null,
        entryContent: ""
    });
    const entryId = match.params.entryId;

    useEffect(() => {
        if(entryId) {
            getEntry(entryId).then(entry => {
                setEntry(entry);
            })
        }
    }, []);

    const updateEntry = ({text, prompt, mood = 'happy'}) => {
        fetch(`/entries/update/${entryId}`, {
            method: 'PUT',
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
            console.log('updated!', res);
        })
        .catch(err => {
            // TODO: handle catch
        })
    }

    return (
        <EntryForm
            date={entry.createdAt ? new Date(entry.createdAt) : null}
            prompt={entry.prompt}
            text={entry.entryContent}
            submitText="Update Entry"
            onSubmit={updateEntry}
        />
    )
    
}

export default Entry;


