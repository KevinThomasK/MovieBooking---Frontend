import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getAllMovies } from "../api-helpers/api-helpers.js";

const top100Films = ["Godfather", "Batman", "Avengers"];

const Header = () => {
  const [value, setValue] = useState(0);
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppBar sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar sx={{ marginLeft: "40px", marginRight: "40px" }}>
        <Box width={"20%"}>
          <VideoLibraryIcon sx={{ fontSize: "35px", cursor: "pointer" }} />
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={movies && movies.map((option) => option.title)}
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
