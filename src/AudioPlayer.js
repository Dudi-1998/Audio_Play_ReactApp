// AudioPlayer.js
import React, { useState, useEffect, useRef } from "react";

const AudioPlayer = ({ src, handleAudioEnded }) => {
  const [audioPlayer, setAudioPlayer] = useState(null);
  const audioPlayerRef = useRef(null);
  useEffect(() => {
    const savedPlaybackTime = localStorage.getItem("playbackTime");
    if (audioPlayerRef.current && savedPlaybackTime) {
      audioPlayerRef.current.currentTime = parseFloat(savedPlaybackTime);
      audioPlayerRef.current.play();
    }
  }, []);


  const handleAudioTimeUpdate = () => {
    if (audioPlayerRef.current) {
      localStorage.setItem("playbackTime", audioPlayerRef.current.currentTime);
    }
  };
  return (
    <div className="audio-player">
      <audio
        controls
        autoPlay
        src={src}
        ref={audioPlayerRef}
        onTimeUpdate={handleAudioTimeUpdate}
        onEnded={handleAudioEnded}
      >
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default AudioPlayer;
