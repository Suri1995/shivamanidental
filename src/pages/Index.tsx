import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingActionSidebar from "@/components/FloatingActionSidebar";
import SectionNavSidebar from "@/components/SectionNavSidebar";
import ServicesSection from "@/components/ServicesSection";
import StickyOfferPanel from "@/components/StickyOfferPanel";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorsTeam from "@/components/DoctorsTeam";
import Testimonials from "@/components/Testimonials";
import FAQsSection from "@/components/FAQsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FloatingActionSidebar />

      {/* Main content area with both sticky sidebars */}
      <div className="section-container">
        <div className="flex gap-8">
          {/* Left sticky nav */}
          <SectionNavSidebar />

          {/* Center content - all sections */}
          <div className="flex-1 min-w-0">
            <section id="services" className="section-padding">
              <ServicesSection />
            </section>
            <section id="why-choose-us" className="section-padding">
              <WhyChooseUs />
            </section>
            <section id="team" className="section-padding">
              <DoctorsTeam />
            </section>
            <section id="testimonials" className="section-padding">
              <Testimonials />
            </section>
            <section id="faqs" className="section-padding">
              <FAQsSection />
            </section>
            <section id="contact" className="section-padding">
              <ContactSection />
            </section>
          </div>

          {/* Right sticky offer panel */}
          <StickyOfferPanel />
        </div>
      </div>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Index;
