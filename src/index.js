//import required libraries/files
import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
const API_KEY = "AIzaSyDcAzZGN9K7vNTLrA5eNiIPey-ZlRtO9qw";

//Fetching data should be done in Root component. 
//DOWNWARD DATAFLOW


//Create a component ES6 , arrow function (=>)
class App extends Component{
    constructor(props){
      super(props);
      this.state={
        videos : [],
        selectedVideo : null
      };
      this.videoSearch('react js videos');
    }
    videoSearch(term){
      YTSearch({ key: API_KEY, term: term}, data=>{
        console.log(data);
        this.setState({
          videos : data,
          selectedVideo : data[0]
        });
      });
    }
    render(){
      const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
      return(
        <div>
          <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      );
    }
}
//Render the component in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
