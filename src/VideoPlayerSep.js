import React, { useState } from "react";

const VideoPlayerSep = ({ tracksSep }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const { link } = tracksSep[trackIndex];

  const toNextTrack = () => {
    if (trackIndex < tracksSep.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const toPreviousTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracksSep.length - 1);
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

export default VideoPlayerSep;