import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import Footer from "./components/footer";
import ContactInfo from "./components/contactinfo";
import FeaturedProducts from "./components/featuredProducts";

function App() {
  return (
    <div className="arrowcut_app w-screen h-screen">
      {/* <div className="h-24"> */}
      <Navbar />
      <Hero />
      <Products />
      <FeaturedProducts />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
