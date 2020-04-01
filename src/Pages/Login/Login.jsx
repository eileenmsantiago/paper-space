import React from 'react';
import PSContainer from '../../ui/PSContainer/PSContainer';
import Header from '../../ui/Header/Header';
import Icon from '../../ui/Icon/Icon';

const Login = (props) => {
    return (
        <div className="login">
            <PSContainer>
                <Icon name="logo"/>
                <Header
                    title="Welcome Back"
                />

                
            </PSContainer>
        </div>
        <h1>Login</h1>
    )
}
export default Login;
