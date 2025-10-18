"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EBE6DD]/85 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-40">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="relative h-36 w-36 overflow-hidden">
              <Image
                src="/images/design-mode/d4460e1f-3a99-4b92-989d-1afcad96fada-1%202.jpeg"
                alt="Hometown Hosting Stockholm"
                width={240}
                height={240}
                className="object-cover object-top scale-110"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              {t.nav.aboutUs}
            </a>
            <a href="/#services" className="text-gray-700 hover:text-gray-900 transition-colors">
              {t.nav.ourServices}
            </a>
            <Button size="sm" className="bg-[#6B9B9E] text-white hover:bg-[#5A8A8D]" asChild>
              <a href="/#contact">{t.nav.scheduleConsultation}</a>
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a
              href="/about"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.aboutUs}
            </a>
            <a
              href="/#services"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.ourServices}
            </a>
            <Button size="sm" className="w-full bg-[#6B9B9E] text-white hover:bg-[#5A8A8D]" asChild>
              <a href="/#contact" onClick={() => setIsOpen(false)}>
                {t.nav.scheduleConsultation}
              </a>
            </Button>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
