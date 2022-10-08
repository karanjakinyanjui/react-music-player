import { Delete } from "@mui/icons-material";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useSongContext } from "../context/songContext";

const QueuedSongListItem = ({ song }) => {
  const { removeSongFromPlaylist, setCurrentSong, currentSong } =
    useSongContext();
  const isCurrentSong = song.playlistId === currentSong.playlistId;
  return (
    <Stack
      onClick={() => setCurrentSong(song)}
      width="100%"
      direction="row"
      sx={{
        cursor: "pointer",
      }}
      height={50}
    >
      {isCurrentSong && (
        <Stack
          sx={{
            borderBottomRightRadius: "8px",
            borderTopRightRadius: "8px",
            width: "4px",
            backgroundColor: "primary.main",
          }}
        />
      )}
      <Avatar src={song.thumbnail} alt="Song thumbnail" />
      <Stack marginLeft={1} justifyContent="center">
        <Typography>{song.title}</Typography>
        <Typography variant="caption" color="text.secondary">
          {song.artist}
        </Typography>
      </Stack>
      <IconButton
        onClick={() => removeSongFromPlaylist(song)}
        sx={{ marginLeft: "auto", ":hover": { backgroundColor: "" } }}
        color="error"
      >
        <Delete />
      </IconButton>
    </Stack>
  );
};

export default QueuedSongListItem;
