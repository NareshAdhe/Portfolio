// primary color shade 1 : #ffae00
// primary color shade 2 : #ce8500
// primary color shade 3 : #9f5f00
// primary color shade 3 : #743a00
// font color : white
// background color : #0c061f
import React from "react";
import { useState, useEffect } from "react";
import Background from "./assets/BackgroundVideo.mp4";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}

      <video
        src={Background}
        autoPlay
        muted
        loop
        className="fixed -z-10 left-0 top-0 w-full min-h-screen object-cover brightness-[60%]"
      />
      <div className="h-full w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
