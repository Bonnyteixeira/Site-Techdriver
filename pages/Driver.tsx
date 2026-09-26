import React from 'react';
import DriverHero from '../components/DriverHero';
import DriverEarnings from '../components/DriverEarnings';
import DriverSteps from '../components/DriverSteps';
import DriverPlans from '../components/DriverPlans';
import DriverAppFeatures from '../components/DriverAppFeatures';
import DriverSafetyBenefits from '../components/DriverSafetyBenefits';
import DriverFAQ from '../components/DriverFAQ';
import DriverDownload from '../components/DriverDownload';

const Driver: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-tec-dark">
      <DriverHero />
      <DriverEarnings />
      <DriverSteps />
      <DriverPlans />
      <DriverAppFeatures />
      <DriverSafetyBenefits />
      <DriverFAQ />
      <DriverDownload />
    </div>
  );
};

export default Driver;
