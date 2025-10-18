"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { sendContactEmail } from "@/app/actions"
import { useLanguage } from "@/lib/language-context"

export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [interestError, setInterestError] = useState(false)

  const handleCheckboxChange = (option: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, option] : prev.interests.filter((item) => item !== option),
    }))
    setInterestError(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.interests.length === 0) {
      setInterestError(true)
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        alert(t.contact.form.successMessage)
        setFormData({ name: "", email: "", phone: "", interests: [], message: "" })
      } else {
        alert(t.contact.form.errorMessage)
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      alert(t.contact.form.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-3xl">{t.contact.form.title}</CardTitle>
        <CardDescription className="text-base">{t.contact.form.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{t.contact.form.name}</Label>
            <Input
              id="name"
              placeholder={t.contact.form.namePlaceholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t.contact.form.email}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t.contact.form.emailPlaceholder}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t.contact.form.phone}</Label>
            <Input
              id="phone"
              type="tel"
              placeholder={t.contact.form.phonePlaceholder}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-3">
            <Label className="text-base">
              {t.contact.form.interests} <span className="text-destructive">*</span>
            </Label>
            <div className="space-y-3 rounded-lg border p-4">
              {t.contact.form.interestOptions.map((option) => (
                <div key={option} className="flex items-start gap-3">
                  <Checkbox
                    id={option}
                    checked={formData.interests.includes(option)}
                    onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                  />
                  <label
                    htmlFor={option}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {interestError && <p className="text-sm text-destructive">{t.contact.form.interestsRequired}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t.contact.form.message}</Label>
            <Textarea
              id="message"
              placeholder={t.contact.form.messagePlaceholder}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
          </Button>
        </form>

        <div className="mt-8 space-y-4 border-t pt-8">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">{t.contact.form.emailLabel}</p>
              <p className="text-sm text-muted-foreground">hej@hometownhosting.se</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">{t.contact.form.phoneLabel}</p>
              <p className="text-sm text-muted-foreground">+46704969606</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">{t.contact.form.locationLabel}</p>
              <p className="text-sm text-muted-foreground">{t.contact.form.locationText}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
