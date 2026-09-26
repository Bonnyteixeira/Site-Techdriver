import React from 'react';
import WhiteLabelHero from '../components/WhiteLabelHero';
import WhiteLabelHowItWorks from '../components/WhiteLabelHowItWorks';
import WhiteLabelPackage from '../components/WhiteLabelPackage';
import Features from '../components/Features';
import Contact, { WHITE_LABEL_INTEREST } from '../components/Contact';

const WhiteLabel: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-tec-dark">
      <WhiteLabelHero />
      <WhiteLabelHowItWorks />
      <WhiteLabelPackage />
      <Features />
      <Contact fixedInterest={WHITE_LABEL_INTEREST} />
    </div>
  );
};

export default WhiteLabel;
