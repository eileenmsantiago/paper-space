import React from 'react';
import PSContainer from '../../components/PSContainer/PSContainer';
// import CardCarousel from '../../components/CardCarousel/CardCarousel';
import CardCarousel from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import firebase from '../../config/firebaseConfig';
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
    const history = useHistory();
    const user = firebase.isLoggedIn();
    if(!user) {
        // history.push('/login');
    }
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
                        // title={`${user}'s PaperSpace`}
                        title={`${firebase.isLoggedIn()}'s PaperSpace`}
                        subtitle={hasEntries ? `Here are your past entry collections.` : 'Welcome to your PaperSpace, click “+” to write your first entry.'}>
                    </Header>
                </div>
            </PSContainer>
            <CardCarousel entries={entries}/>
        </div>
    );
}

export default Dashboard;