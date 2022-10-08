import { Slider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSongContext } from "../context/songContext";

const Seeker = (props) => {
  const { elapsed, setElapsed, setSeek, currentSong } = useSongContext();
  const [value, setValue] = useState(elapsed / currentSong.duration || 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSeek(newValue);
    setElapsed(value * currentSong.duration);
  };

  useEffect(() => {
    setValue(elapsed / currentSong.duration || 0);
  }, [elapsed, currentSong.duration]);

  return (
    <Slider
      value={value}
      onChange={handleChange}
      {...props}
      type="range"
      min={0}
      max={1}
      step={0.01}
    />
  );
};

export default Seeker;
