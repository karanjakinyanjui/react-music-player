import { HeadphonesTwoTone } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = ({ setDark }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <HeadphonesTwoTone />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Music Share App
        </Typography>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: "auto" }}
          onClick={() => setDark((prev) => !prev)}
        >
          <DarkMode />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
