import { useReducer } from "react";
import { songReducer } from "./songReducer";
import { SongContext } from "./songContext";
import { loadFromLocalStorage } from "../handlers/localStorage";

export const SongProvider = ({ children }) => {
  const [state, dispatch] = useReducer(songReducer, {
    songs: [],
    queuedSongs: loadFromLocalStorage("queuedSongs", []),
    currentSong: {},
    currentSongIndex: 0,
    elapsed: 0,
    seek: 0,
    playing: false,
    dark: true,
    volume: 0.5,
    muted: false,
    shuffle: false,
    playlistIndices: [],
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
  const setVolume = (volume) => {
    dispatch({ type: "SET_VOLUME", payload: { volume } });
  };
  const toggleMuted = () => {
    dispatch({ type: "TOGGLE_MUTED" });
  };
  const toggleShuffle = () => {
    dispatch({ type: "TOGGLE_SHUFFLE" });
  };

  const setPlaylistIndices = (indices) => {
    dispatch({ type: "SET_PLAYLIST_INDICES", payload: { indices } });
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
        setVolume,
        toggleMuted,
        toggleShuffle,
        setPlaylistIndices,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};
