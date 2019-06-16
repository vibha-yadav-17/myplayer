import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <div>
                <h2 className="text-danger">My Tube
                <span className="oi oi-play-circle"></span>
                </h2>
                
                <hr/>

                <ul className="list-group">

                    
                    <li className="list-group-item list-group-item-dark">
                        <Link to="/"></Link>Menu</li>
                    <li className="list-group-item list-group-item-dark"> 
                    
                    <Link to="/app">Trending</Link></li>

                    <li className="list-group-item list-group-item-dark">
                         <Link to="/app/search">Search</Link></li>
                    <li className="list-group-item list-group-item-dark"> 
                    <Link to="/app/profile">Profile</Link></li>
                    <li className="list-group-item list-group-item-dark"> 
                    <Link to="/app/logout">Logout</Link></li>
                   
                </ul>

            </div>
            
        );
    }
}

export default Menu;
