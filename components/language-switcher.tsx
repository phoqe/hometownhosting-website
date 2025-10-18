"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-white/70" />
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 px-2 text-sm ${
            language === "sv"
              ? "bg-white/20 text-white hover:bg-white/30"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          }`}
          onClick={() => setLanguage("sv")}
        >
          SV
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 px-2 text-sm ${
            language === "en"
              ? "bg-white/20 text-white hover:bg-white/30"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </Button>
      </div>
    </div>
  )
}
