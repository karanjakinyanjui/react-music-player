import {
  Pause,
  PlayArrow,
  Shuffle,
  ShuffleOn,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useSongContext } from "../context/songContext";

export function PlayerControls({ fontSize = 40 }) {
  const {
    playing,
    currentSong: song,
    togglePlaying,
    goToNextSong,
    goToPreviousSong,
    toggleShuffle,
    shuffle,
  } = useSongContext();
  return (
    <>
      <IconButton onClick={goToPreviousSong}>
        <SkipPrevious sx={{ fontSize }} />
      </IconButton>
      <IconButton onClick={() => togglePlaying(song)}>
        {playing ? (
          <Pause sx={{ fontSize }} />
        ) : (
          <PlayArrow sx={{ fontSize }} />
        )}
      </IconButton>
      <IconButton onClick={goToNextSong}>
        <SkipNext sx={{ fontSize }} />
      </IconButton>
      <IconButton onClick={toggleShuffle}>
        {shuffle ? (
          <ShuffleOn sx={{ fontSize }} />
        ) : (
          <Shuffle sx={{ fontSize }} />
        )}
      </IconButton>
    </>
  );
}
