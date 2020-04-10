import React from 'react'

const Text = (props) => {

    const { children, size, weight, color, className } = props;
    return <span
    
    className={`
        body-text
        body-text--size-${size}
        body-text--weight-${weight}
        body-text--color-${color}
        ${className ? className : ""}
    `}>
        {children}
    </span>;
}

export default Text;