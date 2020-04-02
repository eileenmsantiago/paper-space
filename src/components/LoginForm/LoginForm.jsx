import React, { useState } from 'react';
import firebase from "../../config/firebaseConfig";
import { Button } from 'react-bootstrap';
import Text from '../Text/Text';

function LoginForm(props) {

    const { history } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    async function onLogin() {
        try {
            await firebase.login(email, password);
            history.replace("/dashboard");
        } catch (err) {
            alert ("Invalid Login");
        }
    }
    
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
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
                    className="button" 
                    type="submit" 
                    onClick={onLogin}
                >
					Sign in
                </Button>
                <div className="second-cta"> 
                    <Text size ="tab" color="light-black">
                        New user? <a href="/register" onClick={onLogin}> <strong>Create an account</strong></a>
                    </Text>
                </div>
            </form>
        </div>
    );
}
export default LoginForm;
