import album from '../assets/album.png';
import React, { useState } from "react";

function MusicPopup({ onClose , player}) {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [queue, setQueue] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const playlists = [
    {
      name: "Playlist 1",
      songs: ["Song 1", "Song 2", "Song 3"],
    },
    {
      name: "Playlist 2",
      songs: ["Song 4", "Song 5", "Song 6"],
    },
    // Add more playlists as needed
  ];

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  const handleAddToQueue = (song) => {
    setQueue([...queue, song]);
  };

  const handlePlaySong = (song) => {
    setCurrentlyPlaying(song);
  };

  return (
    <div className="music-popup">
      <h2>{player}'s Playlist</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.name}>
            <button onClick={() => handlePlaylistClick(playlist)}>
              {playlist.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedPlaylist && (
        <div>
          <h2>{selectedPlaylist.name}</h2>
          <ul>
            {selectedPlaylist.songs.map((song, index) => (
              <li key={index}>
                {song}{" "}
                <button onClick={() => handleAddToQueue(song)}>Add to Queue</button>{" "}
                <button onClick={() => handlePlaySong(song)}>Play</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {currentlyPlaying && (
        <div>
          <h2>Currently Playing</h2>
          <p>{currentlyPlaying}</p>
          {/* Add your graphic for the currently playing song */}
         
        </div>
      )}

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default MusicPopup;
