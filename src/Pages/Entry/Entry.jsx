import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {getSession} from '../../api/user';
import EntryForm from '../../components/EntryForm/EntryForm';
import { putEntry, getEntry } from '../../api/entries';
import withAuth from '../../hoc/withAuth';

const Entry = (props) => {
    const history = useHistory();
    const user = getSession();
    if(!user) {
        history.push('/login'); // uncomment to test without logging in
    }
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

export default withAuth(Entry);


