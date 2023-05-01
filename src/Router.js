import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog, Home } from "./components";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route exact path="/search" element={<Results />} /> */}
      </Routes>
    </>
  );
};

export default Router;
