import React, {useState, useEffect} from 'react';
import user from '../api/user';
import { useHistory } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const withAuth = (AuthComponent) => (props) => {
    const history = useHistory();
    // Initial states 
    const [isFetching, setIsFetching] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    // i.e side effect
    useEffect(() => {

        user.onAuthChange(user => {
            console.log(user);
            if(user) {
                setIsAuthorized(true);
                setIsFetching(false)
            } else {
                setIsFetching(false);
                    history.push("/login");
            }
        });
    },[]);

    if(isFetching) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        if(isAuthorized) {
            return (
                <div>
                    <AuthComponent {...props}/>
                    <Nav />
                </div>
            )
        } else {
            return null;
        }
    }
};

export default withAuth;