import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import withAuth from '../../hoc/withAuth';
import user from '../../api/user';
import Header from '../../components/Header/Header';
import PSContainer from '../../components/PSContainer/PSContainer';
import Text from '../../components/Text/Text';
import ProfileBody from '../../components/ProfileBody/ProfileBody';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';

const Profile = (props) => {

    // const user = getSession();
    const date = new Date(user.getCreatedTime());
    // const email = new Date(user.getEmail());

    return (
        <div className="profile">
            <PSContainer>
                <Header
                    title={`${user.getName()}'s Profile`}
                / >
                <div className="profile__nav">
                    <div className="profile__avatar">
                        <ProfileAvatar></ProfileAvatar>
                    </div>
                    <div className="profile__nav-header">
                        <Text color="light-black" size="regular">
                            {`${user.getName()}`}
                        </Text>
                    </div>
                    <div className="profile__nav-text">
                        <Text color="light-black" size="labels" weight="semi" >
                            Journaling with PaperSpace since {`${date.toDateString()}`}
                        </Text>
                    </div>
                </div>
                <div className="profile__body">
                    <ProfileBody />
                </div>
            </PSContainer>
        </div>
    )
}

export default withAuth(Profile);