// AudioPlayer.js
import React, { useState, useEffect, useRef } from "react";

const AudioPlayer = ({ currentSong }) => {
  console.log(currentSong, "sgfd");
  const [audioPlayer, setAudioPlayer] = useState(null);
  const audioPlayerRef = useRef(null);
  useEffect(() => {
    const savedPlaybackTime = localStorage.getItem("playbackTime");
    if (audioPlayerRef.current && savedPlaybackTime) {
      audioPlayerRef.current.currentTime = parseFloat(savedPlaybackTime);
      audioPlayerRef.current.play();
    }
  }, []);
  const handleAudioLoad = (audio) => {
    console.log(audio);
    setAudioPlayer(audio);
  };

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
        src={currentSong}
        ref={audioPlayerRef}
        onTimeUpdate={handleAudioTimeUpdate}
      >
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default AudioPlayer;
