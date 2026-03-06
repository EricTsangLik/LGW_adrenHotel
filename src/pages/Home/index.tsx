import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import FeatureSection from './components/FeatureSection';
import IntroductionSection from './components/IntroductionSection';
import AmenitiesSection from './components/AmenitiesSection';
import MapSection from './components/MapSection';
import PageLinks from './components/PageLinks';
import QuoteSection from './components/QuoteSection';
import AnimatedSection from '../../components/common/AnimatedSection';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      
      <AnimatedSection direction="up" delay={100}>
        <InfoSection />
      </AnimatedSection>
      
      <AnimatedSection direction="left" delay={200}>
        <FeatureSection />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={200}>
        <IntroductionSection />
      </AnimatedSection>
      
      <AnimatedSection direction="right" delay={200}>
        <AmenitiesSection />
      </AnimatedSection>
      
      <AnimatedSection direction="left" delay={200}>
        <MapSection />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={200}>
        <PageLinks />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={300}>
        <QuoteSection />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}
