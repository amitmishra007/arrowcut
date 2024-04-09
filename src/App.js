import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import Footer from "./components/footer";
import ContactInfo from "./components/contactinfo";
import FeaturedProducts from "./components/featuredProducts";
import { useRef, useState } from "react";
import ChooseUs from "./components/chooseUs";
import Customer from "./components/customer";
import ToolManufacturer from "./components/toolManufacturer";

function App() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollTop: 0,
    scrollLeft: 0,
  });
  const scrollDemoRef = useRef(null);

  const handleScroll = () => {
    if (scrollDemoRef.current) {
      const { scrollTop, scrollLeft } = scrollDemoRef.current;
      setScrollPosition({ scrollTop, scrollLeft });
    }
  };

  return (
    <main
      className="arrowcut_app w-screen h-screen"
      ref={scrollDemoRef}
      onScroll={handleScroll}
    >
      {/* <div className="h-24"> */}
      <Navbar scrollPosition={scrollPosition} />
      <Hero />
      <Products />
      <FeaturedProducts />
      <ChooseUs />
      <ToolManufacturer />
      <Customer />
      <ContactInfo />
      <Footer />
    </main>
  );
}

export default App;
