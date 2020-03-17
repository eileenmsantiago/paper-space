import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{background: props.colorHex}}>
            {props.children}
        </div>
    )
}

export default Card;