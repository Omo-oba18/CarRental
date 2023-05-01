import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack
      component={Container}
      maxWidth="sm"
      direction={{ sm: "row", ml: "column" }}
      spacing={4}
      sx={{ p: 8 }}
      justifyContent="space-around"
    >
      <Typography variant="h5" component="h5">
        Connect with us
      </Typography>
      <Stack
        direction={{ sm: "row", ml: "column" }}
        sx={{ marginY: 4 }}
        flexWrap="wrap"
      >
        <Box sx={{ marginX: 2 }}>
          <Typography textTransform="uppercase" marginBottom={2}>
            Main Office
          </Typography>
          <Typography>123 Anywhere St</Typography>
          <Typography>Any City, State</Typography>
          <Typography>Any Country</Typography>
          <Typography>(123) 432 7732</Typography>
        </Box>
        <Box sx={{ marginX: 2 }}>
          <Typography textTransform="uppercase" marginBottom={2}>
            Social Media
          </Typography>
          <Typography>Facebook</Typography>
          <Typography>Instagram</Typography>
          <Typography>Twitter</Typography>
        </Box>
        <Typography marginY={6}>hello@reallydealer.com</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
