import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CasesSection } from "@/components/cases-section"
import { PlansSection } from "@/components/plans-section"
import { TeamSection } from "@/components/team-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CasesSection />
        <PlansSection />
        <TeamSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
