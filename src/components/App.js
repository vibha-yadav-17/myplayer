import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {store, stateMapper} from '../store/store.js'
import Videos from './Videos.js';
import Menu from './Menu.js';
import Trending from './Trending.js';
import Search from './Serach.js';


class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div className="container">

                <div className ="row">

                    <div className="col-md-12">
                        <h2>trending Videos</h2>
                        <hr/>

                        <Videos/>
                    </div>
                </div>
            </div>
            </Provider>
        );
    }
}

export default App;