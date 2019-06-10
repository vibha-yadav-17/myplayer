import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <div>
                <h2>My Tube</h2>
                <h5></h5>
                <hr/>

                <ul className="list-group">

                    
                    <li className="list-group-item list-group-item-dark">
                        <Link to="/"></Link>Menu</li>
                    <li className="list-group-item list-group-item-dark"> 
                    <Link to="/trending">Trending</Link></li>
                    <li className="list-group-item list-group-item-dark">
                         <Link to="/search">Search</Link></li>
                    <li className="list-group-item list-group-item-dark">Watch later</li>
                    <li className="list-group-item list-group-item-dark">Liked Videos</li>
                   
                </ul>

            </div>
            
        );
    }
}

export default Menu;
