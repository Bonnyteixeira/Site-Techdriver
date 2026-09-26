import React from 'react';
import SolutionsHero from '../components/SolutionsHero';
import SolutionsDashboards from '../components/SolutionsDashboards';
import Features from '../components/Features';
import Contact from '../components/Contact';

const Solutions: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-tec-dark">
      <SolutionsHero />
      <Features />
      <SolutionsDashboards />
      <Contact />
    </div>
  );
};

export default Solutions;
