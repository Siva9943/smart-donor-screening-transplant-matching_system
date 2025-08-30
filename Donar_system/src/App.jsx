import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeManager from './Emp';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Donor_page from './pages/donor_page';
import Recipient_info from './pages/Recipient_Info';
import Activities from './pages/Activities';
import Blog from './pages/blog';
import Contact from './pages/contact';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donor" element={<Donor_page />} />
          <Route path="/recipient" element={<Recipient_info />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}





