"use client"

import { MessageCircle, Phone, Instagram, Facebook } from "lucide-react"
import { initialData } from "@/lib/db-data"
import { useEffect, useState } from "react"

export default function WhatsAppFloat() {
  const { company } = initialData
  const [isVisible, setIsVisible] = useState(false)
  const [whatsappHovered, setWhatsappHovered] = useState(false)
  const [callHovered, setCallHovered] = useState(false)
  const [instagramHovered, setInstagramHovered] = useState(false)
  const [tiktokHovered, setTiktokHovered] = useState(false)
  const [facebookHovered, setFacebookHovered] = useState(false)

  // Use the WhatsApp URL from company social links
  const whatsappUrl = company.socialLinks.whatsapp
  const callUrl = `tel:${company.phone.replace(/\s/g, "")}`
  const instagramUrl = company.socialLinks.instagram
  const tiktokUrl = company.socialLinks.tiktok
  const facebookUrl = company.socialLinks.facebook

  // Show the button after a short delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // TikTok SVG icon
  const TikTokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105z" />
    </svg>
  )

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 flex flex-col items-end gap-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* WhatsApp Button */}
      <div className="relative">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform ${
            whatsappHovered ? "scale-110 shadow-3xl" : "scale-100"
          }`}
          style={{
            background: "linear-gradient(135deg, #25D366, #128C7E)",
          }}
          onMouseEnter={() => setWhatsappHovered(true)}
          onMouseLeave={() => setWhatsappHovered(false)}
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={28} className="text-white" />
        </a>
        
        {/* WhatsApp hover label */}
        {whatsappHovered && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
            Chat with us!
            <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-slate-900 rotate-45"></div>
          </div>
        )}
      </div>

      {/* Call Button */}
      <a
        href={callUrl}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-all duration-300 transform ${
          callHovered ? "scale-110 shadow-2xl" : "scale-100"
        }`}
        style={{
          background: "linear-gradient(135deg, #34b7f1, #34b7f1)",
        }}
        onMouseEnter={() => setCallHovered(true)}
        onMouseLeave={() => setCallHovered(false)}
        aria-label="Call us"
      >
        <Phone size={24} className="text-white" />
      </a>

      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-all duration-300 transform ${
          instagramHovered ? "scale-110 shadow-2xl" : "scale-100"
        }`}
        style={{
          background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
        }}
        onMouseEnter={() => setInstagramHovered(true)}
        onMouseLeave={() => setInstagramHovered(false)}
        aria-label="Follow us on Instagram"
      >
        <Instagram size={24} className="text-white" />
      </a>

      {/* TikTok Button */}
      <a
        href={tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-all duration-300 transform ${
          tiktokHovered ? "scale-110 shadow-2xl" : "scale-100"
        }`}
        style={{
          background: "linear-gradient(135deg, #000000, #25f4ee, #fe2c55)",
        }}
        onMouseEnter={() => setTiktokHovered(true)}
        onMouseLeave={() => setTiktokHovered(false)}
        aria-label="Follow us on TikTok"
      >
        <TikTokIcon />
      </a>

      {/* Facebook Button */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-all duration-300 transform ${
          facebookHovered ? "scale-110 shadow-2xl" : "scale-100"
        }`}
        style={{
          background: "linear-gradient(135deg, #1877f2, #1877f2)",
        }}
        onMouseEnter={() => setFacebookHovered(true)}
        onMouseLeave={() => setFacebookHovered(false)}
        aria-label="Follow us on Facebook"
      >
        <Facebook size={24} className="text-white" />
      </a>
    </div>
  )
}
