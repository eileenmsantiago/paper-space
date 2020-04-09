import React from 'react';
import Header from '../../components/Header/Header';
import PSContainer from '../../components/PSContainer/PSContainer';
import EntryCard from '../../components/EntryCard/EntryCard';
import { useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Entries = (props) => {
    const match = useRouteMatch();
    const journalId = match.params.journalId;
    const { journals } = props;
    const [entries, setEntries] = useState([]);
    // const entries = journals[journalId-1].entries;

    useEffect(() => {
        fetch('/entries')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setEntries(res);
        })
        .catch(err => {
            // TODO: handle catch
        })
    }, []);
    return(
        <PSContainer>
            <Header backLink="/"></Header>
                {entries.map(entry => {
                    return (
                        <EntryCard id={entry._id} date={entry.date} time={entry.time} brief={entry.entryContent}/>
                    )
            })}
        </PSContainer>
    )
}
export default Entries;