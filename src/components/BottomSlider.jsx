import { Favorite, PersonAdd, PlaylistPlay } from "@mui/icons-material";
import { Avatar, Toolbar, Stack, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useSongContext } from "../context/songContext";
import { PlayerControls } from "./PlayerControls";
import Seeker from "./Seeker";

const formatTime = (seconds) => {
  const start = seconds >= 3600 ? 11 : 14;
  return new Date(1000 * seconds || 0).toISOString().slice(start, 19);
};

const BottomSlider = () => {
  const { currentSong, elapsed } = useSongContext();
  const [remaining, setRemaining] = useState(false);

  const toggleRemaining = () => {
    setRemaining(!remaining);
  };

  return (
    <Toolbar
      sx={{
        bottom: 0,
        position: "fixed",
        width: "100vw",
        background: "black",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        width="100vw"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Stack direction="row" alignItems="center">
          <PlayerControls />
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography
            variant="subtitle1"
            component="span"
            color="textSecondary"
          >
            {formatTime(elapsed)}
          </Typography>
          <Seeker
            sx={{
              minWidth: 100,
            }}
          />
          <Typography
            variant="subtitle1"
            component="span"
            color="textSecondary"
            onClick={toggleRemaining}
          >
            {remaining
              ? "-" + formatTime(currentSong.duration - elapsed)
              : formatTime(currentSong.duration)}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Avatar src={currentSong.thumbnail} alt="Song thumbnail" />
          <Stack marginLeft={1} justifyContent="center">
            <Typography>{currentSong.title}</Typography>
            <Typography color="text.secondary" variant="caption">
              {currentSong.artist}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row">
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton>
            <PersonAdd />
          </IconButton>
          <IconButton>
            <PlaylistPlay />
          </IconButton>
        </Stack>
      </Stack>
    </Toolbar>
  );
};

export default BottomSlider;
