import React, { useState } from 'react';
import firebase from "../../config/firebaseConfig";
import { Button } from 'react-bootstrap';
import Text from '../Text/Text';
import { useHistory } from 'react-router-dom';

function LoginForm(props) {

    const { history } = props;
    // const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError("Email is required");
            return;
        }
        if (!password) {
            setError("Password is required");
            return;
        }
        onLogin();
    };

    async function onLogin() {
        console.log('Logging into User`s PaperSpace... ');
        try {
            const login = await firebase.login(email, password);
            if(login) {
                history.replace("/dashboard");
            }
        } catch(err) {
            setError(err.message);
            console.log(err.message);
        }
    }
    
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
                className="Button" 
                type="submit" 
                onClick={onLogin}
            >
                Sign in
            </Button>
            <div className="forgot-password">
                <Text size="labels" weight="light" color="grey">
                    <a href="/login">Forgot your password?</a> 
                </Text>
            </div>
            <div className="error">
                <Text size ="tab" color="error">{error}</Text>
            </div>
            <div className="second-cta"> 
                <Text size ="tab" color="light-black">
                    New user? <a href="/register" onClick={onLogin}> <strong>Create an account</strong></a>
                </Text>
            </div>
        </form>
    );
}
export default LoginForm;

