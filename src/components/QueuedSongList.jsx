import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSongContext } from "../context/songContext";
import { saveToLocalStorage } from "../handlers/localStorage";
import QueuedSongListItem from "./QueuedSongListItem";

const QueuedSongList = () => {
  const { queuedSongs } = useSongContext();

  useEffect(() => {
    saveToLocalStorage("queuedSongs", queuedSongs);
  }, [queuedSongs]);

  return (
    <>
      <Typography>QUEUE ({queuedSongs.length})</Typography>
      {queuedSongs.length &&
        queuedSongs.map((item, index) => (
          <QueuedSongListItem index={index} key={index} song={item} />
        ))}
    </>
  );
};

export default QueuedSongList;
