import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { WhyUsSection } from '@/components/landing/WhyUsSection';
import { BeforeAfterSection } from '@/components/landing/BeforeAfterSection';
import { TriageWidget } from '@/components/landing/TriageWidget';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { ContactSection } from '@/components/landing/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TriageWidget />
      <ServicesSection />
      <AboutSection />
      <BeforeAfterSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
