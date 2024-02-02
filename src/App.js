// App.js
import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import Playlist from "./Playlist";
import Visualizer from "./Visualizer";
import "./styles.css";

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  useEffect(() => {
    const storedPlaylist = JSON.parse(localStorage.getItem("playlist"));
    if (storedPlaylist) {
      setPlaylist(storedPlaylist);
    }
  }, []);

  // const handleFileChange = (e) => {
  //   const files = e.target.files;
  //   const updatedPlaylist = [];

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     const fileURL = URL.createObjectURL(file);

  //     // Use the original file name
  //     const originalFileName = file.name;

  //     // Update the playlist with the original file URL and name
  //     updatedPlaylist.push({ url: fileURL, name: originalFileName });
  //   }

  //   setPlaylist(updatedPlaylist);
  //   localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
  // };
  const handleFileChange = (e) => {
    const files = e.target.files;
    const newPlaylist = Array.from(files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setPlaylist(newPlaylist);
    localStorage.setItem("playlist", JSON.stringify(newPlaylist));
  };
  const playSong = (url) => {
    setCurrentSong(url);
  };

  return (
    <div className="app">
      <input type="file" accept=".mp3" onChange={handleFileChange} multiple />
      <div className="multimedia">
        <Playlist songs={playlist} onSongSelect={(url) => playSong(url)} />
        {currentSong && (
          <div className="player">
            <Visualizer />
            <AudioPlayer currentSong={currentSong} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
