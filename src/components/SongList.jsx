import { useSubscription } from "@apollo/react-hooks";
import { CircularProgress, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useSongContext } from "../context/songContext";
import { GET_SONGS_SUB } from "../graphql/queries";
import SongListItem from "./SongListItem";

const SongList = () => {
  const { songs, setSongs } = useSongContext();

  const { data, loading, error } = useSubscription(GET_SONGS_SUB);

  // useEffect(() => {
  //   console.count("setSongs Changed ");
  // }, [setSongs]);

  useEffect(() => {
    const list = data?.songs_songs || [];
    if (JSON.stringify(songs) !== JSON.stringify(list)) setSongs(list);
  }, [songs, data, setSongs]);

  if (loading)
    return (
      <Stack justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    );
  if (error) return <div>Fetching failed</div>;

  return (
    <>
      {songs.map((item) => (
        <SongListItem key={item.id} song={item} />
      ))}
    </>
  );
};

export default SongList;
