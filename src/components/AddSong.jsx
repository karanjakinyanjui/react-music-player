import { Add, Link } from "@mui/icons-material";
import {
  Alert,
  Dialog,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import SoundCloudPlayer from "react-player/soundcloud";
import YouTubePlayer from "react-player/youtube";
import { getPlaylist } from "../handlers/playlist";
import { getTrackInfo } from "../handlers/trackInfo";
import SongDataForm from "./SongDataForm";

const AddSong = () => {
  const [open, setOpen] = React.useState(0);
  const [url, setUrl] = React.useState("");
  const [song, setSong] = React.useState({});
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [alertSeverity, setAlertSeverity] = React.useState("success");
  const [listId, setListId] = React.useState("");

  const soundcloud = SoundCloudPlayer.canPlay(url);
  const youtube = YouTubePlayer.canPlay(url);
  const canPlay = soundcloud || youtube;

  const isPlaylist = url.includes("list=");

  const handleOpen = async () => {
    if (isPlaylist) {
      const id = url.match(/list=([^&]*)/)[1];
      setListId(id);
    }
    canPlay && setOpen(true);
  };

  const handleSnackBarClose = () => {
    setSong({});
    setMessage("");
    setAlertOpen(false);
    setAlertSeverity("success");
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) handleOpen();
  };

  const handleEditSong = ({ player }) => {
    getTrackInfo(player).then((data) => {
      setSong({ ...data, url });
    });
  };

  const handleClose = ({
    response = `Added successfully`,
    success = true,
    alert = false,
  }) => {
    setOpen(false);
    setUrl("");
    if (alert) {
      setAlertOpen(true);
      setMessage(response);
      setAlertSeverity(success ? "success" : "error");
    } else {
      setSong({});
    }
  };

  return (
    <Stack>
      <TextField
        placeholder="Add Youtube or Soundcloud Url"
        fullwidth="true"
        onChange={(e) => setUrl(e.target.value)}
        margin="normal"
        type="url"
        value={url}
        onKeyUp={handleEnter}
        InputProps={{
          startAdornment: <Link sx={{ mr: 1 }}></Link>,
          endAdornment: (
            <IconButton disabled={!canPlay} onClick={handleOpen}>
              <Add />
            </IconButton>
          ),
        }}
      />
      {song.title && (
        <Dialog open={open} onClose={handleClose}>
          {isPlaylist ? (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/videoseries?list=${listId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <SongDataForm song={song} handleClose={handleClose} />
          )}
        </Dialog>
      )}
      {canPlay && (
        <ReactPlayer url={url} hidden={true} onReady={handleEditSong} />
      )}
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleSnackBarClose}
      >
        <Alert
          severity={alertSeverity}
          onClose={handleSnackBarClose}
          sx={{ width: "100%" }}
        >
          <Typography component="span" fontWeight="bold">
            {song.title}
          </Typography>{" "}
          <Typography component="span">{message}</Typography>
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AddSong;
