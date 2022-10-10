import { useMutation } from "@apollo/client";
import { Button, DialogTitle, Stack, TextField } from "@mui/material";
import React from "react";

import { ADD_SONG } from "../graphql/mutations";

const SongDataForm = ({ song, handleClose }) => {
  const [data, setData] = React.useState(song);

  const [addSong, { error }] = useMutation(ADD_SONG);

  const filled = data.title && data.artist && data.thumbnail;

  const handleSubmit = async () => {
    addSong({ variables: data })
      .then(() => {
        handleClose({
          alert: true,
        });
      })
      .catch((err) => {
        if (error?.message?.includes("Uniqueness violation.")) {
          handleClose({
            response: `Already exists`,
            success: false,
            alert: true,
          });
        }
      });
  };

  const handleFieldChange = (e) => {
    setData({
      ...data,
      [e.target.getAttribute("name")]: e.target.value.trimStart(),
    });
  };

  return (
    <>
      <DialogTitle>Edit Song</DialogTitle>
      <Stack padding={2} minWidth={"25vw"} spacing={2}>
        <img src={data.thumbnail} alt="" />
      </Stack>
      <form>
        <Stack padding={2} minWidth={"25vw"} spacing={2}>
          <TextField
            value={data.title}
            onChange={handleFieldChange}
            placeholder="Title"
            required
            name="title"
            label="Title"
            fullwidth="true"
            margin="normal"
          />
          <TextField
            value={data.artist}
            onChange={handleFieldChange}
            placeholder="Artist"
            required
            label="Artist"
            name="artist"
            fullwidth="true"
            margin="normal"
          />
          <TextField
            value={data.thumbnail}
            onChange={handleFieldChange}
            placeholder="Thumbnail"
            required
            name="thumbnail"
            label="Thumbnail"
            fullwidth="true"
            margin="normal"
            type="url"
          />
          <TextField
            value={data.duration}
            onChange={handleFieldChange}
            placeholder="Duration (s)"
            disabled
            required
            name="duration"
            label="Duration (s)"
            fullwidth="true"
            margin="normal"
            type="url"
          />
          <Stack direction="row-reverse">
            <Button onClick={handleSubmit} disabled={!filled}>
              Add Song
            </Button>
            <Button color="warning" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default SongDataForm;
