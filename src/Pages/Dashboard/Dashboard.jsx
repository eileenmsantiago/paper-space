import React from 'react';
import { getSession } from '../../api/user';
import withAuth from '../../hoc/withAuth';
import PSContainer from '../../components/PSContainer/PSContainer';
// import CardCarousel from '../../components/Card/Card';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';

const Dashboard = (props) => {

    const user = getSession();

    const {entries} = props;
    let hasEntries = false;
    entries.forEach(entry => {
        if(entry.entries.length > 0) {
            hasEntries = true;
        }
    })
    return(
        <div className="dashboard">
            <PSContainer>
                <div className="dashboard__wrapper">
                    <Header
                        title={`${user.displayName}'s PaperSpace`}
                        subtitle={hasEntries ? `Here are your past entry collections.` : 'Welcome to your PaperSpace, click “+” to write your first entry.'}>
                    </Header>
                </div>
            </PSContainer>
            <Card entries={entries}/>
        </div>
    );
}

export default withAuth(Dashboard);