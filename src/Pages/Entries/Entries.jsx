import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';
import user, {getSession} from '../../api/user';
import Header from '../../components/Header/Header';
import PSContainer from '../../components/PSContainer/PSContainer';
import EntryCard from '../../components/EntryCard/EntryCard';
import { getAllEntries } from '../../api/entries';
import withAuth from '../../hoc/withAuth';

const Entries = (props) => {
    const history = useHistory();
    const user = getSession();
    if(!user) {
        history.push('/login'); // uncomment to test without logging in
    }
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
export default withAuth(Entries);