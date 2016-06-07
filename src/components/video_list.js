import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const showItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key = {video.etag}
      video={video} />
    );
}); //videoItems becomes an array of <VideoListItem>

  return (//className is the same as class in css

    <ul className="col-md-4 list group">
      {showItems}
    </ul>

  );
}


export default VideoList;
