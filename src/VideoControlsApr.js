import React from "react";

const VideoControlsApr = ({
  onPrevClick,
  onNextClick
}) => (
  <div className="audio-controls">
    <button
      onClick={onPrevClick}
      className="prev"
    >
      <span className="material-symbols-outlined">skip_previous</span>
    </button>
    <button
      onClick={onNextClick}
      className="next"
    >
      <span className="material-symbols-outlined">skip_next</span>
    </button>
  </div>
);

export default VideoControlsApr;
