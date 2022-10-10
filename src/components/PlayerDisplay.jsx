import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useSongContext } from "../context/songContext";
import { PlayerControls } from "./PlayerControls";
import Seeker from "./Seeker";

const SongPlayer = () => {
  const { currentSong, queuedSongs } = useSongContext();
  const song = currentSong.id
    ? currentSong
    : queuedSongs.length
    ? queuedSongs[0]
    : {
        title: "Song title",
        artist: "Artist",
        thumbnail: "https://img.icons8.com/ios/452/spotify.png",
      };

  return (
    <Card sx={{ height: 300, marginTop: 2 }}>
      <Stack direction="row">
        <Stack flex={4}>
          <Stack padding={2} spacing={1}>
            <Typography variant="h5" component="h3">
              {song.title}
            </Typography>

            <Typography variant="caption">{song.artist}</Typography>
            <Typography
              variant="subtitle1"
              component="span"
              color="text.secondary"
            >
              {new Date(1000 * song.duration || 0).toISOString().slice(11, 19)}
            </Typography>
          </Stack>
          <Stack padding={3} direction="row" alignItems="center">
            <PlayerControls fontSize={55} />
          </Stack>
          <Stack padding={2}>
            <Seeker />
          </Stack>
        </Stack>
        <Stack flex={1}>
          <img
            src={song.thumbnail}
            style={{ objectFit: "cover" }}
            alt="Song thumbnail"
          />
        </Stack>
      </Stack>
    </Card>
  );
};

export default SongPlayer;
