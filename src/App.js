import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Works from './pages/Works';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import './App.css';
import './style.css';
import { FaArrowUp } from 'react-icons/fa';


function App() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App bg-orange-50 text-orange-600">
      <header className="p-4 flex justify-between items-center">
        <p className="text-sm md:text-xl font-bold"><Link to="/">Kota Hisafuru</Link></p>
        <nav>
          <ul className="flex text-xs md:text-xl space-x-2 md:space-x-4">
            <li><Link to="/">About</Link></li>
            <li><Link to="/works">Works</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="h-32 p-4 bg-orange-100 text-center text-xs flex flex-col justify-between items-center">
        <button 
          onClick={scrollToTop} 
          className="mt-4 px-4 py-2 bg-orange-600 text-white rounded flex items-center"
        >
          <FaArrowUp className="mr-2" />
          PAGE TOP
        </button>
        <p className="mt-auto">All Rights Reserved {currentYear} @ Kota Hisafuru</p>
      </footer>
    </div>
  );
}

export default App;
