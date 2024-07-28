import React from "react";
import Hero from "../components/hero";
import Products from "../components/products";
import FeaturedProducts from "../components/featuredProducts";
import ChooseUs from "../components/chooseUs";
import ToolManufacturer from "../components/toolManufacturer";
import Customer from "../components/customer";
import ContactInfo from "../components/contactinfo";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Products />
      <FeaturedProducts />
      <ChooseUs />
      <ToolManufacturer />
      <Customer />
      <ContactInfo />
    </motion.div>
  );
};

export default HomePage;
