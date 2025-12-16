import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Features from '../components/Features';
import SocialProof from '../components/SocialProof';
import Presence from '../components/Presence';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Features />
      <Presence />
      <SocialProof />
      <Contact />
    </>
  );
};

export default Home;