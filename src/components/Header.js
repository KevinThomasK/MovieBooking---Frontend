import React, { useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const top100Films = ["Godfather", "Batman", "Avengers"];

const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <AppBar sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar sx={{ marginLeft: "70px", marginRight: "70px" }}>
        <Box width={"20%"}>
          <VideoLibraryIcon sx={{ fontSize: "35px", cursor: "pointer" }} />
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search movies"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Movies" />
            <Tab label="Admin" />
            <Tab label="Auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
