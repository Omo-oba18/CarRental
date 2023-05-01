import React from "react";
import { CssBaseline, Stack } from "@mui/material";
import { Footer, Navbar } from "./components";
import Router from "./Router";
const App = () => {
  return (
    <Stack>
      <CssBaseline />
      <Navbar />
      <Router />
      <Footer />
    </Stack>
  );
};

export default App;
