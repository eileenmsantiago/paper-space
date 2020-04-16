import React from 'react';
import user from '../../api/user';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    large: {
        margin: 10,
        width: 60,
        height: 60,
    },
});

export default function ProfileAvatar() {
    const classes = useStyles();

    return (
        <Avatar 
            alt="Remy Sharp" 
            // src="/assets/icons/profile.svg" 
            className={classes.large}>
            {user.getName().charAt(0)}
        </Avatar>
    );
}
