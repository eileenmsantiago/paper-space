import React,{ useRef } from 'react';
import {useSpring, animated} from 'react-spring';

const LogoAnimation = (props) => {
    const logoRef = useRef();

    const logoStyle = useSpring({
        from:{
            opacity: 0,
            position:"absolute",
            transform:"scale(0.2)"  
        },
        to: {
            opacity: 1,
            transform:"scale(1)" 
        },
    });

	return (
            <animated.img src="./assets/Images/logo.svg" alt="logo" style={logoStyle}></animated.img>
    )
}


export default LogoAnimation;
