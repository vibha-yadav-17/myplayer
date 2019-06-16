import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin} from 'react-google-login';


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.googleCallback = this.googleCallback.bind(this);
    }

    googleCallback(response){
        if(!response || !response.accessToken){
            alert("sorry, Google sigin has failed. Please try again")
            return;
        }
        let user = {
            token: response.accessToken,
            name: response.profileObj.name
        };

        localStorage.setItem("user" , JSON.stringify(user)); 

        {/*window.location.href = "/";*/}
        this.props.history.push("/app");
    }

  
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className=".col-md-4 offset-md-4">
                        <h2 className="text-danger">Login using Google</h2>
                        <hr/>
                        <GoogleLogin 
                            clientId="646131656182-hklrnim2fdlv6sit5k5gk9hrpqrghn6g.apps.googleusercontent.com"
                            onSuccess={this.googleCallback}
                            onFailure ={this.googleCallback}
                            buttonText="Login"
                        />

                    </div>

                </div>

            </div>
        );
    }
}


export default Login;



