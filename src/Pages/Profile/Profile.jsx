import React from 'react';
import withAuth from '../../hoc/withAuth';
import user from '../../api/user';
import Header from '../../components/Header/Header';
import PSContainer from '../../components/PSContainer/PSContainer';
import Text from '../../components/Text/Text';
import ProfileBody from '../../components/ProfileBody/ProfileBody';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';

const Profile = (props) => {

    const history = useHistory();
    const date = new Date(user.getCreatedTime());
    
    const logout = () => {
        user.logout().then(() => {
            history.push('/login');
        })

    }
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
                <Button onClick={logout}>Logout</Button>
            </PSContainer>
        </div>
    )
}

export default withAuth(Profile);