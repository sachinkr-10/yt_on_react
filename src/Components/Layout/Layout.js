import React, {Component} from 'react'
import YTSearch from 'youtube-api-search'
import config_dev from '../../config/config_dev'
import config_prod from '../../config/config_prod'
import SearchBox from '../SearchBox/SearchBox' 
import VideoList from '../Video_List/VideoList'
import VideoPlayer from '../Video_player/VideoPlayer'

class Layout extends Component{
    constructor(props){
        super(props)
        this.state = {
            videos : [],
            searchTerm : 'Mercedes AMG SLS',
            selectedVideo : null
        }

        this.loadVideo();
    }

    loadVideo = ()=>{
        YTSearch({key : config_dev.API_KEY || config_prod.API_KEY,
            term : this.state.searchTerm},
            (videos)=>{
                this.setState({
                    videos : videos,
                    selectedVideo : videos[0]
                })
            })
    }

    changeSelectedVideo = (video)=>{
        this.setState({selectedVideo :video})
    }

    changeSearchTerm = (term)=>{
        this.setState({searchTerm : term},()=>{this.loadVideo()})
    }
    render(){

        return(
            <div className='row'>
            <SearchBox onSearch={this.changeSearchTerm}/>
            {this.state.selectedVideo !== null ? <VideoPlayer default={this.state.selectedVideo}/> : <div>Loading...</div>}
            <VideoList 
            onVideoSelect={this.changeSelectedVideo} 
            videos={this.state.videos}/>
            </div>
        )
    }
}

export default Layout