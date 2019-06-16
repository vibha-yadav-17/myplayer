import React from 'react';


class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            name: ""
        }

    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        user = JSON.parse(user);

        this.setState({
            name: user.name
        })
    }
        
    render() {
        return (
            <div>
                <h2 className="text-danger">Your Profile</h2>
                <hr/>
                you are logged in as <strong>{this.state.name}</strong>
            </div>
        )

    }
}


export default Profile;