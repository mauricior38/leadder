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
import {ClientTrusted} from '@/components/ClientTrusted'
import {WhyUs} from '@/components/WhyUs'

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
