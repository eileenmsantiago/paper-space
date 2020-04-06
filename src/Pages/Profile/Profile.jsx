import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import firebase from '../../config/firebaseConfig';
import { useHistory } from 'react-router-dom';
import PSContainer from '../../components/PSContainer/PSContainer';

const Profile = (props) => {
    const history = useHistory();
    const { user } = useParams();
    if(!user) {
        // history.push('/login');
    }
    return (
        <div className="profile">
            <PSContainer>
                <div className="profile__wrapper">
                    <Header
                        // title={`${user}'s Profile`}
                        title={`${firebase.isLoggedIn()}'s Profile`}
                    / >
                </div>
            </PSContainer>
        </div>
    )
}

export default Profile;