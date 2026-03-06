import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import AboutHero from './components/AboutHero';
import BrandStory from './components/BrandStory';
import ManagementMessage from './components/ManagementMessage';
import ManifestoSection from './components/ManifestoSection';

export default function About() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <AboutHero />
      <BrandStory />
      <ManagementMessage />
      <ManifestoSection />
      <Footer />
    </div>
  );
}
