import React from 'react'

const Heading = (props) => {

    // Default style to level value 
    let style;
    if (!props.style) {
        style = props.level
    } else {
        style = props.style
    }

    // Assign level to a variable with a capital letter (React restrictions)
    const Tag = props.level;

    // Determine which class to use based on style
    const styleClass = `heading--type-${style}`;
    
    return (
        <Tag className={`${props.className} ${styleClass}`}>
            {props.children}
        </Tag>
    )
}

Heading.defaultProps = {
    level: "h2"
};

export default Heading;