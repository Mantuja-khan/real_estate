import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import InfoGridSection from "@/components/InfoGridSection";
import HowToApply from "@/components/HowToApply";
import MapSection from "@/components/MapSection";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <HeroSection />
    <InfoGridSection />
    <HowToApply />
    <MapSection />
    <Footer />
  </div>
);

export default Index;
