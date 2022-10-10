import { Pause, PlayArrow, Save } from "@mui/icons-material";
import { Card, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useSongContext } from "../context/songContext";

const SongListItem = ({ song }) => {
  const { addSongToPlaylist, togglePlaying, currentSong, playing } =
    useSongContext();
  const isCurrentSong = playing && song.id === currentSong.id;

  return (
    <Card>
      <Stack height={150} direction="row">
        <img
          src={song.thumbnail}
          width={200}
          style={{ objectFit: "cover" }}
          alt="Song thumbnail"
        />
        <Stack marginLeft={1} justifyContent="center">
          <Typography>{song.title}</Typography>
          <Typography variant="caption" color="text.secondary">
            {song.artist}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          marginLeft="auto"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton sx={{ height: 40 }} onClick={() => togglePlaying(song)}>
            {isCurrentSong ? <Pause /> : <PlayArrow />}
          </IconButton>
          <IconButton
            sx={{ height: 40 }}
            onClick={() => addSongToPlaylist(song)}
          >
            <Save />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SongListItem;
