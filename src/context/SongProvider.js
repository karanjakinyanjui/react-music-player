import { useReducer } from "react";
import { songReducer } from "./songReducer";
import { SongContext } from "./songContext";
import { loadFromLocalStorage } from "../handlers/localStorage";

export const SongProvider = ({ children }) => {
  const [state, dispatch] = useReducer(songReducer, {
    songs: [],
    currentSong: {},
    queuedSongs: loadFromLocalStorage("queuedSongs", []),
  });

  const setDark = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const setSongs = (songs) => {
    dispatch({ type: "SET_SONGS", payload: { songs } });
  };

  const addSong = (song) => {
    dispatch({ type: "ADD_SONG", payload: { song } });
  };

  const setPlaylist = (songs) => {
    dispatch({ type: "SET_PLAYLIST", payload: { songs } });
  };

  const addSongToPlaylist = (song) => {
    dispatch({ type: "ADD_SONG_TO_PLAYLIST", payload: { song } });
  };
  const removeSongFromPlaylist = (song) => {
    dispatch({ type: "REMOVE_SONG_FROM_PLAYLIST", payload: { song } });
  };
  const setCurrentSong = (song, index) => {
    dispatch({ type: "SET_CURRENT_SONG", payload: { song, index } });
  };
  const goToNextSong = () => {
    dispatch({ type: "GO_TO_NEXT_SONG" });
  };
  const goToPreviousSong = () => {
    dispatch({ type: "GO_TO_PREVIOUS_SONG" });
  };
  const togglePlaying = (song) => {
    dispatch({ type: "TOGGLE_PLAYING", payload: { song } });
  };
  const setElapsed = (elapsed) => {
    dispatch({ type: "SET_ELAPSED", payload: { elapsed } });
  };
  const setSeek = (seek) => {
    dispatch({ type: "SET_SEEK", payload: { seek } });
  };

  return (
    <SongContext.Provider
      value={{
        ...state,
        setDark,
        setSongs,
        addSong,
        setPlaylist,
        addSongToPlaylist,
        setCurrentSong,
        togglePlaying,
        removeSongFromPlaylist,
        goToNextSong,
        goToPreviousSong,
        setElapsed,
        setSeek,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};
