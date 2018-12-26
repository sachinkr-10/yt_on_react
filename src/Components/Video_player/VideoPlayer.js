import React from 'react'

const VideoPlayer = (props)=>{
    
    var video = props.default
    var videoId = video.id.videoId
    var src= 'https://www.youtube.com/embed/' + videoId
    return(
        <div className='col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
            <iframe class="embed-responsive-item" src={src}></iframe>
        </div>
        <div className='card' style={{marginTop : '10px'}}>
            <h2 className='card-title' style={{paddingLeft : '10px'}}>{video.snippet.title}</h2>
            <p className="card-text" style={{paddingLeft : '10px'}}>{video.snippet.channelTitle}</p>
            <p>{video.snippet.description}</p>
        </div>
        </div>
    )
}

export default  VideoPlayer