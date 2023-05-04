import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog, Contact, About } from "./pages";
import { Home } from "./components";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route exact path="/search" element={<Results />} /> */}
      </Routes>
    </>
  );
};

export default Router;
