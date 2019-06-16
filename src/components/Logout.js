import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';

class Logout extends React.Component{
    render(){
        localStorage.removeItem("user")
        return(

            <div>
                Logging you out... please wait.....
                <Redirect to="/login" />
            </div>
        );
    }
}

export default Logout;