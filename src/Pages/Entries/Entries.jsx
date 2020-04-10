import React from 'react';
import Header from '../../components/Header/Header';
import PSContainer from '../../components/PSContainer/PSContainer';
import EntryCard from '../../components/EntryCard/EntryCard';
import { useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllEntries } from '../../api/entries';

const Entries = (props) => {
    const match = useRouteMatch();
    const journalId = match.params.journalId;
    const { journals } = props;
    const [entries, setEntries] = useState([]);
    // const entries = journals[journalId-1].entries;

    useEffect(() => {
        getAllEntries().then(res => {
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
                        <EntryCard entry={entry}/>
                    )
            })}
        </PSContainer>
    )
}
export default Entries;