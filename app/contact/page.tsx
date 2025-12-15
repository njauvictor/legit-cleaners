"use client"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { initialData } from "@/lib/db-data"
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, MessageSquare, Users, ArrowRight, Sparkles } from "lucide-react"

export default function Contact() {
  const { company } = initialData
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // In a real app, this would send to a backend
    const whatsappMessage = `
👋 Hello Legit Cleaners!

I'm interested in your cleaning services:
────────────────────
Name: ${formData.name}
Service: ${formData.service}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
────────────────────
Please contact me with a quote. Thank you!`
    
    // Send via WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/${company.phone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
      setSubmitted(true)
      setIsSubmitting(false)
      setTimeout(() => setSubmitted(false), 5000)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 1500)
  }

  const serviceOptions = [
    "Residential Cleaning",
    "Commercial Cleaning",
    "Post-Construction Cleaning",
    "Carpet & Upholstery Cleaning",
    "Mattress Cleaning",
    "Fumigation & Pest Control",
    "Deep Cleaning & Sanitization",
    "Move-In/Move-Out Cleaning",
    "Sofa Cleaning",
    "Surface Cleaning",
    "Not Sure / Custom Quote"
  ]

  return (
    <>
   
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
              <MessageSquare size={18} /> GET IN TOUCH
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-balance tracking-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance mb-10">
              Let's discuss how we can transform your space. Get a free, no-obligation quote today!
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-black text-primary mb-1">15 min</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-black text-primary mb-1">100%</div>
                <div className="text-sm text-gray-300">Free Quote</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-black text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-300">Availability</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-black text-primary mb-1">10+</div>
                <div className="text-sm text-gray-300">Services</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Contact Information</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
                Choose your preferred method to reach us
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {/* Phone Card */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-200 dark:border-slate-600 group">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="text-primary" size={36} />
                </div>
                <h3 className="font-black text-2xl mb-3">Phone Call</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Speak directly with our team for immediate assistance</p>
                <a
                  href={`tel:${company.phone}`}
                  className="text-primary font-black text-xl hover:text-yellow-500 transition inline-flex items-center gap-2"
                >
                  {company.phone} <ArrowRight size={20} />
                </a>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <Clock size={14} /> Available 24/7
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-200 dark:border-slate-600 group">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="text-primary" size={36} />
                </div>
                <h3 className="font-black text-2xl mb-3">Email</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Send detailed inquiries and receive comprehensive responses</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-primary font-black text-lg hover:text-yellow-500 transition inline-flex items-center gap-2 break-all"
                >
                  {company.email} <ArrowRight size={20} />
                </a>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <CheckCircle size={14} /> Respond within 2 hours
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-200 dark:border-slate-600 group">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="text-primary" size={36} />
                </div>
                <h3 className="font-black text-2xl mb-3">Location</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Visit our office for in-person consultations</p>
                <p className="text-slate-900 dark:text-white font-bold text-lg">{company.location}</p>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <Users size={14} /> By appointment
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                  <Send size={18} /> SEND US A MESSAGE
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Request a Free Quote</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 text-balance">
                  Fill out the form below and we'll provide a detailed quote within 15 minutes
                </p>
              </div>

              {submitted && (
                <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 p-6 rounded-2xl flex items-center gap-4 animate-fade-in">
                  <div className="bg-green-500 text-white p-3 rounded-full">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-green-700 dark:text-green-400 text-xl mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-600 dark:text-green-300">
                      We've received your inquiry and will contact you shortly via WhatsApp with your free quote.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label className="block font-black mb-3 text-slate-900 dark:text-white">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded-xl px-4 py-4 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
                        
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block font-black mb-3 text-slate-900 dark:text-white">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded-xl px-4 py-4 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
                        
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block font-black mb-3 text-slate-900 dark:text-white">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded-xl px-4 py-4 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
                        
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block font-black mb-3 text-slate-900 dark:text-white">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded-xl px-4 py-4 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition appearance-none"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-8">
                      <label className="block font-black mb-3 text-slate-900 dark:text-white">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded-xl px-4 py-4 h-48 resize-none focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
                        placeholder="Please provide details about your space, specific requirements, and any special requests..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-primary to-yellow-400 text-slate-900 font-black py-5 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg text-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} /> Get Free Quote on WhatsApp
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-600 dark:text-gray-400 mt-4 text-sm">
                      We'll respond within 15 minutes via WhatsApp
                    </p>
                  </form>
                </div>

                {/* Side Information */}
                <div className="space-y-8">
                  {/* Why Choose Us */}
                  <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-2xl border border-primary/20">
                    <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                      <Sparkles className="text-primary" size={20} /> Why Contact Us?
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                        <span className="font-medium">Free, No-Obligation Quotes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                        <span className="font-medium">15-Minute Response Time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                        <span className="font-medium">Professional Assessment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                        <span className="font-medium">Flexible Scheduling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                        <span className="font-medium">Eco-Friendly Solutions</span>
                      </li>
                    </ul>
                  </div>

                  {/* Operating Hours */}
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700">
                    <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                      <Clock className="text-primary" size={20} /> Operating Hours
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-slate-700">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="font-bold text-primary">7:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-slate-700">
                        <span className="font-medium">Saturday</span>
                        <span className="font-bold text-primary">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">Sunday & Holidays</span>
                        <span className="font-bold text-primary">9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Service */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800">
                    <h3 className="font-black text-xl mb-3 text-red-700 dark:text-red-400">Emergency Service Available</h3>
                    <p className="text-red-600 dark:text-red-300 mb-4">
                      Need immediate cleaning or pest control? We offer emergency response 24/7.
                    </p>
                    <a
                      href={`tel:${company.phone}`}
                      className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition"
                    >
                      <Phone size={18} /> Call for Emergency
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Buttons */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">Contact Us Instantly</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
                Choose your preferred method for quick communication
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href={`tel:${company.phone}`}
                className="bg-gradient-to-r from-primary to-yellow-400 text-slate-900 font-black px-8 py-5 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg group"
              >
                <div className="bg-slate-900/10 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Call Us</div>
                  <div className="text-xl">{company.phone}</div>
                </div>
                <ArrowRight size={20} className="ml-auto" />
              </a>

              <a
                href={`https://wa.me/${company.phone.replace(/\D/g, '')}`}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-black px-8 py-5 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg group"
              >
                <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-xl">Chat Now</div>
                </div>
                <ArrowRight size={20} className="ml-auto" />
              </a>

              <a
                href={`mailto:${company.email}`}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-black px-8 py-5 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg group"
              >
                <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xl truncate">{company.email.split('@')[0]}</div>
                </div>
                <ArrowRight size={20} className="ml-auto" />
              </a>
            </div>

            {/* Map/Address Section */}
            <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="font-black text-2xl mb-6 text-center">Visit Our Office</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-300 mb-4">{company.location}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-primary" />
                      <span>Mon-Fri: 7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={20} className="text-primary" />
                      <span>By appointment recommended</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary" />
                      <span>Call ahead: {company.phone}</span>
                    </div>
                  </div>
                </div>
                {/* Map Placeholder */}
                <div className="bg-gray-800 h-64 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto text-primary mb-4" />
                    <p className="text-gray-300">Interactive Map</p>
                    <p className="text-sm text-gray-400">(Would show Google Maps integration)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}