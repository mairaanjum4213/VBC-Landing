import Header from "./_components/home/AboutSection";
import MeetingSection from "./_components/home/MeetingSection";
import VisionSection from "./_components/home/VisionSection";
import Footer from "./_components/home/Footer";
import Contact from "./_components/home/Contact";
import Navbar from "./_components/home/Navbar";
import HeroSection from './_components/home/HeroSection.jsx'
export default function Home() {
  return (
    <>
      <div className="bg-bgGray">
        <Navbar />
        <HeroSection />
        <Header />
        <MeetingSection />
        <VisionSection />
        <Footer />
      </div>
    </>
  );
}
