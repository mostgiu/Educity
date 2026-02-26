import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4";
function VideoPlayer({ playState, setPlayState }) {
    const player = useRef(null)
    const closeLayer = (e)=>{
        if(e.target=== player.current){
            setPlayState(false)

        }
    }
  return (
    <div className= {`Video-Player ${playState?'':'hide'}`} ref={player} onClick={closeLayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;
