"use client"

import { Camera, MessageCircle, KeyRound, TrendingUp, Sparkles, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const iconMap = [Camera, KeyRound, Sparkles, MessageCircle, TrendingUp, Package]

export function OurServices() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-balance font-serif text-4xl font-bold tracking-tight md:text-5xl">
              {t.services.title}
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">{t.services.subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, index) => {
              const Icon = iconMap[index]
              return (
                <Card key={index} className="border-border/50 transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="text-pretty text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
