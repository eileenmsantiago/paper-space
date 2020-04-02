import React from 'react';
import assetIcons from './assets';

const Icon = (props) => {

    const SvgIcon = assetIcons[props.name];

    return <SvgIcon className={props.className}/>
}
            
export default Icon;