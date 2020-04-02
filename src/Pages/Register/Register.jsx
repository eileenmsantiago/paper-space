import React from 'react';
import PSContainer from '../../components/PSContainer/PSContainer';
import Header from '../../components/Header/Header';
import Icon from '../../components/Icon/Icon';
import Heading from '../../components/Heading/Heading';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register = (props) => {

    const { contentText } = props;
    return (
        <PSContainer>
            <div className="register">
                <div className="register__header">
                    <Header />
                    <div className="register__header-icon">
                        <Icon name="logo"/>
                    </div>
                    <div className="register__header-heading">
                        Create an account
                    </div>
                </div>
                <RegisterForm />
            </div>
        </PSContainer>
    )
}
export default Register;
