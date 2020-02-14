import React from 'react';
import './Button.css';

function Button(props) {
    console.log(props.styleType);


    let buttonClass;

    if(props.styleType == "primary") {
        buttonClass = "btn-primary";
    } else if(props.styleType == "secondary"){
        buttonClass = "btn-secondary";
    } else {
        buttonClass = "btn-tertiary";
    }

    return (
        <button className={buttonClass}>
            {props.text}
        </button>
    )
}

export default Button;