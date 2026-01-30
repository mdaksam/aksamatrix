import logo from './images/logo.png';
import { Github, Linkedin, Mail, ExternalLink, Building2, Brain, Database, LineChart as ChartLine, Code2 } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Timeline from './pages/Timeline';
import Activities from './pages/Activities';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {
  return (
    <Router basename="/aksamatrix">
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Navigation */}
        <nav className="bg-gray-900 py-4 sticky top-0 z-50 shadow-md">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white hover:text-blue-400 transition-colors">
                <img src={logo} alt="Aksamatrix Logo" className="w-8 h-8" />
                 <span>Aksamatrix</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link>
                <Link to="/timeline" className="text-gray-300 hover:text-blue-400 transition-colors">Timeline</Link>
                <Link to="/activities" className="text-gray-300 hover:text-blue-400 transition-colors">Activities</Link>
                <Link to="/research" className="text-gray-300 hover:text-blue-400 transition-colors">Research</Link>
                <Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</Link>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/mdaksamvk" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/mdaksamvk/" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:mdaksamvk@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden mt-4 flex flex-wrap justify-center gap-4">
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/timeline" className="text-gray-300 hover:text-blue-400 transition-colors">Timeline</Link>
              <Link to="/activities" className="text-gray-300 hover:text-blue-400 transition-colors">Activities</Link>
              <Link to="/research" className="text-gray-300 hover:text-blue-400 transition-colors">Research</Link>
              <Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 py-8">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>© 2024 Aksamatrix. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;