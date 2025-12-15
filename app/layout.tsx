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
  title: "Legit Cleaners | Professional Cleaning Services Nairobi | Fumigation Services Nairobi",
  description:
    "Premium cleaning services for homes and businesses in Nairobi. Residential, commercial, carpet cleaning, and specialized services. Book your service today!",
  keywords: "cleaning services, professional cleaning, home cleaning, office cleaning, Nairobi, Kenya, carpet cleaning",
  openGraph: {
    title: "Legit Cleaners - Premium Cleaning Services",
    description: "Professional cleaning solutions for pristine spaces",
    type: "website",
  },
  robots: "index, follow",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="w-full">
      <body className={`${poppins.className} antialiased overflow-x-hidden overflow-y-scroll scrollbar-none `}>
           <Header />
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
