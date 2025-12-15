"use client"

import Link from "next/link"
import { initialData } from "@/lib/db-data"
import { Phone, Mail, MapPin, Facebook, Instagram  } from "lucide-react"

export default function Footer() {
  const { company, footer } = initialData

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-12  py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          {/* Logo */}
        <Link href="/" className="flex flex-col group flex-shrink-0">
          <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
            Legit <span className="text-sky-400">Cleaners</span>
          </div>
          <hr className="border-sky-400 dark:border-slate-500 my-2" />
          <p className="text-xs font-medium text-accent">Cleaning & Fumigation Services</p>
           {/* Social Links */}
        <div className="space-y-3 flex my-4">
          {company.socialLinks.facebook && (
            <a
              href={company.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition font-medium"
            >
              <Facebook size={20} />
            </a>
          )}
          {company.socialLinks.instagram && (
            <a
              href={company.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-gray-300 hover:text-primary transition font-medium"
            >
              <Instagram size={20} />
            </a>
          )}

            {company.socialLinks.tiktok && (
            <a
              href={company.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-gray-300 hover:text-primary transition font-medium"
            >
             TikTok
            </a>
          )}



         

               
        </div> 
        
        </Link>

      

        

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-lg mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {footer.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary transition font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-lg mb-6 text-primary">Services</h3>
            <ul className="space-y-3">
              {footer.services.slice(0, 4).map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href} className="text-gray-300 hover:text-primary transition font-medium">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-black text-lg mb-6 text-primary">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="text-gray-300 hover:text-primary transition font-medium">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-gray-300 hover:text-primary transition font-medium">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-gray-400">
          <p>{footer.copyrightText}</p>
        </div>
      </div>
    </footer>
  )
}
