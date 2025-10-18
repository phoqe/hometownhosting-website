import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { OurServices } from "@/components/our-services"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <OurServices />
      <ContactSection />
      <Footer />
    </main>
  )
}
