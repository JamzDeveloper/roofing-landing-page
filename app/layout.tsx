import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://zproofing.com"),
  title: {
    default: "ZPR Roofing | Professional Roofing Services in Rockford, IL",
    template: "%s | ZPR Roofing",
  },
  description:
    "Professional roofing contractor offering dependable roofing solutions for homeowners. Locally owned and operated. Se habla español.",
  keywords: [
    "roofing Rockford IL",
    "roof repair Rockford",
    "roof installation",
    "licensed roofer",
    "storm damage repair",
    "roof replacement",
    "Northern Illinois roofing",
  ],
  authors: [{ name: "ZPR Roofing" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zproofing.com",
    title: "ZPR Roofing | Professional Roofing Services in Rockford, IL",
    description:
      "Professional roofing contractor offering dependable roofing solutions for homeowners. Locally owned and operated. Se habla español.",
    siteName: "ZPR Roofing",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZPR Roofing | Professional Roofing Services",
    description:
      "Professional roofing contractor offering dependable roofing solutions for homeowners. Locally owned and operated. Se habla español.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  icons: {
    icon: '/zpr-logo.svg',
    shortcut: '/zpr-logo.svg',
    apple: '/zpr-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="NiC6IylfCAzclWxmgAPnSclJry1FegpyeW5TNUck2UQ" />
        <link rel="icon" href="/zpr-logo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/zpr-logo.svg" />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
