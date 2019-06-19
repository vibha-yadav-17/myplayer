import MYTUBE_CONFIG from "../../config.js";

function getUserToken(){
  let user = localStorage.getItem("user");

  if(!user){
    return null;
  }
  user = JSON.parse(user);
  return user.token;
}

function fetchVideos(store, action) {
  if (action.videoType === "trending") {
      
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY
      }&chart=mostPopular&maxResults=30`
    )
        .then(function(data) {
            return data.json();
        })

        .then(function(response) {
            console.log(response);
            store.dispatch({
            type: "VIDEOS_LOADED",
            videos: response.items
            });
        })

        .catch(function(err) {
            console.log("fetch error ==>", err);
        });

  } else if (action.videoType === "search") {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY
    }&q=${action.query}&maxResults=30`;

        fetch(url)
        .then(function(data) {
            return data.json();
        })

        .then(function(response) {
            console.log(response);
            store.dispatch({
            type: "VIDEOS_LOADED",
            videos: response.items
            });
        })

        .catch(function(err) {
            console.log("fetch error ==>", err);
        });
    }
}

function fetchOneVideo(store, action) {
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
      action.videoId
    }&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`;
    fetch(url)
      .then(function(data) {
        return data.json();
      })
      .then(function(response) {
        store.dispatch({
          type: "VIDEO_DATA_LOADED",
          videoData: response.items[0]
        });
      })
      .catch(function(err) {
        console.log("fetch error ==>", err);
      });
  }

  function fetchVideoComments(store, action) {
    let url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${
      action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`;
      console.log(url)
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
      
        store.dispatch({
          type: "VIDEO_COMMENTS_LOADED",
          comments: data.items,
        })
      })
      .catch(function(err) {
        console.log("fetch error ==>", err);
      });
  }

  function fetchPlaylists(store, action) {
    let url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=20`;
    let token = getUserToken();
    if(!token){
      return store;

    } 
    console.log(token);
    fetch(url, {
      "headers": {
        "Authorization" : `Bearer ${token}`
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
      
        store.dispatch({
          type: "PLAYLISTS_LOADED",
          playlists: [data.items],
        })
      })

      .catch(function(err) {
        console.log("fetch error ==>", err);
      });
  }


export { fetchVideos, fetchOneVideo, fetchVideoComments, fetchPlaylists};
