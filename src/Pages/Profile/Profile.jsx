import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {getSession} from '../../api/user';
import withAuth from '../../hoc/withAuth';
import Header from '../../components/Header/Header';
import PSContainer from '../../components/PSContainer/PSContainer';
import Text from '../../components/Text/Text';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    const user = getSession();

    return (
        <div className="profile">
            <PSContainer>
                <Header
                    title={`${user.displayName}'s Profile`}
                / >
                <div className="profile__nav">
                    <div className="profile__avatar">
                        <img src="/assets/icons/profile.svg"></img>
                    </div>
                    {/* <ProfileAvatar className="profile__nav-avatar" /> */}
                    <div className="profile__nav-header">
                        <Text color="light-black" size="regular">
                            {`${user.displayName}`}
                        </Text>
                    </div>
                    <div className="profile__nav-text">
                        <Text color="light-black" size="labels" weight="semi" >
                            Journaling with Paperspace since Jan 20th, 2020
                        </Text>
                    </div>
                </div>
                <div className="profile__body">
                    <ProfileInfo email={`${user.email}`}></ProfileInfo>
                    {/* <ProfileInfo email={`${firebase.isLoggedIn(username)}`} password={`${firebase.isLoggedIn(password)}`}></ProfileInfo> */}
                </div>
            </PSContainer>
        </div>
    )
}

export default withAuth(Profile);