import MYTUBE_CONFIG from "../../config.js";

function fetchVideos(store, action) {
  if (action.videoType == "trending") {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY
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

  } else if (action.videoType == "search") {
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


export {fetchVideos};
