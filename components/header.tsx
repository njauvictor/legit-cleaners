"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { initialData } from "@/lib/db-data"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { company } = initialData

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md border-b border-sky-100 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-12  flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex flex-col group flex-shrink-0">
          <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
            Legit <span className="text-sky-400">Cleaners</span>
          </div>
          <hr className="border-sky-400 dark:border-slate-500 my-1" />
          <p className="text-xs font-medium text-gray-500">Cleaning & Fumigation Services</p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 items-center text-sm">
          <Link href="/" className="text-foreground hover:text-primary font-semibold transition">
            Home
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary font-semibold transition">
            About
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary font-semibold transition">
            Services
          </Link>
          <Link href="/portfolio" className="text-foreground hover:text-primary font-semibold transition">
            Portfolio
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary font-semibold transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-sky-500 transition-all transform hover:scale-105 shadow-md"
          >
            {company.phone}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-800 border-t border-sky-100 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link
              href="/"
              className="text-foreground hover:text-primary font-semibold py-2 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary font-semibold py-2 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary font-semibold py-2 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-foreground hover:text-primary font-semibold py-2 transition"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary font-semibold py-2 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="bg-primary text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-sky-500 transition-all mt-2"
            >
              Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
