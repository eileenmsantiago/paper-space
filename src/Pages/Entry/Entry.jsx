import React, { useState, useEffect } from 'react';
import EntryForm from '../../components/EntryForm/EntryForm';
import { useRouteMatch } from 'react-router-dom';
import { putEntry, getEntry } from '../../api/entries';

const Entry = (props) => {

    const match = useRouteMatch();
    const [entry, setEntry] = useState();
    const entryId = match.params.entryId;

    useEffect(() => {
        if(entryId) {
            getEntry(entryId).then(entry => {
                setEntry(entry);
            })
        }
    }, []);

    const updateEntry = (entry) => {
        putEntry(entry).then(res => {
            console.log('updated!', res);
        })
        .catch(err => {
            // TODO: handle catch
        })
    }

    return (
        <EntryForm
            entry={entry}
            submitText="Update Entry"
            onSubmit={updateEntry}
        />
    )
    
}

export default Entry;


