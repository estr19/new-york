import React, { useState } from "react";
import VideoControlsApr from "./VideoControlsApr";

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
    <div className="audio-player">
      <iframe className='slide' width='100%' height='400px' src={link} title="YouTube video player" controlls='0'
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope;"
      ></iframe>
      <VideoControlsApr
        onNextClick={toNextTrack}
        onPrevClick={toPreviousTrack}
      />
    </div>
  );
};

export default VideoPlayerApr;