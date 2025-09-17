import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";

const MainRouting = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </>
  );
};

export default MainRouting;
