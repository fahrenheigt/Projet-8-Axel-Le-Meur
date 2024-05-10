import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
=======
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Header from "./components/header/Header.jsx";
import Logement from "./pages/Logement.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Error from "./pages/Error.jsx";
>>>>>>> parent of 498aa27 (Organisation des fichiers et création du composant de navigation)

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
  );
}
export default App; 