import React from 'react';
import Heading from '../../components/Heading/Heading';
import PSContainer from '../../components/PSContainer/PSContainer';
import { Button } from 'react-bootstrap';

const Landing = (props) => {
    return (
        <PSContainer>
            <div className="landing">
                <div className="landing__header">
                    <img src = "psLogo.svg"/>
                    <Heading level="h1"> LANDING INFO </Heading>
                </div>
                <div className="landing__content">
                    <img src="/assets/Images/Landing-1.svg" alt="colorful illustrations"></img>
                </div>
                <div className="landing__cta">
                    <Button>CREATE AN ACCOUNT</Button>
                     <Button>SIGN IN</Button>
                </div>
            </div>
        </PSContainer>
    )
}

export default Landing;
