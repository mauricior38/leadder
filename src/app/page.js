import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Team from '@/components/Team';
import Features from '@/components/Features';
import Clients from '@/components/Clients';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Team />
      <Features />
      <Clients />
      <WhyUs />
      <HowItWorks />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
