import { NextSeo } from 'next-seo';
import { twMerge } from 'tailwind-merge';
import {
  ApplicationsAndInfrastructureSection,
  HeroSection,
  InActionSection,
  PrivacyConnectedSection,
  PrivacyScaleSection,
  ResearchAndDevelopmentSection,
} from '../components';

const description =
  'Webb builds infrastructure for connecting zero-knowledge applications empowering developers to unlock user privacy in the Web3 ecosystem.';

export function Index() {
  return (
    <>
      <NextSeo
        description={description}
        canonical="https://webb.tools/"
        openGraph={{
          title: 'Privacy that Brings Blockchains Together',
          description,
          url: 'https://webb.tools/',
        }}
      />

      <div
        className={twMerge(
          'flex items-center justify-center',
          'w-screen h-[calc(100vh-var(--header-height))]',
          'bg-[url(/animations/hero-loop.gif)] bg-cover bg-bottom bg-no-repeat)]'
        )}
      >
        {/*         <Lottie
          path="/animations/hero-loop.json"
          play
          loop
          className="absolute inset-0"
          rendererSettings={{ preserveAspectRatio: 'xMidYMax slice' }}
        /> */}
        {/* <Image
          className="object-cover"
          src={'/animations/hero-loop.gif'}
          sizes="(max-width: 1024px) 100vw, 50vw"
          fill
          priority
          alt={`Hero loop animation`}
          unoptimized={true}
        /> */}

        <HeroSection />
      </div>

      <PrivacyConnectedSection />

      <PrivacyScaleSection />

      <ApplicationsAndInfrastructureSection />

      <InActionSection />

      <ResearchAndDevelopmentSection />
    </>
  );
}

export default Index;
