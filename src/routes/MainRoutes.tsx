import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Portfolio from '../pages/Portfolio/Portfolio';

export default function MainRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

