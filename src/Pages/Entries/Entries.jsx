import React from 'react';
import Header from '../../components/Header/Header';
import PSContainer from '../../components/PSContainer/PSContainer';
import EntryCard from '../../components/EntryCard/EntryCard';
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
             {entries.map(entry => {
                return (
                    <EntryCard date={entry.date} time={entry.time} brief={entry.brief}/>
                )
            })}
        </PSContainer>
    )
}
export default Entries;