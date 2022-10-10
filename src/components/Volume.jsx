import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { IconButton, Slider } from "@mui/material";
import React, { useEffect } from "react";
import { useSongContext } from "../context/songContext";

const Volume = (props) => {
  const { volume, muted, toggleMuted, setVolume } = useSongContext();
  const [value, setValue] = React.useState(volume);
  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };
  useEffect(() => {
    setValue(muted ? 0 : volume);
  }, [volume, muted]);

  return (
    <>
      <IconButton onClick={toggleMuted}>
        {muted ? (
          <VolumeOff />
        ) : volume === 0 ? (
          <VolumeMute />
        ) : volume < 0.5 ? (
          <VolumeDown />
        ) : (
          <VolumeUp />
        )}
      </IconButton>

      <Slider
        sx={{
          width: 150,
        }}
        value={value}
        onChange={handleChange}
        type="range"
        min={0}
        max={1}
        step={0.05}
      />
    </>
  );
};

export default Volume;
