import React from 'react';

function Button(props) {

    const { styleType, text } = props;
    
    let buttonClass;
    console.log(styleType);

    if(styleType == "primary") {
        buttonClass = "btn-primary";
    } else {
        buttonClass = "btn-secondary";
    }

    return (
        <Button className={buttonClass}>
            {text}
        </Button>
    )
}

export default Button;