import React from "react";
//import { playAudio } from "./utils2";
function LibrarySong({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
}) {
  const songSelectHandler = async () => {
    setCurrentSong(song);
    const newSongs = songs.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return { ...s, active: false };
      }
    });
    await setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
    //playAudio(isPlaying, audioRef);
  };

  return (
    <div className={`library-song ${song.active ? "selected" : ""}`}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description" onClick={songSelectHandler}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
