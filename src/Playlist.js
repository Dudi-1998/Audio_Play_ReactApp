// src/components/Playlist.js
import React from "react";

const Playlist = ({ songs, onSongSelect }) => {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => onSongSelect(song.url)}>
            {song.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
