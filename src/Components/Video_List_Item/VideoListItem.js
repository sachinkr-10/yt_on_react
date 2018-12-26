import React from 'react'

const VideoListItem = (props)=>{

   
    return(
        <div class="card" style={{margin: "10px"}} onClick={()=>{props.onVideoSelect(props.video)}}>
  <img class="card-img-top" src={props.video.snippet.thumbnails.default.url}  />
  <div class="card-body" style={{padding : '5px'}}>
    <h6 class="card-title" style={{marginBottom : '2px', padding:'4px'}}>{props.video.snippet.title}</h6>
    <p class="card-text" style={{ marginBottom : '5px'}}>{props.video.snippet.channelTitle}</p>
  </div>
</div>
    )
}

export default VideoListItem