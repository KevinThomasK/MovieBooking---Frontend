import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getAllMovies } from "../api-helpers/api-helpers.js";
import { Link } from "react-router-dom";


const Header = () => {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppBar position="sticky"  sx={{ bgcolor: "#2b2d42",height:"90px",justifyContent:"center" }}>
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
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
            <Tab LinkComponent={Link} to="/admin"  label="Admin" />
            <Tab LinkComponent={Link} to="/auth"  label="Auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
