import React from 'react';
import Videos from './Videos.js';
import {stateMapper} from '../store/store.js';
import {connect} from 'react-redux';

class TrendingComponent extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_VIDEOS",
            videoType:"trending"
        })
    }

    render() {
        return (
            <div>
                <h2>Trending Videos</h2>
                <br/>
                
                <hr />
                <Videos />
            </div>

        )

    }

}

let Trending = connect(stateMapper)(TrendingComponent);


export default Trending;