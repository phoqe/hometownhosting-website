import { Navigation } from "@/components/navigation"
import { AboutUs } from "@/components/about-us"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <AboutUs />
      </div>
      <Footer />
    </main>
  )
}
