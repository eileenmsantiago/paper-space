import React from 'react';
import Text from '../Text/Text';
import { Avatar } from '@material-ui/core';

function Avartar(props) {

    const {title, subtitle} = props;

    return (
        <div className="avatar">
            <Avatar alt="Emillie A." src='./' />
            <div className="avatar__title">
                
            </div>
           
        </div>
    )
};

export default Avartar;