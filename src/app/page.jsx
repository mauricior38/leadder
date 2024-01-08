import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Team } from '@/components/Team'
import { Features } from '@/components/Features'
import { ClientTrusted } from '@/components/ClientTrusted'
import { HowItWorks } from '@/components/HowItWorks'
import { WhyUs } from '@/components/WhyUs'
import { Steps } from '@/components/Steps'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Team />
        <Features />
        <ClientTrusted />
        <WhyUs />
        <HowItWorks />
        <Steps />
        <link
          rel="stylesheet"
          href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css"
        />{' '}
        <a
          id="robbu-whatsapp-button"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5511911110140"
        >
          {' '}
          <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg" />{' '}
        </a>
        {/* <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
