import React, { useState } from 'react';
import firebase from "../../config/firebaseConfig";
import { Button } from 'react-bootstrap';
import Text from '../Text/Text';

function RegisterForm(props) {

    const { history } = props;
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setError("Name is required");
            return;
        }
        if (!email) {
            setError("Invalid Email input");
            return;
        }
        if (!password) {
            setError("Invalid password input");
            return;
        }
        onRegister();
    };

    async function onRegister() {
        console.log('Registering new PaperSpace User...');
        try {
            await firebase.register(name, email, password);
            history.replace("/dashboard");
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    }
    
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                id="name"
                type="text"
                placeholder="name"
                value={name}
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
            <Button className="form-container__button" type="submit">
                Register
            </Button>
            <Text size ="tab" color="error">{error}</Text>
            <div className="second-cta"> 
                <Text size ="tab" color="light-black">
                    Already have an account? <a href="/login"> <strong>Sign in</strong></a>
                </Text>
            </div>
        </form>
    );
}
export default RegisterForm;
