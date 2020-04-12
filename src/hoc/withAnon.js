import React, {useState, useEffect} from 'react';
import user from '../api/user';
import { useHistory } from 'react-router-dom';

const withAnon = (AnonComponent) => (props) => {
    const history = useHistory();
    const [isFetching, setIsFetching] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        user.onAuthChange(user => {
            if(user) {
                setIsAuthorized(false);
                setIsFetching(true);
                history.push("/dashboard");
            } else {
                setIsFetching(false);
            }
        })
    },[])

        if(isFetching) {
            return (
                <div>Loading...</div>
            )
        } else {
            if(!isAuthorized) {
                return (
                    <AnonComponent/>
                )
            } else {
                return null;
            }
        }
}

export default withAnon;