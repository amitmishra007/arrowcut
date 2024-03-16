import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
function App() {
  return (
    <div className="w-screen h-screen">
      <div className="h-24">
        <Navbar />
        <Hero />
        <Products />
      </div>
    </div>
  );
}

export default App;
