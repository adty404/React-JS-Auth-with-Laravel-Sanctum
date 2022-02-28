import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home'
import About from '../views/About'
import Navbar from '../components/Navbar';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';

function Router(props) {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="mt-4"></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;