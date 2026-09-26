import React from 'react';
import FranchiseHero from '../components/FranchiseHero';
import FranchiseBenefits from '../components/FranchiseBenefits';
import FranchisePackage from '../components/FranchisePackage';
import FranchiseTimeline from '../components/FranchiseTimeline';
import FranchiseForm from '../components/FranchiseForm';
import FranchiseCTA from '../components/FranchiseCTA';

const Franchise: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-tec-dark">
      <FranchiseHero />
      <FranchiseBenefits />
      <FranchisePackage />
      <FranchiseTimeline />
      <FranchiseForm />
      <FranchiseCTA />
    </div>
  );
};

export default Franchise;