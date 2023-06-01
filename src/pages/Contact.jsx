import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

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
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        Get in Touch
      </Typography>
      <Typography variant="p" sx={{ marginBottom: "1rem" }}>
        We're here to assist you. Whether you have a question, feedback, or need
        support, our dedicated team is ready to help. Reach out to us through
        the contact form or utilize the provided contact information. We value
        your input and strive to provide prompt and personalized assistance.
        Don't hesitate to get in touch - we look forward to hearing from you!
      </Typography>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          id="input-with-icon-textfield"
          label="Full name"
          fullWidth
          placeholder="Full name"
          variant="standard"
          sx={{
            marginY: "1rem",
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#fff",
            },
          }}
        />
        <TextField
          id="input-with-icon-textfield"
          label="Email address"
          fullWidth
          placeholder="Email address"
          variant="standard"
          sx={{
            marginY: "1rem",
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#fff",
            },
          }}
        />
        <TextField
          id="input-with-icon-textfield"
          label="Message"
          multiline
          fullWidth
          rows={4}
          placeholder="Write down your message"
          variant="standard"
          sx={{
            marginY: "1rem",
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#fff",
            },
          }}
        />
        <Button
          fullWidth
          variant="filled"
          sx={{ backgroundColor: "primary.main", m: "1" }}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default Contact;
