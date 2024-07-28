import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar";
import { useRef, useState } from "react";
import Footer from "./components/footer";

import AnimatedRoutes from "./components/AnimatedRoutes";

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

  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    const scrollY = window?.scrollY;
    const scrollTop = document.getElementById("test").scrollTop;

    setScroll(scrollTop);
  };

  return (
    <main
      id="test"
      onScroll={onScroll}
      className="arrowcut_app w-screen h-screen"
    >
      <Navbar scrollPosition={scrollPosition} scroll={scroll} />
      <Router>
        <AnimatedRoutes />
      </Router>
      <Footer />
    </main>
  );
}

export default App;
