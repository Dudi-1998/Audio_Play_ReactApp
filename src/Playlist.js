// src/components/Playlist.js
import React from "react";

const Playlist = ({ songs, onSongSelect, activesong }) => {
  
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => onSongSelect(index)} style={{backgroundColor : index ===activesong ? '#ff7e67' :'transparent'}}>
            {song.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
