"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingActionSidebar from "@/components/FloatingActionSidebar";
import SectionNavSidebar from "@/components/SectionNavSidebar";
import ServicesSection from "@/components/ServicesSection";
// import StickyOfferPanel from "@/components/StickyOfferPanel";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorsTeam from "@/components/DoctorsTeam";
import Testimonials from "@/components/Testimonials";
import FAQsSection from "@/components/FAQsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import GallerySection from "@/components/gallery-section";

import { faqs } from "@/data/faqs";

export default function Home() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section id="home">
        <HeroSection />
      </section>

      <FloatingActionSidebar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex gap-8">
          <SectionNavSidebar />

          <div className="flex-1 min-w-0">
            <section id="services" className="py-16 md:py-20">
              <ServicesSection />
            </section>

            <section id="team" className="py-16 md:py-20">
              <DoctorsTeam />
            </section>

            <section id="gallery-section" className="py-16 md:py-20">
              <GallerySection />
            </section>

            <section id="why-choose-us" className="py-16 md:py-20">
              <WhyChooseUs />
            </section>

            <section id="testimonials" className="py-16 md:py-20">
              <Testimonials />
            </section>

            <section id="faqs" className="py-16 md:py-20">
              <FAQsSection />
            </section>

            <section id="contact" className="py-16 md:py-20">
              <ContactSection />
            </section>
          </div>

          {/* <StickyOfferPanel /> */}
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}