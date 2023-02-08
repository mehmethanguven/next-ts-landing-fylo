import { EarlyAccess } from '@/components/early-access'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero/Hero'
import { Productive } from '@/components/productive'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <div className="pt-10 bg-white font-opensans dark:bg-darkBlue dark:text-white">
      {/* <!-- Header --> */}

      <Header />
      {/* <!-- Hero Section --> */}

      <Hero />
      {/* <!-- Features Section --> */}
      <Features />

      {/* <!-- Productive Section --> */}
      <Productive />
      {/* <!-- Testimonials Section --> */}
      <Testimonials />

      {/* <!-- Early Access Section --> */}
      <EarlyAccess />

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}
