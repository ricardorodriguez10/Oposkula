import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../containers/Contact/Contact";
import Home from "../../containers/Home/Home";
// import Register from "../../containers/Register/Register";
import Servicios from "../../containers/Servicios/Servicios";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Body;
