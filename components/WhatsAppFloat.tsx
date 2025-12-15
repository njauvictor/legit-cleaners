"use client"

import { MessageCircle } from "lucide-react"
import { initialData } from "@/lib/db-data"
import { useEffect, useState } from "react"

export default function WhatsAppFloat() {
  const { company } = initialData
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Use the WhatsApp URL from company social links
  const whatsappUrl = company.socialLinks.whatsapp

  // Show the button after a short delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform ${
          isHovered ? "scale-110 shadow-3xl" : "scale-100"
        }`}
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
      
      {/* Optional: Text label that appears on hover */}
      {isHovered && (
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
          Chat with us!
          <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-slate-900 rotate-45"></div>
        </div>
      )}
    </div>
  )
}
