import Header from "./_components/home/AboutSection.jsx";
import MeetingSection from "./_components/home/MeetingSection.jsx";
import VisionSection from "./_components/home/VisionSection.jsx";
import Footer from "./_components/home/Footer.jsx";
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
