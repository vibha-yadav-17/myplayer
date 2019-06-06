import {fetchVideos} from '../api/youtube.js';
import {store} from "../store.js";
function videosReducer(videos=[], action){
    if(action.type == "FETCH_VIDEOS"){

        fetchVideos( store,action);
        return videos;
    
         
    }
    if (action.type === "CLEAR_VIDEOS"){
        return [];
    }

    if(action.type == "VIDEOS_LOADED"){
        videos = action.videos;
    }
    return videos;
}


export default videosReducer;
