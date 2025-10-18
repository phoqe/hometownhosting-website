import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
})

import { Libre_Baskerville, IBM_Plex_Mono, Lora, Libre_Baskerville as V0_Font_Libre_Baskerville, IBM_Plex_Mono as V0_Font_IBM_Plex_Mono, Lora as V0_Font_Lora } from 'next/font/google'

// Initialize fonts
const _libreBaskerville = V0_Font_Libre_Baskerville({ subsets: ['latin'], weight: ["400","700"] })
const _ibmPlexMono = V0_Font_IBM_Plex_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _lora = V0_Font_Lora({ subsets: ['latin'], weight: ["400","500","600","700"] })

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Hometown Hosting | Make More Money From Your Property",
  description:
    "We host your apartment on Airbnb, Booking.com and Homeway. Professional short-term rental management - we handle bookings, guests, and cleaning.",
  generator: "v0.app",
  icons: {
    icon: "/images/LOGO-Cursor.png",
    apple: "/images/LOGO-Cursor.png",
  },
  openGraph: {
    title: "Hometown Hosting Stockholm",
    description: "Professional short-term rental management in Stockholm",
    images: ["/images/LOGO-Cursor.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${ibmPlexMono.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
