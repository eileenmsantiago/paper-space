import React from 'react';
import PSContainer from '../../ui/PSContainer/PSContainer';
import Header from '../../ui/Header/Header';

const Profile = (props) => {
    return (
        <div className="profile">
            <PSContainer>
            <div className="profile__wrapper">
                <Header
                    title="My Profile">                   
                </Header>
                
            </div>
            </PSContainer>
        </div>
    )
}

export default Profile;