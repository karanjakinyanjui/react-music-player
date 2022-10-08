import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useSongContext } from "../context/songContext";

const Player = () => {
  const { playing, currentSong, seek, setElapsed, goToNextSong } =
    useSongContext();
  const player = useRef(null);

  useEffect(() => {
    if (seek) player.current.seekTo(seek, "fraction");
  }, [seek, player]);

  const handleProgress = ({ played, playedSeconds }) => {
    setElapsed(playedSeconds);
    if (currentSong.duration - playedSeconds < 1) {
      goToNextSong();
    }
  };

  return (
    currentSong.url && (
      <ReactPlayer
        ref={player}
        onProgress={handleProgress}
        playing={playing}
        hidden
        url={currentSong.url}
      />
    )
  );
};

export default Player;
