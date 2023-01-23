import React from "react";
import VideoPlayerSep from "./VideoPlayerSep";
import { tracksSep } from  './tracksSep';


function Svid() {
  return (
    <div className="p-4 text-center">
      <p className="h1 p-5"><span className="opaque">US Open Videos, September 7-8</span></p>
      <div className='d-flex p-4 flex-row flex-wrap justify-content-evenly align-items-center'>
      <VideoPlayerSep tracksSep={tracksSep} />
      </div>
    </div>
  );
}

export default Svid;