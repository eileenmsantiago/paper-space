import React from 'react';
import LogoAnimation from '../../components/LogoAnimation/LogoAnimation';
import {withRouter} from "react-router-dom";


class Splash extends React.Component{
    constructor(props){
        super(props);
    };
     componentDidMount() {
        setTimeout(()=> {
            this.props.history.push('/onboarding');
        },3000
        )
      }

    render(){
        return(
            <div className="splash">
            <div className="splash__logo">
                <LogoAnimation />
            </div>
        </div>   
        );
    }
};


export default withRouter(Splash);
