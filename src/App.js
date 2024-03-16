import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import Footer from "./components/footer";
function App() {
  return (
    <div className="w-screen h-screen">
      {/* <div className="h-24"> */}
      <Navbar />
      <Hero />
      <Products />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
