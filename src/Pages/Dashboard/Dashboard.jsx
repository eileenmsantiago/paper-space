import React from 'react';
import PSContainer from '../../components/PSContainer/PSContainer';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import Header from '../../components/Header/Header';
import firebase from '../../config/firebaseConfig'
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
    const history = useHistory();
    const user = firebase.isLoggedIn();
    if(!user) {
        history.push('/login');
    }
    const {journals} = props;
    let hasEntries = false;
    journals.forEach(journal => {
        if(journal.entries.length > 0) {
            hasEntries = true;
        }
    })
    return(
        <div className="dashboard">
            <PSContainer>
                <div className="dashboard__wrapper">
                    <Header
                        title={`${user}'s PaperSpace`}
                        subtitle={hasEntries ? `Here are your past journal collections.` : 'Welcome to your PaperSpace, click “+” to write your first entry.'}>
                    </Header>
                </div>
            </PSContainer>
            <CardCarousel journals={journals}/>
        </div>
    );
}

export default Dashboard;