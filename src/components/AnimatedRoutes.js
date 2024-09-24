import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ContactUs from "../pages/ContactUs";
import UnderConst from "../pages/UnderConst";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/products" element={<UnderConst />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/technologies" element={<UnderConst />}></Route>
        <Route path="/about" element={<UnderConst />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
