import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        margin: 5,
        width: 260,
        height: 370,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img
        positoin="relative"
        height={"55%"}
        width={"100%"}
        src={posterUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        
        fullWidth
          LinkComponent={Link}
          to={`/booking/${id}`}
          sx={{ margin: "auto" ,paddingBottom:"3px"}}
          size="small"
        >
          Book Tickets
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
