import React from 'react';
import {connect} from 'react-redux';

import {store, stateMapper} from '../store/store.js';


class VideoPlayerComponent extends React.Component{

    componentDidMount() {
        this.props.dispatch({
          type: "FETCH_VIDEO_DATA",
          videoId: this.props.match.params.videoId
        });
      }

      
        rednerTitle() {
            if (!this.props.currentPlayerVideo.snippet) {
              return "Loading...";
            } else {
              return this.props.currentPlayerVideo.snippet.title;
            }
          }
      
    render(){
        return (
            <div> 
                <h2 className="text-danger">{this.rednerTitle()}</h2>
                <hr/>

                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src=
                        {`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`}

                        allowFullScreen></iframe>
                    </div>
                </div>
             

        );
    }
}


let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);
 
export default VideoPlayer;