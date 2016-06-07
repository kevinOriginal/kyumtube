import React from 'react';

const VideoDetail = (props) => {
  const video = props.video;
  if(!video) {
    return <div>Loading.. Please Wait</div>
    //Don't use it too much
  }

  const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + videoId;
  // we can use template strings(ES6 magic)
  // const url = url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className = "video-detail col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
