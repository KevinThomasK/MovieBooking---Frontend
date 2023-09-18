import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MovieItem from "./Movies/MovieItem";

const HomePage = () => {
  return (
    <Box width={"100%"} height={"100%"} margin="auto" marginTop={6}>
      <Box margin={"auto"} width={"80%"} height={"65vh"} padding={2}>
        <img
          src="https://criticologos.com/wp-content/uploads/2022/07/hflCiNtY6MA-HD.jpg"
          alt="oppenheimer"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={5} margin={'auto'}>
        <Typography  variant="h4" textAlign={'center'}>Latest Releases</Typography>
      </Box>
      <Box display={"flex"} width={"90%"} justifyContent={"center"} flexWrap={"wrap"} margin={"auto"}>
        {[1,2,3,4].map((item)=>(<MovieItem key={item}/>))}
      </Box>
      <Box display={"flex"} padding={5} margin={"auto"}>
        <Button variant="outlined" sx={{margin:"auto",color:"#2b2d42"}}>View All Movies</Button>
      </Box>
    </Box>
  );
};

export default HomePage;
