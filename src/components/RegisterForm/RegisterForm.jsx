import React, { useState } from 'react';
import firebase from "../../config/firebaseConfig";
import { Button } from 'react-bootstrap';
import Text from '../Text/Text';

function RegisterForm(props) {

    const { history } = props;
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister();
    };

    async function onRegister() {
        try {
            await firebase.register(username, email, password);
            history.replace("/dashboard");
        } catch (err) {
            console.log(err.message);
        }
    }
    
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input

                    type="text"
                    placeholder="Email"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="terms-conditions">
                    <Text size="labels" weight="light" color="grey">
                        By continuing, you agree to Paperspace’s <a href="/login">Terms & Conditions</a> and <a href="/login">Private Policy </a> 
                    </Text>
                </div>
                <Button className="form-container__button" type="submit" onClick={onRegister}>
					Register
                </Button>
                <div className="second-cta"> 
                    <Text size ="tab" color="light-black">
                        Already have an account? <a href="/login"> <strong>Sign in</strong></a>
                    </Text>
                </div>
            </form>
        </div>
    );
}
export default RegisterForm;
