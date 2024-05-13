import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

function App() {
  return (
  <div className="app">
    <Header />
    <Banner />
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  </div>
  );
}
export default App; 