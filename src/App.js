import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import RatingCard from "./components/ratingCard"
function App() {
  return (
    <div className="w-screen h-screen">
     <Navbar />
        <Hero />
        <Products />
        <RatingCard/>
    </div>
  );
}

export default App;
  