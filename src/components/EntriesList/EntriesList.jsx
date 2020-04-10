import React from 'react';
import EntryCard from '../EntryCard/EntryCard';

const EntriesList = (props) => {
    const {entries} = props;
    return (
        <div className="entries-list">
            {entries.map(entry => {
                return (
                    <EntryCard date={entry.date} time={entry.time} brief={entry.brief}/>
                )
            })}
        </div>
    )
}

EntriesList.defaultProps = {
    entries: [1]
}

export default EntriesList;