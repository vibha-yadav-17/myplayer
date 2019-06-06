function fetchVideos( store, videoType){
    fetch("https://www.googleapis.com/youtube/v3/videos?key=part=snippet&chart=mostPopular")
        .then(function(data){
            return data.json();
        })
        .then(function(response){
            store.dispatch({
                type: "VIDEOS_LOADED",
                videos: response.items
            })
            
        })
        .catch(function(err){
            console.log("fetch error ==>", err);
        });
    
}

export{fetchVideos}; 
