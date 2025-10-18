"use client"

import { Instagram, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">{t.footer.about.title}</h3>
            <p className="text-pretty text-sm text-muted-foreground leading-relaxed">{t.footer.about.description}</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">{t.footer.contact.title}</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@hometownhosting.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                info@hometownhosting.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">{t.footer.follow.title}</h3>
            <a
              href="https://instagram.com/hometownhosting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              @hometownhosting
            </a>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Hometown Hosting. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
