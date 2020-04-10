import React from 'react';
import assetIcons from './assets';

const Icon = (props) => {

    const SvgIcon = assetIcons[props.name];
    console.log(props.name, assetIcons[props.name]);

    return <SvgIcon className={props.className}/>
}
            
export default Icon;