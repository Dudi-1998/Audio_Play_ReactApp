// App.js
import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import Playlist from "./Playlist";
import Visualizer from "./Visualizer";
import "./styles.css";

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  useEffect(() => {
    const storedPlaylist = JSON.parse(localStorage.getItem("playlist"));
    if (storedPlaylist) {
      setPlaylist(storedPlaylist);
    }
  }, []);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const newPlaylist = Array.from(files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setPlaylist(newPlaylist);
    localStorage.setItem("playlist", JSON.stringify(newPlaylist));
  };
  const playSong = (index) => {
    setCurrentSongIndex(index);
  };
  const handleAudioEnded = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  return (
    <div className="app">
      <input type="file" accept=".mp3" onChange={handleFileChange} multiple />
      <div className="multimedia">
        <Playlist songs={playlist} onSongSelect={(index) => playSong(index)} activesong={currentSongIndex}/>
        {currentSongIndex !== null && (
          <div className="player">
            <Visualizer />
            <AudioPlayer src={playlist[currentSongIndex].url} handleAudioEnded={handleAudioEnded}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
