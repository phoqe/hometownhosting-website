"use client"

import { ContactForm } from "@/components/contact-form"
import { ScheduleConsultation } from "@/components/schedule-consultation"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 text-balance font-serif text-4xl font-bold tracking-tight md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="text-pretty text-xl text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ContactForm />
          </div>
          <div id="schedule">
            <ScheduleConsultation />
          </div>
        </div>
      </div>
    </section>
  )
}
