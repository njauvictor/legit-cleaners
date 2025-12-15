import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import "./globals.css"
import Header from "@/components/header"

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Legit Cleaners | Professional Cleaning & Fumigation Services in Nairobi, Kenya",
  description:
    "Premium cleaning & fumigation services for homes & businesses in Nairobi. Residential, commercial, carpet cleaning, post-construction, upholstery & pest control. Book your service today!",
  keywords: "cleaning services Nairobi, professional cleaning Kenya, home cleaning, office cleaning, carpet cleaning, fumigation services, pest control, upholstery cleaning, post-construction cleaning, commercial cleaning",
  authors: [{ name: "Legit Cleaners" }],
  creator: "Legit Cleaners",
  publisher: "Legit Cleaners",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://legit-cleaners.vercel.app",
    title: "Legit Cleaners | Professional Cleaning & Fumigation Services in Nairobi",
    description: "Premium cleaning & fumigation services for homes & businesses in Nairobi. Book your service today!",
    siteName: "Legit Cleaners",
    images: [
      {
        url: "https://legit-cleaners.vercel.app/hero-clean.jpg",
        width: 1200,
        height: 630,
        alt: "Legit Cleaners - Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legit Cleaners | Professional Cleaning Services Nairobi",
    description: "Premium cleaning & fumigation services for homes & businesses in Nairobi",
    images: ["https://legit-cleaners.vercel.app/hero-clean.jpg"],
    creator: "@legitcleaners",
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
    other: {
      me: ["https://legit-cleaners.vercel.app"],
    },
  },
  alternates: {
    canonical: "https://legit-cleaners.vercel.app",
  },
  category: "cleaning services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Legit Cleaners",
    "description": "Premium cleaning & fumigation services for homes & businesses in Nairobi, Kenya",
    "url": "https://legit-cleaners.vercel.app",
    "logo": "https://legit-cleaners.vercel.app/icon.svg",
    "telephone": "+254740479221",
    "email": "Legitcleaning001@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gill House, Moi Avenue, 1st Floor",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.286389",
      "longitude": "36.817223"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "serviceType": [
      "Residential Cleaning",
      "Commercial Cleaning", 
      "Carpet Cleaning",
      "Upholstery Cleaning",
      "Post-Construction Cleaning",
      "Fumigation Services",
      "Pest Control",
      "Mattress Cleaning",
      "Toilet Cleaning",
      "Terrazzo & Tile Cleaning",
      "Car Interior Cleaning",
      "Sanitary Bins Disposal",
      "Curtains Steaming",
      "Kitchen Cleaning",
      "Routine Cleaning"
    ],
    "areaServed": ["Nairobi", "Kiambu", "Machakos", "Kajiado"],
    "sameAs": [
      "https://www.facebook.com/legitcleaningkenya",
      "https://www.instagram.com/legitcleaning/",
      "https://www.tiktok.com/@www.legitcleaning"
    ]
  }

  return (
    <html lang="en" className="w-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} antialiased overflow-x-hidden overflow-y-scroll scrollbar-none `}>
           <Header />
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
