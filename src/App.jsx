import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Admissions from './components/Admissions';
import Alumni from './components/Alumni';
import News from './components/News';
import Questions from './components/Questions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About Us" element={<About/>} />
        <Route path="/Contact Us" element={<Contact/>} />
        <Route path="/Admissions" element={<Admissions/>} />
        <Route path="/Alumni" element={<Alumni/>} />
        <Route path="/News & Events" element={<News/>} />
        <Route path="/Questions" element={<Questions/>} />
      </Routes>
    </Router>
  );
}


export default App;
