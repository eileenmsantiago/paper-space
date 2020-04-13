import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {getSession} from '../../api/user';
import EntryForm from '../../components/EntryForm/EntryForm';
import { putEntry, getEntry, deleteEntry } from '../../api/entries';
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
            getEntry(entryId)
                .then(entry => {
                    if(entry) {
                        setEntry(entry);
                    } else {
                        history.push('/entries');
                    }

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

    const entryDeleted = (entry) => {
        deleteEntry(entry).then(res => {
            console.log('deleted!', res);
            history.push('/entries')
        })
        .catch(err => {
            // TODO: Handle catch
        })
    }

    return (
        <EntryForm
            entry={entry}
            submitText="Save"
            onSubmit={updateEntry}
            deleteText="Delete"
            onDelete={entryDeleted}
        />
    )
}

export default withAuth(Entry);


