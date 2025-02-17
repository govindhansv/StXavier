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
import MBanner from "./components/mobile/MBanner";
import MHeroSection from "./components/mobile/MHeroSection";
import MStatsDashboard from "./components/mobile/MStatsDashboard";
import MWhoWeAreSection from "./components/mobile/MWhoWeAreSection";
import MFacilitiesSection from "./components/mobile/MFacilitiesSection";
import MDirectorsMessage from "./components/mobile/MDirectorsMessage";
import MWhyUsSection from "./components/mobile/MWhyUsSection";
import MVisionMissionSection from "./components/mobile/MVisionMissionSection";
import MTeachersSection from "./components/mobile/MTeachersSection";
import MTestimonials from "./components/mobile/MTestimonials";
import MNavbar from "./components/mobile/MNavbar";
import MContactFooter from "./components/mobile/MContactFooter";

export default function Home() {
  return (
    <>
      <div className="relative bg-white pt-20 lg:pt-24 hidden lg:block ">
        <Navbar />
        <Banner />
        <section id="about">
          <HeroSection />
        </section>
        <section id="stats">
          <StatsDashboard />
        </section>
        <section id="who-we-are">
          <WhoWeAreSection />
        </section>
        <section id="vision-mission">
          <VisionMissionSection />
        </section>
        <section id="why-us">
          <WhyUsSection />
        </section>
        <section id="directors-message">
          <DirectorsMessage />
        </section>
        <section id="facilities">
          <FacilitiesSection />
          <FacilitiesGrid />
        </section>
        <ExtraCurricularActivities />
        <section id="eumind">
          <Eumind />
          <EumindDetails />
        </section>
        <section id="news">
          <NewsAndEvents />
          <UpcomingEvents />
          <PreviousEvents />
        </section>
        <ImageGallery />
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactFooter />
        </section>
      </div>
      <div className="relative bg-white pt-20 lg:pt-24 block lg:hidden">
        <MNavbar />
        <Banner />
        <section id="about">
          <MHeroSection />
        </section>
        <section id="stats">
          <MStatsDashboard />
        </section>
        <section id="who-we-are">
          <MWhoWeAreSection />
        </section>
        <section id="vision-mission">
          <MVisionMissionSection />
        </section>
        <section id="why-us">
          <MWhyUsSection />
        </section>
        <section id="directors-message">
          <MDirectorsMessage />
        </section>
        <section id="facilities">
          <MFacilitiesSection />
          <FacilitiesGrid />
        </section>
        <ExtraCurricularActivities />
        <section id="eumind">
          <Eumind />
          <EumindDetails />
        </section>
        <section id="news">
          <NewsAndEvents />
          <UpcomingEvents />
          <PreviousEvents />
        </section>
        <ImageGallery />
        <section id="testimonials">
          <MTestimonials />
        </section>
        <section id="contact">
          <MContactFooter />
        </section>
      </div>
    </>
  );
}
