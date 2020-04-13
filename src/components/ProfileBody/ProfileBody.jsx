import React from 'react';
import user from '../../api/user';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

const ProfileBody = (props) => {
    return(
        <div className="profile-info">
            <div className="profile-info__heading">
                <Text size="labels" color="light-grey">ACCOUNT INFO</Text>
            </div>
            <div className="profile-info__container">
                <Icon className="profile-info__icon" name="email" /> 
                <Text className="profile-info__content" size="regular" color="light-black">
                    {user.getEmail()}
                </Text>
            </div>
            <div className="profile-info__container">
                <Icon className="profile-info__icon" name="password" /> 
                <input className="profile-info__password" disabled type="password" value="password">
                    {/* <Text className="profile-info__content" size="regular" color="light-black">
                        {password}
                    </Text> */}
                </input>
            </div>
            <div className="profile-info__heading">
                <Text size="labels" color="light-grey">PREFERENCES</Text>
            </div>
            <div className="profile-info__container">
                <Icon className="profile-info__icon" name="night" /> 
                <Text className="profile-info__content" size="regular" color="light-black">
                    Automatic Dark Mode
                </Text>
            </div>
            <div className="profile-info__heading">
                <Text size="labels" color="light-grey">PAPERSPACE APP</Text>
            </div>
            <div className="profile-info__container">
                <Icon className="profile-info__icon" name="about" /> 
                <Text className="profile-info__content" size="regular" color="light-black">
                    About Paperspace
                </Text>
            </div>
            <div className="profile-info__container">
                <Icon className="profile-info__icon" name="policy" /> 
                <Text className="profile-info__content" size="regular" color="light-black">
                    Privacy & Policy
                </Text>
            </div>
            <div className="profile-info__container">
                <Icon className="profile-info__icon" name="terms" /> 
                <Text className="profile-info__content" size="regular" color="light-black">
                    Terms of Service
                </Text>
            </div>

        </div>

    );
}
export default ProfileBody;