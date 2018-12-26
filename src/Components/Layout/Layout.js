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
            videos : []
        }

        YTSearch({key : config_dev.API_KEY || config_prod.API_KEY,
            term : 'Naezy'},
            (videos)=>{
                this.setState({videos})
            })
    }

    render(){

        return(
            <div className='row'>
            <SearchBox/>
            {this.state.videos.length !== 0 ? <VideoPlayer default={this.state.videos[0]}/> : <div>Loading...</div>}
            <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default Layout