import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import firebase from '../../config/firebaseConfig';
import PSContainer from '../../components/PSContainer/PSContainer';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import Text from '../../components/Text/Text';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import Button from '../../components/Button/Button';

const Profile = (props) => {
    // const history = useHistory();
    // const { user } = useParams();
    // const { username, password } = props;
    // if(!user) {
    //     history.push('/login'); // uncomment to test without logging in
    // }
    // async function onLogout() {
	// 	await firebase.logout();
	// 	props.history.push("/");
	// }

    return (
        <div className="profile">
            <PSContainer>
                <Header
                    title={`${firebase.isLoggedIn()}'s Profile`}
                / >
                <div className="profile__nav">
                    <div className="profile__avatar">
                        <img src="/assets/icons/profile.svg"></img>
                    </div>
                    {/* <ProfileAvatar className="profile__nav-avatar" /> */}
                    <div className="profile__nav-header">
                        <Text color="light-black" size="regular">
                            {`${firebase.isLoggedIn()}`}
                        </Text>
                    </div>
                    <div className="profile__nav-text">
                        <Text color="light-black" size="labels" weight="semi" >
                            Journaling with Paperspace since Jan 20th, 2020
                        </Text>
                    </div>
                </div>
                <div className="profile__body">
                    <ProfileInfo />
                    {/* <ProfileInfo email={`${firebase.isLoggedIn(username)}`}></ProfileInfo> */}
                    {/* <ProfileInfo email={`${firebase.isLoggedIn(username)}`} password={`${firebase.isLoggedIn(password)}`}></ProfileInfo> */}
                    <Button className="btn btn-secondary"
                    // type="submit"
                    // onClick={onLogout}
                    >
                    LOG OUT
                    </Button>
                </div>
            </PSContainer>
        </div>
    )
}

export default Profile;