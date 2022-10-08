import { createContext, useContext } from "react";
import { v4 } from "uuid";

export const SongContext = createContext({
  songs: [],
  currentSong: {},
  currentSongIndex: 0,
  queuedSongs: [],
  elapsed: 0,
  seek: 0,
  playing: false,
  dark: true,
  setSongs: () => {},
  addSong: () => {},
  setPlaylist: () => {},
  addSongToPlaylist: () => {},
  setCurrentSong: () => {},
  removeSongFromPlaylist: () => {},
  goToNextSong: () => {},
  goToPreviousSong: () => {},
  togglePlaying: () => {},
  setElapsed: () => {},
  setSeek: () => {},
});

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
