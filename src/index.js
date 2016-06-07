//Giving this file access to React from the modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyApNaJCnmzsQjiRnmBLFvDMSFvn5X0tjwE';



// Create a new component. This component shoud produce some HTML

class App extends Component { //this class's state has searched video info
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Starbucks');
  }


  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // if the key and the variable's names are the same, this is possible
          // this.setState({videos : videos }) // the back var can be anything
          // it can be changed to this.setStage({videos});
    });

  }


  render() {
    return (
     <div>
      <SearchBar onSearchTermChange = {(term) => this.videoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect = {(selectedVideo) => this.setState({selectedVideo}) }
        videos={this.state.videos} />
     </div>
   );
  }

}

// Take this component's generated HTML
// and put it on the page (int the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
