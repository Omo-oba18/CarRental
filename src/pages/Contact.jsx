import React from "react";
import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Stack
      component="main"
      style={{
        marginTop: "6rem",
        paddingTop: "4rem",
        paddingLeft: "3.5rem",
        paddingRight: "3.5rem",
      }}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Typography variant="h3">Get in Touch</Typography>
      <Typography variant="p">
        We're here for you, and we're wearing our thinking caps. But first swing
        by our fantastic Help Center for all your InVision product and technical
        needs! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        inventore sit veritatis.
      </Typography>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField label="First name" variant="filled" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField label="Last name" variant="outlined" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <TextField label="Email Address" variant="outlined" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            placeholder="Leave your message here"
            rows={4}
            label="Message"
            multiline
          />
        </FormControl>
        <Button fullWidth sx={{ m: 1 }} variant="filled">
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default Contact;
