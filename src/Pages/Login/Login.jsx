import React from 'react';
import PSContainer from '../../components/PSContainer/PSContainer';
import Header from '../../components/Header/Header';
import Icon from '../../components/Icon/Icon';
import Heading from '../../components/Heading/Heading';
import LoginForm from '../../components/LoginForm/LoginForm';
import withAnon from '../../hoc/withAnon';

const Login = (props) => {
    return (
        <PSContainer>
            <div className="login">
                <div className="login__header">
                    <Header/>
                    <div className="login__header-icon">
                        <Icon name="logo"/>
                    </div>
                    <div className="login__header-heading">
                        <Heading level="h1"> Welcome back</Heading>
                    </div>
                </div>
                <div className="login__form-container">
                    <LoginForm />
                </div>
            </div>
        </PSContainer>
    )
}
export default withAnon(Login);
