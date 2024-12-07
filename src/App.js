import './App.css';
import './Mobile.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState , useEffect } from 'react';

import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Resume from './Components/Resume';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {

  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const iconElement = document.getElementById('icon');
    const bodyElement = document.body;

    // Set the initial state based on the default mode
    if (mode === 'dark') {
      bodyElement.classList.add('dark-mode');
      iconElement.classList.replace('fa-moon', 'fa-sun');
    } else {
      bodyElement.classList.remove('dark-mode');
      iconElement.classList.replace('fa-sun', 'fa-moon');
    }
  }, [mode]); // Include 'mode' as a dependency to re-run the effect when mode changes

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard mode={mode} toggleMode={toggleMode} />}>
            <Route index element={<Home mode={mode} />} />
            <Route path="home" element={<Home mode={mode} />} />
            <Route path="about" element={<About mode={mode}  />} />
            <Route path="resume" element={<Resume mode={mode} />} />
            <Route path="project" element={<Project mode={mode}  />} />
            <Route path="contact" element={<Contact mode={mode} />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;

// if0_37123896! 
// 3cGhLoHlONBMqrQ