import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cars" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
