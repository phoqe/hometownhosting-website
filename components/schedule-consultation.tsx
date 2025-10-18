"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ScheduleConsultation() {
  const { t } = useLanguage()
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-username"

  const openCalendly = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Card className="border-2 bg-primary/5">
      <CardHeader>
        <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <Calendar className="h-6 w-6" />
        </div>
        <CardTitle className="text-3xl">{t.contact.schedule.title}</CardTitle>
        <CardDescription className="text-base">{t.contact.schedule.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button
            onClick={openCalendly}
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {t.contact.schedule.button}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
