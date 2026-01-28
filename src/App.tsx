import React from "react";
import logo from "./images/logo.png";
import { Github, Linkedin, Mail } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Activities from "./pages/Activities";

function App() {
  return (
    <Router basename="/aksamatrix">
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">

        {/* ===================== NAVIGATION ===================== */}
        <nav className="bg-gray-900 py-4 sticky top-0 z-50 shadow-md">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">

              {/* Logo */}
              <Link
                to="/"
                className="flex items-center space-x-2 text-xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                <img src={logo} alt="Aksamatrix Logo" className="w-8 h-8" />
                <span>Aksamatrix</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-300 hover:text-blue-400">
                  Home
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-blue-400">
                  About Us
                </Link>
                <Link to="/projects" className="text-gray-300 hover:text-blue-400">
                  Projects
                </Link>
                <Link to="/activities" className="text-gray-300 hover:text-blue-400">
                  Activities
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400">
                  Contact
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mdaksamvk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-300 hover:text-blue-400"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mdaksamvk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-300 hover:text-blue-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="mailto:mdaksamvk@gmail.com"
                  aria-label="Email"
                  className="text-gray-300 hover:text-blue-400"
                >
                  <Mail className="w-5 h-5" />
                </a>

                <a
                  href="https://www.researchgate.net/profile/Md-Aksam-Vk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ResearchGate"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=8Vpaiw4K3Afc&format=png&color=ffffff"
                    alt="ResearchGate"
                    className="w-5 h-5"
                  />
                </a>

                <a
                  href="https://scholar.google.co.in/citations?user=lCqsc2cAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=Tp4R2ISZXny7&format=png&color=ffffff"
                    alt="Google Scholar"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden mt-4 flex justify-center gap-6">
              <Link to="/" className="text-gray-300 hover:text-blue-400">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-blue-400">
                About Us
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-blue-400">
                Projects
              </Link>
              <Link to="/activities" className="text-gray-300 hover:text-blue-400">
                Activities
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* ===================== ROUTES ===================== */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>

        {/* ===================== FOOTER ===================== */}
        <footer className="bg-gray-900 py-8 mt-20">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Aksamatrix. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;