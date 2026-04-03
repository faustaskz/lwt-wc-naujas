/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkAndTravelUSA from './pages/WorkAndTravelUSA';
import Programs from './pages/Programs';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import FAQ from './pages/FAQ';
import Reservation from './pages/Reservation';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programos/work-and-travel-usa" element={<WorkAndTravelUSA />} />
            <Route path="/programos" element={<Programs />} />
            <Route path="/apie-mus" element={<AboutUs />} />
            <Route path="/kontaktai" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/rezervacija" element={<Reservation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
