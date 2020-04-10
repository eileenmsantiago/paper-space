import React from 'react';

const Button = (props) => {

    const { styleType, children, onClick } = props;
    
    let buttonClass;
    console.log(styleType);

    if(styleType == "primary") {
        buttonClass = "btn-primary";
    } else {
        buttonClass = "btn-secondary";
    }

    return (
        <button onClick={onClick} className={`btn ${buttonClass}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    styleType: "primary"
}
export default Button;