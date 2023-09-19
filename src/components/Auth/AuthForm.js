import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
      { isSignUp ?"Sign Up" : "Login"}
      </Typography>
      <form>
        <Box
          padding={7}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={400}
          margin={"auto"}
          alignContent={"center"}
        >
          {isSignUp && (
            <>
              <FormLabel sx={{ mt: 1, mb: 1 }}>Name</FormLabel>
              <TextField
                margin="normal"
                variant="standard"
                type="text"
                name="name"
              />
            </>
          )}

          <FormLabel sx={{ mt: 1, mb: 1 }}>Email</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type="email"
            name="email"
          />
          <FormLabel sx={{ mt: 1, mb: 1 }}>Password</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type="password"
            name="password"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            variant="contained"
            type="submit"
            fullWidth
          >
             { isSignUp ?"Signup" : "Login"}
          </Button>
          <Button onClick={() => setIsSignUp(!isSignUp)} sx={{ mt: 2, borderRadius: 10 }} fullWidth>
           { isSignUp ?"Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
