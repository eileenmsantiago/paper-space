import React from 'react';
import EntryForm from '../../components/EntryForm/EntryForm';
import { postEntry } from '../../api/entries';
import { useHistory } from 'react-router-dom';

const NewEntry = () => {
    const history = useHistory();

    const addEntry = (entry) => {
        postEntry(entry).then(res => {
            if(res._id) {
                history.push(`/entry/${res._id}`)
            }
        })
        .catch(err => {
            // TODO: handle catch
        })
    }

    return (
        <EntryForm
            submitText="Add Entry"
            onSubmit={addEntry}
        />
    )
}

export default NewEntry;


