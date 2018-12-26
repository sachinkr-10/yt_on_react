import React from 'react'
import VideoListItem from '../Video_List_Item/VideoListItem' 

const VideoList = (props)=>{

    console.log(props)
    var videos = props.videos
    console.log(videos)
    return(
        <ul className="list-group col-md-3">
            <li className="list-group-item" style={{padding :'5px'}}>
            {videos.map((video)=>{
                return <VideoListItem key={video.etag} video={video}/>
            })}
            </li>
        </ul>
    )
}

export default VideoList