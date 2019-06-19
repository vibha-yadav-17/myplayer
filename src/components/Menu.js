import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store.js'

class MenuComponent extends React.Component{

    componentDidMount(){
        this.props.dispatch({
            type: "FETCH_PLAYLIST"
        });
    }
    render(){
        return(
            <div>
                <h2 className="text-danger">
                My Tube<span className="oi oi-play-circle"></span>
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
                        My Playlists</li>

                    {this.props.playlists && this.props.playlists.map(p => {
                            return(
                                <li key={p.etag} className="list-group-item list-group-item-dark">
                                <Link to={`/app/playlist/${p.id}`}></Link> </li>
                            );
                        })}

                    <li className="list-group-item list-group-item-dark">
                         <Link to="/app/playlists/create"><span className="oi oi-plus" title="icon name"
                          area-hidden= "true"></span>Create</Link></li>    
                    <li className="list-group-item list-group-item-dark">
                         <Link to="/app/search">My Account</Link></li>

                    <li className="list-group-item list-group-item-dark"> 
                    <Link to="/app/profile">Profile</Link></li>
                    <li className="list-group-item list-group-item-dark"> 
                    <Link to="/app/logout">Logout</Link></li>
                   
                </ul>

            </div>
            
        );
    }
}

let Menu = connect(stateMapper)(MenuComponent);

export default Menu;
