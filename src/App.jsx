import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/header/Header.jsx";
import Contact from "./components/Layout/footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Projects.jsx";

import "../src/index.css";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
        </Routes>

        <Contact />
      </>
    </Router>
  );
}

export default App;
