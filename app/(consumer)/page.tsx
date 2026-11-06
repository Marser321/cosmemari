import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { WhyUsSection } from '@/components/landing/WhyUsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { ContactSection } from '@/components/landing/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
