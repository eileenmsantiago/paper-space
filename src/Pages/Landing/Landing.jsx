import React from 'react';
import withAnon from '../../hoc/withAnon';
import { useHistory } from 'react-router-dom';
import Heading from '../../components/Heading/Heading';
import PSContainer from '../../components/PSContainer/PSContainer';
import Icon from '../../components/Icon/Icon';
// import { Button } from 'react-bootstrap';
import Button from '../../components/Button/Button';

const Landing = (props) => {

    const history = useHistory();
    return (
        <PSContainer>
            <div className="landing">
                <div className="landing__header">  
                    <div className="landing__header-icon">
                        <Icon name="logo"/>
                    </div>
                    <div className="landing__header-heading">
                        <Heading level="h1">
                            Start journaling with PaperSpace now.
                        </Heading>
                    </div>
                </div>
                <div className="landing__content">
                    <img src="./assets/Images/onboarding.svg" alt="colorful illustrations"></img>
                </div>
                <div className="landing__cta">
                    <Button
                        onClick={() => {
                            history.push("/register");
                        }} 
                    >
                        CREATE AN ACCOUNT
                    </Button>
                    <Button className="btn btn-secondary"
                        onClick={() => {
                                history.push("/login");
                            }}>
                        SIGN IN
                    </Button>
                </div>
            </div>
        </PSContainer>
    )
}

export default withAnon(Landing);
