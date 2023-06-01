import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog, Contact, About, RideTo, CarCategory, Login } from "./pages";
import { Home } from "./components";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ride-to" element={<RideTo />} />
        <Route path="/view-more-car" element={<CarCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
