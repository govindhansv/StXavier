import Banner from "./components/Banner";
import ContactFooter from "./components/ContactFooter";
import DirectorsMessage from "./components/DirectorsMessage";
import Eumind from "./components/Eumind";
import EumindDetails from "./components/EumindDetails";
import FacilitiesGrid from "./components/FacilitiesGrid";
import FacilitiesSection from "./components/FacilitiesSection";
import ExtraCurricularActivities from "./components/ExtraCurricularActivities";
import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/navbar";
import NewsAndEvents from "./components/NewsAndEvents";
import PreviousEvents from "./components/PreviousEvents";
import StatsDashboard from "./components/StatsSection";
import TeachersSection from "./components/TeachersSection";
import UpcomingEvents from "./components/UpcomingEvents";
import Testimonials from "./components/Testimonials";
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
        <FacilitiesSection />
        <FacilitiesGrid />
        <Eumind />
        <EumindDetails />
        <TeachersSection />
        <UpcomingEvents />
        <ContactFooter />
        <ExtraCurricularActivities/>
        <NewsAndEvents/>
        <PreviousEvents/>
        <ImageGallery/>
        <Testimonials/>


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
