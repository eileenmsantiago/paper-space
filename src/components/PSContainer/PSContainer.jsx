import React from 'react'

const PSContainer = (props) => {
    return (
        <div className="ps">
            <div className="ps__container">
                {props.children}
            </div>
        </div>
    ) 
}
export default PSContainer;