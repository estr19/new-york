import React, { useState } from "react";

const VideoPlayerApr = ({ tracksApr }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const { link } = tracksApr[trackIndex];

  const toNextTrack = () => {
    if (trackIndex < tracksApr.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const toPreviousTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracksApr.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  return (
    <div className="d-flex opaque">
      <button onClick={toPreviousTrack} >
        <span className="material-symbols-outlined">skip_previous</span>
      </button>
      <div className="video-player">
        <iframe className='slide' width='100%' height='400px' src={link} title="YouTube video player" controlls='0'
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope;"
        ></iframe>
      </div>
      <button onClick={toNextTrack} >
        <span className="material-symbols-outlined">skip_next</span>
      </button>
    </div>
  );
};

export default VideoPlayerApr;