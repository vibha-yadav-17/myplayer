import React from 'react';
import {connect} from 'react-redux';
import {store, stateMapper} from '../store/store.js';
import { classDeclaration } from '@babel/types';


class Videos extends React.Component{
    componentDidMount(){
        store.dispatch({
            type: "FETCH_VIDEOS"
        });
    }
    renderVideos(){
        return this.props.videos.map(v =>{
            return(
                <div key={v.id} className="col-md-4">
                <a href={`https://youtube.com/watch?v=${v.id}`}>
                  <img
                    className="img-fluid"
                    src={v.snippet.thumbnails.high.url}
                    alt={v.snippet.title}
                  />
                </a>
                <small>
                  {v.snippet.title} by <em>{v.snippet.channelTitle}</em>
                </small>
              </div>
            );
          });
        }
    

    render(){
        return(
            <div className="row">
                {this.renderVideos()}
            </div>
        )
    }
let Videos = connect(stateMapper)(VideosComponent);

export default Videos;