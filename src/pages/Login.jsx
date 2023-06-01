import React from "react";
import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Login = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Stack sx={{ marginTop: "100px" }}>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "600px" }} display={isSmallScreen && "none"}>
          <img
            src="https://ik.imagekit.io/omobaoshoffa/car_rental/rideb-login-image.jpg?updatedAt=1685354852724"
            alt=""
            style={{
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>

        <Stack
          direction="column"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            backgroundColor: "#fff",
            height: "600px",
          }}
        >
          <Typography>Login</Typography>
          <TextField
            id="input-with-icon-textfield"
            label="Email address"
            type="email"
            fullWidth
            placeholder="Email address here"
            variant="filled"
            sx={{
              marginY: "1rem",
              "& .MuiInputLabel-root": {
                color: "#7F669D",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "#7F669D",
              },
            }}
          />
          <TextField
            id="input-with-icon-textfield"
            label="Password"
            type="password"
            fullWidth
            placeholder="password"
            variant="filled"
            sx={{
              marginY: "1rem",
              "& .MuiInputLabel-root": {
                color: "#7F669D",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "#7F669D",
              },
            }}
          />
          <Stack direction="column">
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justify: "space-between",
                alignItems: "center",
                marginY: ".5rem",
              }}
            >
              <Typography color="#000">Not member yet? </Typography>
              <Button component={Link} to="/register">
                Register now
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
