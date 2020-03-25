import React from 'react';

const TapBar = (props) => {
    return (
        <div className="tap-bar">
            <div className="tap-bar__wrapper">
                <div className="tap-bar__container">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default TapBar;
