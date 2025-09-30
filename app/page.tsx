import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Entrepreneur in AI and growth strategist. Case studies, portfolio, and ways to work together.',
  alternates: { canonical: '/' },
  openGraph: {
    images: ['/opengraph-image'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <StatsSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
