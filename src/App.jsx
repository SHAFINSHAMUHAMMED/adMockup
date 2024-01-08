import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/navbar'
import Fb from './components/fb/Fb'
import Instagram from './components/Instagram/instagram';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/facebook" element={<Fb />} />
        <Route path="/instagram" element={<Instagram />} />
        {/* <Route path="/google" element={<Google />} /> */}
      </Routes>
    </Router>
  )
}

export default App
