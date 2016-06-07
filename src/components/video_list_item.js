import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  // this is to get access to the video info
  // we passed in the video as a property 'video'
  /* or we can just write (ES6 syntax)
    const VideoListItem = ({video, onVideoSelect}) => {
    N-O-T-H-I-N-G
    }
  */
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>


    </li>
  );
};


export default VideoListItem;
