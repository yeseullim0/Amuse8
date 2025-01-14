import BackgroundSection from './sections/BackgroundSection';
import FeatureIntroSection from './sections/FeatureIntroSection';
import FeaturesSection from './sections/FeaturesSection';
import FeaturesSectionEndingSection from './sections/FeaturesSectionEndingSection';
import BenefitsSection from './sections/BenefitsSection';
import PrivacySection from './sections/PrivacySection';


export const MainContent = () => {
  return (
    <>
      <BackgroundSection />
      <FeatureIntroSection />
      <FeaturesSection />
      <FeaturesSectionEndingSection />
      <BenefitsSection />
      <PrivacySection />
    </>
  );
};

export default MainContent;  