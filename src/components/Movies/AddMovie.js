import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { addMovie } from "../../api-helpers/api-helpers";

const labelProps = {
  mt: 1,
  mb: 1,
};

const AddMovie = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterUrl: "",
    releaseDate: "",
    feautured: false,
  });

  const [actors, setActors] = useState([]);
  const [actor, setActor] = useState("");

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, actors);
    addMovie({ ...inputs,  actors })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          padding={10}
          margin={"auto"}
          display={"flex"}
          marginBottom={10}
          marginTop={10}
          flexDirection={"column"}
          boxShadow={"10px 10px 20px #ccc"}
        >
          <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>
            Add Movie
          </Typography>
          <FormLabel sx={{ labelProps }}>Title</FormLabel>
          <TextField
            value={inputs.title}
            onChange={handleChange}
            name="title"
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ labelProps }}>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            name="description"
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ labelProps }}>Poster Url</FormLabel>
          <TextField
            value={inputs.posterUrl}
            onChange={handleChange}
            name="posterUrl"
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ labelProps }}>Release Date</FormLabel>
          <TextField
            type="date"
            value={inputs.releaseDate}
            onChange={handleChange}
            name="releaseDate"
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ labelProps }}>Actors</FormLabel>
          <Box display={"flex"}>
            <TextField
              value={actor}
              name="actor"
              onChange={(e) => setActor(e.target.value)}
              variant="standard"
              margin="normal"
            />
            <Button
              onClick={() => {
                setActors([...actors, actor]);
                setActor("");
              }}
            >
              Add
            </Button>
          </Box>
          <FormLabel sx={{ mt: 5 }}>Feautured</FormLabel>
          <Checkbox
            name="feautured"
            checked={inputs.feautured}
            onClick={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                feautured: e.target.checked,
              }))
            }
            sx={{ mr: "auto" }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "30%",
              bgcolor: "#2b2d42",
              margin: "auto",
              mt: 10,
              ":hover": { bgcolor: "#121217" },
            }}
          >
            Add movie
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddMovie;
