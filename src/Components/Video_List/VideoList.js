import React from 'react'
import VideoListItem from '../Video_List_Item/VideoListItem' 

const VideoList = (props)=>{

    var videos = props.videos
    return(
        <ul className="list-group col-md-3">
            <li className="list-group-item" style={{padding :'5px'}}>
            {videos.map((video)=>{
                return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>
            })}
            </li>
        </ul>
    )
}

export default VideoList