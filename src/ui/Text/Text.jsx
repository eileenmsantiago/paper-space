import React from 'react'

const Text = (props) => {
    return <span
    
    className={`
        body-text--size-${props.size}
        body-text--weight-${props.weight}
        body-text--color-${props.color}
    `}>
        {props.children}
    </span>;
}

export default Text;