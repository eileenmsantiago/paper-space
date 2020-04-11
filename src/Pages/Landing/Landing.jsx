import React from 'react';
import Heading from '../../components/Heading/Heading';
import PSContainer from '../../components/PSContainer/PSContainer';
import Button from '../../components/Button/Button';


const Landing = (props) => {
    return (
        <PSContainer>
            <div className="landing">
                <div className="landing__header">
                    <Heading level="h1"> LANDING </Heading>
                </div>
                <div className="landing__content">
                    <img src="/assets/Images/Landing-1.svg" alt="colorful illustrations"></img>
                </div>
                <div className="landing__cta">
                    <Button></Button>
                </div>
            </div>
        </PSContainer>
    )
}

export default Landing;