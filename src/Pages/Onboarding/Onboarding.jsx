import React from 'react';
import Heading from '../../components/Heading/Heading';
import PSContainer from '../../components/PSContainer/PSContainer';
import Icon from '../../components/Icon/Icon';
import { Button } from 'react-bootstrap';
import Text from '../../components/Text/Text';


const Onboarding = (props) => {
    return (
        <PSContainer>
            <div className="onboarding">
                <div className="onboarding__header">  
                    <div className="onboarding__header-icon">
                        <Icon name="logo"/>
                    </div>
                    <div className="onboarding__header-heading">
                        <Heading level="h1">
                            Welcome to PaperSpace
                        </Heading>
                    </div>
                </div>
                <div className="onboarding__content">
                    <Text className="content-header" size="large" color="light-grey">
                        PaperSpace is a place for you to write freely.
                    </Text>
                    <br></br>
                    <Text size="large" color="light-grey">
                        Every week you will have a card with different colors based on your mood from your written content.  
                        <br></br>
                        We also offer prompt cards to guide you in your writing journey.
                    </Text>
                </div>
                <div className="onboarding__cta">
                <Button
                    onClick={() => {
						props.history.push("/landing");
					}} 
                    >GET STARTED</Button>
                </div>
            </div>
        </PSContainer>
    )
}

export default Onboarding;
