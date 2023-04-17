import {
  CommunitySection,
  HeroSection,
  IntroducingSection,
  GovernanceSystemSection,
  FeaturesSection,
  SupportedBySection,
} from '../components';

export function Index() {
  return (
    <div className="bg-body bg-top block max-w-[1440px] mx-auto">
      <HeroSection />

      <IntroducingSection />

      <FeaturesSection />

      <SupportedBySection />

      <GovernanceSystemSection />

      <CommunitySection />
    </div>
  );
}

export default Index;
