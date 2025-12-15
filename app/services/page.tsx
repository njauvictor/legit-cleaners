"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { initialData } from "@/lib/db-data"
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Clock, Shield, Sparkles, Users, Award, Calendar } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Services() {
  const { services, company } = initialData
  const [selectedService, setSelectedService] = useState<number | null>(1)
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section - Full Screen */}
         <section className="relative min-h-screen text-white flex items-center justify-center overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/40 to-accent/10">
    {/* Replace this with your actual image */}
    <div 
      className="absolute inset-0 bg-[url('/heroservice.jpg')] bg-cover bg-center bg-no-repeat opacity-80"
      style={{
        backgroundImage: "url('/heroservice.jpg')", // Replace with your image path
      }}
    />
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
  </div>

  {/* Animated gradient blobs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium border border-white/20">
      <Sparkles size={18} className="text-primary" /> PREMIUM CLEANING SOLUTIONS
    </div>
    
    <h1 className="text-5xl md:text-6xl  font-black mb-8 leading-tight text-balance tracking-tight">
      Professional{" "}
      <span className="bg-primary bg-clip-text text-transparent animate-gradient">
        Cleaning Services
      </span>
      <br />
      <span className="text-3xl md:text-4xl lg:text-5xl text-gray-200 block mt-4">
        in Nairobi, Kenya
      </span>
    </h1>
    
    <p className="text-base  text-gray-200 max-w-3xl mx-auto leading-relaxed text-balance mb-12">
      Complete residential and commercial cleaning solutions using eco-friendly products and state-of-the-art equipment
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
      <a
        href={`tel:${company.phone}`}
        className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-105 text-lg shadow-lg hover:shadow-xl min-w-[200px]"
      >
        <ArrowRight size={20} /> Get Instant Quote
      </a>
      <a
        href="#services"
        className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-accent text-accent font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all min-w-[200px]"
      >
        <Sparkles size={20} /> Explore Services
      </a>
    </div>
    
    {/* Stats/Features */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
      <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
        <div className="text-3xl font-black text-primary mb-2">10+</div>
        <div className="text-sm text-gray-300">Services</div>
      </div>
      <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
        <div className="text-3xl font-black text-primary mb-2">24/7</div>
        <div className="text-sm text-gray-300">Availability</div>
      </div>
      <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
        <div className="text-3xl font-black text-primary mb-2">100%</div>
        <div className="text-sm text-gray-300">Satisfaction</div>
      </div>
      <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
        <div className="text-3xl font-black text-primary mb-2">Eco</div>
        <div className="text-sm text-gray-300">Friendly</div>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#services" className="text-white/60 hover:text-white transition-colors">
        <ChevronDown size={32} />
      </a>
    </div>
  </div>
</section>

        {/* Services Navigation Carousel */}
      <section className="sticky top-0 z-40 bg-accent/1 0 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
  <div className="max-w-6xl mx-auto px-4 md:p-12 mb-8">
  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance text-center pt-12 text-gray-600 ">Our Cleaning and Fumigation Services</h2>
    <div className="py-4">
      <div className="flex flex-wrap justify-center gap-2">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`relative px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${selectedService === service.id
                ? "bg-primary text-slate-900 shadow-lg ring-2 ring-primary/50"
                : "bg-accent/40 dark:bg-accent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600"
              }`}
          >
           
            <span className="text-sm font-medium  ">{service.name}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* Detailed Service Display */}
        <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-12">
            {selectedService && services.filter(s => s.id === selectedService).map((service) => (
              <div key={service.id} className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Service Image & Overview */}
                <div className="space-y-8">
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={service.image || "/placeholder.jpg"}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Quick Service</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
                      <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Eco-Friendly</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
                      <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Certified</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
                      <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Trained Staff</p>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
                      <Sparkles size={14} /> PREMIUM SERVICE
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">{service.name}</h2>
                    <p className="text-xl text-primary font-bold mb-6">{service.description}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">{service.details}</p>
                  </div>

                  {/* Scrollable Detailed Content */}
                  <div className="max-h-[200px] overflow-y-auto pr-4 space-y-6">
                    <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                        <CheckCircle className="text-primary" size={20} />
                        Service Details
                      </h3>
                      <div className="text-gray-700 dark:text-gray-300 space-y-4">
                        {service.detailedServiceContent && (
                          <div className="prose dark:prose-invert max-w-none">
                            <p className="leading-relaxed">{service.detailedServiceContent}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                      <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Shield className="text-primary" size={20} />
                        What's Included
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                          <span>Professional assessment and planning</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                          <span>Use of eco-friendly cleaning products</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                          <span>State-of-the-art equipment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                          <span>Trained and certified technicians</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                          <span>Quality inspection and guarantee</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                      <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Clock className="text-primary" size={20} />
                        Process & Timeline
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</div>
                          <div>
                            <p className="font-medium">Initial Assessment</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">We evaluate your space and needs</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</div>
                          <div>
                            <p className="font-medium">Customized Plan</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Tailored cleaning strategy</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</div>
                          <div>
                            <p className="font-medium">Professional Execution</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Expert cleaning with proper equipment</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">4</div>
                          <div>
                            <p className="font-medium">Quality Inspection</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Final check and approval</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="pt-6 border-t border-gray-200 dark:border-slate-700">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`tel:${company.phone}`}
                        className="flex-1 bg-primary text-white font-black py-4 px-6 rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 text-center inline-flex items-center justify-center gap-3"
                      >
                        <Calendar size={20} /> Schedule Service
                      </a>
                      <a
                        href={`tel:${company.phone}`}
                        className="flex-1 border-2 border-primary text-primary font-bold py-4 px-6 rounded-lg hover:bg-primary/10 transition-all text-center"
                      >
                        Get Free Quote
                      </a>
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-400 mt-4 text-sm">
                      📞 Call now: <a href={`tel:${company.phone}`} className="font-bold text-primary">{company.phone}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Services Grid (Collapsible) */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">All Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
                Browse our complete range of professional cleaning solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group ${selectedService === service.id ? 'ring-2 ring-primary' : ''
                    }`}
                >
                  <div className="relative h-96 overflow-hidden bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-700 dark:to-slate-800">
                    <Image
                      src={service.image || "/placeholder.jpg"}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black mb-2">{service.name}</h3>
                    <p className="text-gray-600 font-medium text-sm mb-4">{service.description}</p>
                    <p className="text-gray-500 dark:text-gray-300 text-sm mb-6 line-clamp-6">{service.details}</p>

                    <div className="space-y-4">
                      <button
                        onClick={() => setExpandedDetails(expandedDetails === service.id ? null : service.id)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span className="text-sm font-medium my-4">View Details</span>
                        {expandedDetails === service.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>

                      {expandedDetails === service.id && (
                        <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 max-h-60 overflow-y-auto">
                          {service.detailedServiceContent && (
                            <p className="leading-relaxed">{service.detailedServiceContent.substring(0, 3000)}...</p>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3 mt-6">
                   <Link href='/contact'>
                      <Button
                       
                        className="flex-1 bg-primary text-white font-bold py-4 px-4 rounded-lg hover:bg-yellow-400 transition text-center text-sm"
                      >
                        Contact Us
                      </Button>
                   </Link>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      
      </main>
      <Footer />
    </>
  )
}