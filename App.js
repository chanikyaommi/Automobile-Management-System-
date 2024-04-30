import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import About from './About';
import Contact from './Contact';
import SelectedCar from './SelectedCar';
import Services from './Services';
import Sell from './Sell'; // Import the Sell component


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/selected-car/:carName" element={<SelectedCar />} />
                <Route path="/services" element={<Services />} />
                <Route path="/sell" element={<Sell />} />
                
                
            </Routes>
        </Router>
    );
}

export default App;
