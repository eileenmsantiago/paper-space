import React from 'react';
import { Avatar } from '@material-ui/core';

function ProfileAvatar(props) {

    const {title, subtitle, classes} = props;

    return (
        <Avatar className="avatar"
            alt="profile image" 
            src='./' 
        />
    )
};

export default ProfileAvatar;
