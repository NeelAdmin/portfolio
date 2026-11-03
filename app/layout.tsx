import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Gabarito, Onest } from "next/font/google"
import "./globals.css"

const display = Gabarito({ subsets: ["latin"], variable: "--font-display" })
const text = Onest({ subsets: ["latin"], variable: "--font-text" })

export const metadata: Metadata = {
  title: "Neel Navadiya · Full-stack developer",
  description:
    "Neel Navadiya is a full-stack developer in Surat building React and Next.js front ends, Node and NestJS APIs, and role-based access control.",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
      <Script
        src="https://staging-widget.braoza.com/v1/assets/static-pages/injector.js"
        type="module"
        data-account="mqqdw4gqx7"
      />
    </html>
  )
}
