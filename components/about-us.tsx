"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Camera, MessageSquare, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const iconMap = [Camera, MessageSquare, Sparkles]

export function AboutUs() {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.about.title}
          </h2>
        </div>

        {/* Intro */}
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">{t.about.intro}</p>
        </div>

        {/* Philosophy */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">{t.about.philosophyTitle}</h3>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-4">{t.about.philosophyIntro}</p>
          <ul className="space-y-3">
            {t.about.philosophyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">•</span>
                <span className="text-pretty text-lg text-muted-foreground leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Team */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{t.about.teamTitle}</h3>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-8 text-center">
            {t.about.teamIntro}
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {t.about.teamMembers.map((member, index) => {
              const Icon = iconMap[index]
              return (
                <Card key={index} className="border-2 bg-card transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mb-2 text-xl font-semibold text-card-foreground">{member.title}</h4>
                    <p className="text-pretty text-muted-foreground leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <p className="text-pretty text-base text-muted-foreground leading-relaxed text-center italic">
            {t.about.teamNote}
          </p>
        </div>

        {/* Guarantee */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">{t.about.guaranteeTitle}</h3>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">{t.about.guaranteeText}</p>
        </div>
      </div>
    </section>
  )
}
