import React from 'react'
import VideoListItem from '../Video_List_Item/VideoListItem' 

const VideoList = (props)=>{

    var videos = props.videos
    return(
        <ul className="list-group col-md-3">
            
            {videos.map((video)=>{
                return <li className="list-group-item-action list-group-item-light" style={{padding :'5px'}}>
                <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>
                </li>
            })}
            
        </ul>
    )
}

export default VideoList