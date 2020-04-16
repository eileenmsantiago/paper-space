import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import Header from '../../components/Header/Header';
import PSContainer from '../../components/PSContainer/PSContainer';
import EntryCard from '../../components/EntryCard/EntryCard';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import withAuth from '../../hoc/withAuth';
import useEntries from '../../hoc/useEntries';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Entries = (props) => {
    const query = useQuery();
    const entries = useEntries(query.get('from'), query.get('to'));
    const from = moment(query.get('from'));
    const to = moment(query.get('to'));

    return(
        <PSContainer>
            <Header backLink="/dashboard"/>
            <div style={{display: 'flex', marginBottom: '1rem'}}>
                <Heading level="h1">Journal Entries</Heading>
                <div style={{marginLeft: 'auto'}}>
                    <Text color="dark-grey">{`${from.format('MMM-DD')} - ${to.format('DD')}`}</Text>
                </div>
            </div>
            {entries.map(entry => {
                return (
                    <EntryCard entry={entry}/>
                )
            })}
        </PSContainer>
    )
}
export default withAuth(Entries);