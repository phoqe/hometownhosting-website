"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-mode/CBILD5L63GQP3DFMO7VFQ.jpg"
          alt="Modern apartment interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-pretty text-lg text-white/95 sm:text-xl leading-relaxed drop-shadow-md">
            {t.hero.subtitle}
          </p>
          <p className="mt-4 text-pretty text-base text-white/90 leading-relaxed drop-shadow-md">
            {t.hero.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group w-full sm:w-auto bg-white text-black hover:bg-white/90" asChild>
              <a href="#contact">
                {t.hero.getStarted}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="#schedule">
                <Calendar className="mr-2 h-4 w-4" />
                {t.hero.scheduleConsultation}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
