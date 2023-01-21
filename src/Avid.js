import React from "react";
import VideoPlayerApr from "./VideoPlayerApr";
import { tracksApr } from  './tracksApr';

function Avid() {
  return (
    <div className="p-4 text-center">
      <p className="h1 p-5"><span className="opaque">Phish Videos, April 20-24</span></p>
      <div className='d-flex p-4 flex-row flex-wrap justify-content-evenly align-items-center'>
        <VideoPlayerApr tracksApr={tracksApr} />
      </div>
    </div>
  );
}

export default Avid;
