import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { promo } from '../../constants';
import './Intro.css';

const Intro = () => {

  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    
    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  window.onload = function() {
    document.getElementById("promoVideo").volume = 0.02;
  }

  return(
  <div>
    <div className="app__video">
      <video 
        id="promoVideo"
        ref={vidRef}
        src={promo}
        type="video/mp4"
        loop
        controls={false}       
        // muted
      />
      <div className="app__video-overlay flex__center" onClick={handleVideo}>
        <div className="app__video-overlay_circle flex__center"
        >
          {playVideo
          ? <BsPauseFill color="#fff" fontSize={30}/> 
          : <BsFillPlayFill color="#fff" fontSize={30}/>
          }
        </div> 
      </div>
    </div>
  </div>
  )

};

export default Intro;
