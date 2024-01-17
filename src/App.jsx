import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home';
import Fb from './components/fb/Fb'
import Instagram from './components/Instagram/instagram';
import Google from './components/Google/Google';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/facebook" element={<Fb />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/google" element={<Google />} />
      </Routes>
    </Router>
  )
}

export default App
