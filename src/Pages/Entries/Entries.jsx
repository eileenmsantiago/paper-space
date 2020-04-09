import React from 'react';
import Header from '../../ui/Header/Header';
import PSContainer from '../../ui/PSContainer/PSContainer';
import EntryCard from '../../ui/EntryCard/EntryCard';
import { useRouteMatch } from 'react-router-dom';

const Entries = (props) => {
    const match = useRouteMatch();
    const jounralId = match.params.journalId;
    const {journals} = props;
    const entries = journals[jounralId-1].entries;
    return(
        <PSContainer>
            <Header backLink="/">
            </Header>
             {entries.map((entry,i )=> {
                return (
                    <EntryCard key={i} date={entry.date} time={entry.time} brief={entry.brief}/>
                )
            })}
        </PSContainer>
    )
}
export default Entries;