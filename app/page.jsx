import Banner from "./components/Banner";
import DirectorsMessage from "./components/DirectorsMessage";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import StatsDashboard from "./components/StatsSection";
import VisionMissionSection from "./components/VisionMissionSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import WhyUsSection from "./components/WhyUsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative bg-white pt-24">
        <Banner />
        <HeroSection />
        <StatsDashboard />
        <WhoWeAreSection />
        <VisionMissionSection />
        <WhyUsSection />
        <DirectorsMessage />


        {/* 
        <DirectorsMessage />
        <FacilitiesSection/>
        <FacilitiesGrid/>
        <ExtraCurricularActivities/>
        <Eumind/>
        <EumindDetails/>
        <TeachersSection/>
        <NewsAndEvents/>
        <UpcomingEvents/>
        <PreviousEvents/>
        <ImageGallery/>
        <Testimonials/>
        <ContactFooter/> */}
      </div>
      {/* <HeroStats/> */}
    </>
  );
}
