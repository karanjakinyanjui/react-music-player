import { createContext, useContext } from "react";
import { v4 } from "uuid";

export const SongContext = createContext();

export const useSongContext = () => {
  return useContext(SongContext);
};

export function createSong(_, i) {
  const id = v4();
  return {
    id,
    title: "Song " + i,
    artist: "Artist " + i,
    thumbnail: `https://picsum.photos/200/300`,
    duration: 100,
  };
}
