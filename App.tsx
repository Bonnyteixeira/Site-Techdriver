import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Franchise from './pages/Franchise';
import WhiteLabel from './pages/WhiteLabel';
import Solutions from './pages/Solutions';
import Driver from './pages/Driver';
import Contact from './pages/Contact';
import System from './pages/System';
import AllFeatures from './pages/AllFeatures';

function App() {
  return (
    <HashRouter>
      <div className="antialiased text-slate-100 bg-tec-dark font-sans selection:bg-tec-primary selection:text-white flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/franquias" element={<Franchise />} />
            <Route path="/white-label" element={<WhiteLabel />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/sistema" element={<System />} />
            <Route path="/funcionalidades" element={<AllFeatures />} />
            <Route path="/motorista" element={<Driver />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;