import React, { useState } from 'react';
// import firebase from "../../config/firebaseConfig";
import firebase from "../../config/firebaseConfig";
import { Button } from 'react-bootstrap';
import Text from '../Text/Text';
import { useHistory } from 'react-router-dom';

function LoginForm(props) {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    async function onLogin() {
        try {
            const login = await firebase.login(email, password);
            if(login) {
                history.replace("/dashboard");
            }
        } catch(e) {
            console.log(e);
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
                    <a href="/login">Forget your password?</a> 
                </Text>
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

