import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Treadmills from "./components/Treadmills";
import Contactus from "./components/Contactus";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bikes from "./components/Bikes";
import Shoes from "./components/Shoes";
import Login from "./components/Login";
import Cart from "./components/cart";
import { useState } from "react";

const App = () => {
  return (
    <Router>
      <div>
        {" "}
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Treadmills" element={<Treadmills />}></Route>
        <Route path="/Contactus" element={<Contactus />}></Route>
        <Route path="/Bikes" element={<Bikes />}></Route>
        <Route path="/Shoes" element={<Shoes />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <div>
        <Footer />{" "}
      </div>
    </Router>
  );
};

export default App;
