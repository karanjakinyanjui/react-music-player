import { createTheme, Hidden, Stack } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import Header from "./components/Header";
import SongList from "./components/SongList";
import QueuedSongList from "./components/QueuedSongList";
import SongPlayer from "./components/PlayerDisplay";
import { SongProvider } from "./context/SongProvider";
import BottomSlider from "./components/BottomSlider";
import AddSong from "./components/AddSong";
import Player from "./components/Player";

const darkTheme = (dark) =>
  createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

const App = () => {
  const [dark, setDark] = useState(true);

  return (
    <SongProvider>
      <ThemeProvider theme={darkTheme(dark)}>
        <Player />
        <CssBaseline />
        <Header setDark={setDark} />
        <Stack
          padding={2}
          spacing={5}
          marginTop={8}
          marginBottom={8}
          direction="row"
        >
          <Stack flex={4} spacing={2}>
            <AddSong />
            <SongList />
          </Stack>
          <Hidden smDown={true}>
            <Stack marginTop={2} flex={3} spacing={2}>
              <SongPlayer />
              <QueuedSongList />
            </Stack>
          </Hidden>
        </Stack>
        <BottomSlider />
      </ThemeProvider>
    </SongProvider>
  );
};

export default App;
