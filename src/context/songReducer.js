import { v4 } from "uuid";

export const songReducer = (state, { type, payload }) => {
  const currentSongIndex = state.queuedSongs.findIndex(
    (song) => state.currentSong.playlistId === song.playlistId
  );

  switch (type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        dark: !state.dark,
      };
    case "SET_SONGS":
      return {
        ...state,
        songs: payload.songs,
      };
    case "ADD_SONG":
      return {
        ...state,
        songs: [payload.song, ...state.songs],
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        queuedSongs: payload.songs,
      };
    case "ADD_SONG_TO_PLAYLIST":
      const song = { ...payload.song, playlistId: v4() };
      return {
        ...state,
        queuedSongs: [song, ...state.queuedSongs],
      };
    case "REMOVE_SONG_FROM_PLAYLIST":
      return {
        ...state,
        queuedSongs: state.queuedSongs.filter(
          (song) => song.playlistId !== payload.song.playlistId
        ),
      };
    case "SET_ELAPSED":
      return {
        ...state,
        elapsed: payload.elapsed,
      };
    case "SET_SEEK":
      return {
        ...state,
        seek: payload.seek,
      };
    case "SET_CURRENT_SONG":
      return {
        ...state,
        elapsed: payload.elapsed || 0,
        playing: true,
        currentSong: payload.song,
      };
    case "TOGGLE_PLAYING":
      const isCurrent = state.currentSong.id === payload.song.id;
      return {
        ...state,
        currentSong: payload.song,
        elapsed: isCurrent ? state.elapsed : 0,
        playing: isCurrent ? !state.playing : true,
      };
    case "GO_TO_NEXT_SONG":
      let nextIndex = currentSongIndex + 1;
      if (nextIndex >= state.queuedSongs.length) nextIndex = 0;

      const nextSong = state.queuedSongs[nextIndex];
      if (!nextSong) return state;
      return {
        ...state,
        elapsed: 0,
        currentSong: nextSong,
      };
    case "GO_TO_PREVIOUS_SONG":
      let prevIndex = currentSongIndex - 1;
      if (prevIndex < 0) prevIndex = state.queuedSongs.length - 1;

      const prevSong = state.queuedSongs[prevIndex];
      return {
        ...state,
        elapsed: 0,
        currentSong: prevSong ? prevSong : state.currentSong,
      };
    default:
      return state;
  }
};
